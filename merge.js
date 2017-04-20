// http://stackoverflow.com/questions/1683531/how-to-import-existing-git-repository-into-another#answer-8396318

const { snakeCase } = require('lodash')
const { execSync } = require('child_process')
const argv = require('minimist')(process.argv.slice(2))

const to = argv._[0]
const remote = snakeCase(to)
const command = `git subtree pull --prefix=packages/${to}/ ${remote} master`

console.log(command)
execSync(command)
