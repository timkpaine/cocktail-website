/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'Roboto', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				dark: '#111111',
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
				gray: colors.gray,
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
					800: '#6d1d1e',
					900: '#431211'
				}
			}
		}
	},
	plugins: [
		// import('@tailwindcss/forms'),
		// import('@tailwindcss/line-clamp'),
		// import('@tailwindcss/typography'),
		// import('@tailwindcss/aspect-ratio')
	]
};
