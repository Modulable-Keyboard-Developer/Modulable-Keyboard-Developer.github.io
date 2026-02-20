// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// This repo is a GitHub *user/organization* Pages site (repo name ends with `.github.io`),
	// so it’s served from the domain root, not a subpath.
	site: 'https://Modulable-Keyboard-Developer.github.io',
	base: '/',
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
			],
			title: 'MeKaBu',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Modulable-Keyboard-Developer/Modulable-Keyboard-Developer.github.io' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/teporz' },
			],
			sidebar: [
				{
					label: 'ビルドガイド',
					autogenerate: { directory: 'guides' },
				}
			],
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://Modulable-Keyboard-Developer.github.io/og-image.jpg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:title',
						content: 'MeKaBu',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: '共同開発プロジェクトにて開発した、6列オーソリニア配列を基軸とした、拡張モジュールによる機能拡張が可能な、無線分割式キーボードです。',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://Modulable-Keyboard-Developer.github.io/og-image.jpg',
					},
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
