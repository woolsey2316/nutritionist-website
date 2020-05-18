/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const fromRoot = name => path.resolve(__dirname + '/../node_modules/' + name)

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  
  actions.setWebpackConfig({
    devtool: "eval-source-map",
    /*
    resolve: {
      alias: {
        "react": path.resolve('./node_modules/react')
      }
    }
    */
  })
  
 
  /*
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
  */
}
