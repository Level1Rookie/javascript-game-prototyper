const path = require('path');
//const argv = require('argv');

const project = 'game1_tag';
//const project = 'game2_shooter';
const projectEntry = `./src/${project}/index.js`;
module.exports = {
  entry: projectEntry,
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};