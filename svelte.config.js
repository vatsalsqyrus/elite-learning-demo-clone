import adapter from '@sveltejs/adapter-vercel';  // Change from adapter-auto to adapter-vercel
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'edge'  // Specify edge runtime to avoid Node.js version issues
		})
	},
	preprocess: vitePreprocess()
};

export default config;