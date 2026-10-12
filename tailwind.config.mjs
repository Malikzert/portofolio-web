/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#04040a',
				bgalt: '#0b1026',
				neon: 'rgb(var(--accent-rgb) / <alpha-value>)',
				accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
				gold: 'rgb(var(--accent-rgb) / <alpha-value>)',
				cyborg: '#ff3c38',
				background: 'var(--background)',
				surface: 'var(--surface)',
				card: 'var(--card)',
				foreground: 'var(--foreground)',
				muted: 'var(--muted)',
				'muted-foreground': 'var(--muted-foreground)',
				border: 'var(--border)',
			},
			fontFamily: {
				display: ['Orbitron', 'Inter', 'Poppins', 'sans-serif'],
			},
			boxShadow: {
				neon: '0 0 20px rgb(var(--accent-rgb) / 0.35), 0 0 60px rgb(var(--accent-rgb) / 0.15)',
				cyborg: '0 0 20px rgba(255,60,56,0.25)',
			},
			backgroundImage: {
				'grid': 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
			}
		},
	},
	plugins: [],
}
