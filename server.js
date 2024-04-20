const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mainRoutes = require("./main.routes");
const userRoutes = require("./user.routes");
const rateLimit = require("express-rate-limit");
const compression = require("compression");

const app = express();
const port = 4000;

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 100, // Limit each IP to 100 requests per `window` (here, per minute)
});

app.use(compression());

// Apply the rate limiting middleware to API calls only
// Further info about rate limiting https://en.wikipedia.org/wiki/Rate_limiting
app.use(rateLimiter);

// Parse incoming JSON requests and add it in `req.body`
app.use(express.json());

app.use(helmet());
app.use(cors());

app.use("/v1", mainRoutes);
app.use("/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
