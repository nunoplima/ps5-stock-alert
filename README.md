# PS5 alert

Code forked from the awesome work here: https://github.com/matyushen/ps5-stock-alert

If you are on Windows WSL2 follow this blog post (we ain't using cypress, but it still apllies): https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress

```yarn run-check-stock``` to test your implementation

Don't forget to create an `.env` file in the root:

```dotenv
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_MESSAGING_SERVICE_ID=
SMS_TO= [may take multiple numbers separated by '_', i.e: +351960000000_+351920000000]
```
