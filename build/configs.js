const path = require('path')
const resolve = _path => path.resolve(__dirname, '../', _path)
const version = require('../package.json').version

const banner = `/*!
* vue-router v${version}
* (c) ${new Date().getFullYear()} Evan You
* @license MIT
*/`

module.exports = [
  // browser dev
  {
    file: resolve('dist/vue-router.js'),
    format: 'umd',
    env: 'development'
  }
].map(genConfig)

function genConfig (opts) {
  const config = {
    input: {
      input: resolve('src/index.js'),
      plugins: []
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: 'VueRouter'
    }
  }
  return config
}
