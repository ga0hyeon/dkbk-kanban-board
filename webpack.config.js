var path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".scss", ".css", ".js", ".jsx"],
  },
  entry: {
    main: ["./src/index.ts"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env",
                "@babel/preset-typescript",
              ],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  watch: true,
};
