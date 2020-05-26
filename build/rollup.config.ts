import { join } from 'path';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import license from 'rollup-plugin-license';

export default {
  input: join(__dirname, '../index.ts'),
  output: [
    {
      format: 'cjs',
      file: join(__dirname, '../dist/dockctl.js')
    }
  ],
  plugins: [
    commonjs(),
    typescript(),
    license({
      banner: {
        commentStyle: 'none',
        content: '#!/usr/bin/env node'
      }
    })
  ]
}
