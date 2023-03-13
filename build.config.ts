import { defineConfig } from "tsup";
import Vue from 'unplugin-vue/esbuild'
import VueJsx from 'unplugin-vue-jsx/esbuild'
import type { Plugin } from 'esbuild'
import type { Options } from 'tsup'

export default defineConfig((options: Options) => {
  const esbuildPlugins: Plugin[] = [Vue(), VueJsx()]
  
  return {
    entry: ["./src/main.ts"],
    target: 'es2019',
    platform: 'browser',
    esbuildPlugins,
    format: ['esm', 'cjs'],
    tsconfig: './tsconfig.json',
    // dts: true,
    minify: false,
    splitting: false,
    // sourcemap: true,
    // clean: true,
    // shims: true,
  };
});
