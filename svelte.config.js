import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})]
};

if (process.env.NODE_ENV == 'development') {
	config.kit = {
		adapter: adapter()
	};
}

export default config;
