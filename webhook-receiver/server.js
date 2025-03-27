const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);

  // Send a response
  res.status(200).json({ message: "Webhook received successfully!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Webhook server listening on port ${PORT}`));
