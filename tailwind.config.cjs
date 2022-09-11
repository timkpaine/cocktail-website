const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['montserrat', 'Roboto', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				darkblue: '#00101a',
				indigo: colors.indigo,
				blue: colors.blue,
				red: colors.red,
				orange: colors.orange,
				yellow: colors.yellow,
				green: colors.green,
				teal: colors.teal,
				purple: colors.purple,
				pink: colors.pink,
				slate: colors.slate,
				zinc: colors.zinc,
				neutral: colors.neutral,
				stone: colors.stone,
				amber: colors.amber,
				lime: colors.lime,
				emerald: colors.emerald,
				cyan: colors.cyan,
				sky: colors.sky,
				violet: colors.violet,
				fuchsia: colors.fuchsia,
				rose: colors.rose,
				theme: {
					50: '#fdfcfa',
					100: '#fbf0e8',
					200: '#f7d1d0',
					300: '#eda5a6',
					400: '#e7757a',
					500: '#d95156',
					600: '#c0373b',
					700: '#982a2c',
					800: '#666666',
					900: '#444444'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};

module.exports = config;
