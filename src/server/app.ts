const isDev = process.env.NODE_ENV === "development"

module.exports = {
devServer: {
proxy: isDev ? "http://localhost:5000" : false,
},
outputDir: "../dist",
assetsDir: "static"
}