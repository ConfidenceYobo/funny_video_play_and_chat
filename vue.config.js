module.exports = {
  productionSourceMap: false,
  publicPath: "/",
  outputDir: "dist",
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
    name: "We Listen",
    themeColor: "#269900",
  },
};
