const axios = require("axios");

// Simulated event: A user places an order
const webhookData = {
  event: "order_placed",
  order: {
    id: "12345",
    user: "John Doe",
    total: "$50",
    items: ["Laptop", "Mouse"],
  },
};

// Send the webhook
axios
  .post("http://localhost:5000/webhook", webhookData)
  .then((response) => {
    console.log("Webhook sent successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error sending webhook:", error.message);
  });
