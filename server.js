const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// GET / - Welcome route
app.get("/", (request, response) => {
response.status(200).send("Welcome to my Node.js and Express Server!");
});

// GET /about - Student information
app.get("/about", (request, response) => {
response.status(200).json({
name: "Vikas Elle",
registrationNumber: "252U1R5042",
section: "106 AIDE-2A"
});
});

// GET /time - Current date and time
app.get("/time", (request, response) => {
response.status(200).json({
currentDateTime: new Date().toString()
});
});

// Handle unknown routes
app.use((request, response) => {
response.status(404).json({
error: "404 - Route not found"
});
});

// Start the server
app.listen(PORT, () => {
console.log(`Express server running on port ${PORT}`);
});
