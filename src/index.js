#!/usr/bin/env node

const command = require('commander');
const readStream = require('./stream');

command.version('1.0.0').description('bloomon test');

command
  .command('start <path>')
  .description('start warehouse')
  .action(path => readStream(path, process.stdout));

// Assert that a VALID command is provided
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  command.outputHelp();
  process.exit();
}

command.parse(process.argv);
