import { Configuration } from "webpack";
import path from "path";
import { VueLoaderPlugin } from "vue-loader";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Configuration = {
  mode: "production",
  entry: {
    main: "./client/src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          configFile: path.resolve(__dirname, "tsconfig.client.json"),
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: { "@": path.resolve(__dirname, "src") },
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackManifestPlugin({
      fileName: path.resolve(__dirname, "../server/manifest.json"),
      publicPath: "",
      useEntryKeys: true,
    }),
    new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }),
  ],
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../server/public"),
    assetModuleFilename: "assets/[name].[hash][ext]",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [`...`],
  },
};

export default config;
