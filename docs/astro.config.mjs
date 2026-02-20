// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	base: "/Modulable-Keyboard-Developer.github.io",
	integrations: [
		starlight({
			title: 'MeKaBu Keyboard',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [		
				{
					label: 'ビルドガイド',
					autogenerate: { directory: 'guides' },
				},
			],
			customCss: ['./src/styles/style.css'],

		}),
	],
	
	vite: {
		plugins: [tailwindcss()],
	},
});
