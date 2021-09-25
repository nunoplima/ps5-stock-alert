import { links, Link, LinkType } from "./links";
import { sendAlert } from "./sendAlert";
import { chromium, Page } from "playwright";

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const handleStockAvailability = async (
  link: Link,
  stockFound: boolean,
  page: Page
) => {
  if (!stockFound) {
    console.log(`Still no stock for ${link.name}`);
    return;
  }

  await sendAlert(
    `🚨 ${" "}There might be a PS5 (${link.name}) in stock at ${link.url}`,
    page
  );
};

export const checkPages = async () => {
  const browser = await chromium.launch({
    chromiumSandbox: false,
    headless: process.env.HEADLESS === "true",
  });
  const browserContext = await browser.newContext({
    viewport: {
      width: 2560,
      height: 1440,
    },
  });

  for (const link of links) {
    const page = await browserContext.newPage();
    await page.goto(link.url);

    if (link.type === LinkType.FNAC) {
      const addToCartButton = await page.$(
        '.ff-button-label:has-text("Adicionar ao Cesto")'
      );

      await handleStockAvailability(
        link,
        !!addToCartButton,
        page
      );
    }

    if (link.type === LinkType.MEDIAMARKT) {
      const actionStr = await page.innerText('#AddToCartText');

      await handleStockAvailability(
        link,
        actionStr.toLowerCase().trim() === 'comprar',
        page
      );
    }

    if (link.type === LinkType.WORTEN) {
      await sleep(1500);

      const cookiesButton = await page.$('.w-button-primary');
      const cookiesButtonStr = await cookiesButton?.innerText();

      if (cookiesButtonStr?.toLowerCase().trim() === 'aceitar tudo') {
        await cookiesButton?.click({ force: true });
        await sleep(1500);
      }

      const buyButton = await page.$(
        '.w-button-primary.qa-product-options__add-cart-linkto.w-checkout-button.iss-checkout-button'
      );

      await handleStockAvailability(
        link,
        !!buyButton,
        page
      );
    }

    if (link.type === LinkType.REPLAY) {
      const buyButton = await page.$(".gr-stock.gr-stock-success");
      await handleStockAvailability(link, !!buyButton, page);
    }

    await page.close();
  }

  await browserContext.close();
  await browser.close();
};
