// import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { createTsupConfig } from '../../scripts/tsup.config';

export default createTsupConfig({
	target: 'es2019',
	bundle: false,
	entry: ['src/**/*.ts', '!src/**/*.d.ts'],
	format: ['esm', 'cjs'],
	dts: false,
	outExtension: (ctx) => ({
		js: ctx.format === 'esm' ? '.mjs' : '.cjs'
	})
	// esbuildPlugins: [esbuildPluginFilePathExtensions()]
});
