const express = require("express");
const winston = require("winston");

const app = express();
const port = 3040;

// Configure Winston Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "calculator-microservice" },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

// Arithmetic Functions
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
  if (n2 === 0) throw new Error("Cannot divide by zero");
  return n1 / n2;
};

// Middleware for input validation
const validateInputs = (req, res, next) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1) || isNaN(n2)) {
      throw new Error("Invalid input: Both n1 and n2 must be numbers");
    }
    req.n1 = n1;
    req.n2 = n2;
    next();
  } catch (error) {
    logger.error(error.message);
    res.status(400).json({ statusCode: 400, message: error.message });
  }
};

// API Endpoints
app.get("/add", validateInputs, (req, res) => {
  const result = add(req.n1, req.n2);
  logger.info(`Addition: ${req.n1} + ${req.n2} = ${result}`);
  res.json({ statusCode: 200, data: result });
});

app.get("/subtract", validateInputs, (req, res) => {
  const result = subtract(req.n1, req.n2);
  logger.info(`Subtraction: ${req.n1} - ${req.n2} = ${result}`);
  res.json({ statusCode: 200, data: result });
});

app.get("/multiply", validateInputs, (req, res) => {
  const result = multiply(req.n1, req.n2);
  logger.info(`Multiplication: ${req.n1} * ${req.n2} = ${result}`);
  res.json({ statusCode: 200, data: result });
});

app.get("/divide", validateInputs, (req, res) => {
  try {
    const result = divide(req.n1, req.n2);
    logger.info(`Division: ${req.n1} / ${req.n2} = ${result}`);
    res.json({ statusCode: 200, data: result });
  } catch (error) {
    logger.error(error.message);
    res.status(400).json({ statusCode: 400, message: error.message });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Calculator microservice running on port ${port}`);
  logger.info(`Server started on port ${port}`);
});
