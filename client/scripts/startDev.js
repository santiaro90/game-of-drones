const path = require('path')
const run = require('npm-run')

run.sync('npm start', {
  cwd: path.resolve(__dirname, '../'),
  stdio: 'inherit'
})
