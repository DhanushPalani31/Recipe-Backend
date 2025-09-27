// middlewares/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ status: "fail", errors: messages });
  }

  // Duplicate key
  if (err.code && err.code === 11000) {
    return res.status(409).json({ status: "fail", message: "Duplicate key error", details: err.keyValue });
  }

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error"
  });
};
