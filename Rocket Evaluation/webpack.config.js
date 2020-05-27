const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    content: path.join(__dirname, "content.js"),
    background: path.join(__dirname, "background.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
};
