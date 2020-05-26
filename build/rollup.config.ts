import { join } from 'path';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  input: join(__dirname, '../index.ts'),
  output: [
    {
      file: join(__dirname, '../dist/dockctl.js')
    }
  ],
  plugins: [
    commonjs(),
    typescript()
  ]
}
