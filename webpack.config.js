//webpack.config.js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// on récupère la valeur de NODE_ENV
const env = process.env.NODE_ENV;

const devMode = process.env.NODE_ENV !== "production";

const plugins = [];
const htmlDatas = [""];
const CurrentThemeName = "gp";

plugins.push(
  new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "[id].css",
  })
);
plugins.push(
  new HtmlWebpackPlugin({
    templateContent: () => {
      let html = "<html>";
      //html += "<head>  </head>";
      html += "<body>";
      html += htmlDatas.join("\n");
      html += "</body>";
      html += "</html>";
      return html;
      // return htmlDatas.join("");
    },
    filename: CurrentThemeName + ".html ",
    title: " Template  " + CurrentThemeName,
  })
);

console.log("devMode", devMode);
module.exports = {
  plugins,
  mode: env || "development", // on définit le mode en fonction de la valeur de NODE_ENV
  entry: {
    script: "./src/" + CurrentThemeName + "/" + CurrentThemeName + ".js",
  },
  output: {
    path: path.resolve(__dirname, "dist/" + CurrentThemeName),
    filename: "js/[name].js",
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: devMode ? "inline-source-map" : false,
  module: {
    rules: [
      //règles de compilations pour les fichiers .js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //règles de compilations pour les fichiers .css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: "../"
            },
          },

          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader", // améliore la résolution des chemins relatifs
            // (utile par exemple quand une librairie tierce fait référence à des images ou des fonts situés dans son propre dossier)
            options: {
              publicPath: "../images",
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
              implementation: require("sass"),
            },
          },
        ],
      },
      //règles de compilations pour les fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
        },
      },
      //règles de compilations pour les fichiers html
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "html/",
      //       },
      //     },
      //   ],
      //   exclude: path.resolve(__dirname, "./src/index.html"),
      // },
      // reégles pour le html.
      // {
      //   test: /\.html$/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "[name][ext]",
      //   },
      // },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false,
              preprocessor: (content, loaderContext) => {
                try {
                  htmlDatas.push(content);
                } catch (error) {
                  loaderContext.emitError(error);
                  return content;
                }
                return content;
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    //contentBase: path.resolve(__dirname, "./public"),
    port: 3000,
    //publicPath: "/dist/",
    //watchContentBase: true,
    hot: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin(),
    ],
  },
};
