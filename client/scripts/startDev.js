const path = require('path')
const run = require('npm-run')

run.sync('yarn start', {
  cwd: path.resolve(__dirname, '../'),
  stdio: 'inherit'
})
