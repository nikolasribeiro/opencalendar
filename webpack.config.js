import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.tsx", // Punto de entrada
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Carpeta de salida
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Transpila archivos .ts y .tsx
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpia la carpeta de salida antes de cada build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Genera un index.html y lo incluye en la salida
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
  },
};
