import cmd from './src/core/cmd';

cmd('ls', ['-al']).then(({ data }) => console.log(data)).catch(console.error);