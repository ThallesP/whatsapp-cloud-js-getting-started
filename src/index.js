const { Client } = require("whatsapp-cloud.js");

const client = new Client({
  auth: {
    accessToken: "<YOUR_ACCESS_TOKEN>",
    phoneNumberID: "<YOUR_PHONE_NUMBER_ID>",
  }, // You can get this information at developers.facebook.com
});

async function main() {
  await client.messages.sendTemplateMessage({
    templateName: "hello_world",
    to: "<RECIPIENT_PHONE_NUMBER>", // If you're using a test phone number, make sure to verify your recipient phone number or it'll fail.
  });
}

main()
  .then(() => {
    console.log("Message has been sent! Exiting...");
  })
  .catch((err) => {
    console.log(`Failed to send message! Err:\n${err}`);
  });
