import { command } from './src/core';

command('ls', ['-al']).then(({ data }) => console.log(data)).catch(console.error);