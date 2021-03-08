// tailwind.config.js
module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				80: '20rem',
				100: '25rem',
				110: '27.5rem',
				120: '30rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
