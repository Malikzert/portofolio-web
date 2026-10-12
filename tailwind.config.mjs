/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#050508',
				gold: '#f5e6a8',
				accent: '#f5e6a8',
			}
		},
	},
	plugins: [],
}
