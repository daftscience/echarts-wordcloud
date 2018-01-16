// var PROD = process.argv.indexOf('-p') >= 0;

// console.log("Running Webpack");
// console.log(`Building ${PROD}`);

// module.exports = {
//     entry: './src/wordCloud.js',
//     output: {
//         // libraryTarget: 'umd',
//         // library: ['echarts-wordcloud'],
//         path: __dirname + '/dist',
//         filename: PROD ? '[name].min.js' : '[name].js'
//     },
// };
const path = require('path');

module.exports = {
  entry: './src/wordCloud.js',
  output: {
    filename: 'echarts-wordcloud.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
      'echarts/lib/echarts': 'echarts'
  }
};
