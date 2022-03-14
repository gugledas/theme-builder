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
const CurrentThemeName = "smallfarm";

//const htmlDatas = [];
const htmlDatasKey = [];
//const CurrentThemeName = "gp";
//const CurrentThemeName = "flexor";
plugins.push(
  new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "[id].css"
  })
);
plugins.push(
  new HtmlWebpackPlugin({
    templateContent: () => {
      console.log("reload HtmlWebpackPlugin");
      let html = "<html>";
      //html += "<head>  </head>";
      html += "<body>";
      html += htmlDatas.join("\n");
      html += "</body>";
      html += "</html>";
      return html;
    },
    title: " Template  " + CurrentThemeName
  })
);

module.exports = {
  plugins,
  mode: env || "development", // on définit le mode en fonction de la valeur de NODE_ENV
  entry: {
    script: "./src/" + CurrentThemeName + "/" + CurrentThemeName + ".js"
  },
  output: {
    path: path.resolve(__dirname, "dist/" + CurrentThemeName),
    filename: "js/[name].js",
    assetModuleFilename: "images/[name][ext]"
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
            presets: ["@babel/preset-env"]
          }
        }
      },
      //règles de compilations pour les fichiers .css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: "../"
            }
          },

          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader", // améliore la résolution des chemins relatifs
            // (utile par exemple quand une librairie tierce fait référence à des images ou des fonts situés dans son propre dossier)
            options: {
              publicPath: "../images"
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
              implementation: require("sass")
            }
          }
        ]
      },
      //règles de compilations pour les fonts
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      //règles de compilations pour les images
      // {
      //   test: /\.(gif|png|jpe?g)$/i,
      //   use: [
      //     {
      //       // Using file-loader for these files
      //       //loader: "file-loader?name=[name].[ext]&outputPath=./images/",
      //       loader: "file-loader",
      //       // In options we can set different things like format
      //       // and directory to save
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: (__dirname, "/dist/" + CurrentThemeName + "/images")
      //       }
      //     },
      //     { loader: "image-webpack-loader" }
      //   ]
      // },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: true,
              preprocessor: (content, loaderContext) => {
                try {
                  var index = htmlDatasKey.indexOf(loaderContext.resource);
                  if (index !== -1) {
                    console.log("MAJ : ", index);
                    htmlDatas[index] = content;
                  } else {
                    htmlDatas.push(content);
                    htmlDatasKey.push(loaderContext.resource);
                  }
                } catch (error) {
                  return content;
                }

                return content;
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    //contentBase: path.resolve(__dirname, "./public"),
    port: 3000,
    //publicPath: "dist/gp",
    //watchContentBase: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist/" + CurrentThemeName)
    }
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      }),
      new TerserPlugin()
    ]
  }
};
