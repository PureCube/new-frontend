/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
    "./entities/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
    fontFamily: {
			'heading-semibold': ['BeVietnamPro-SemiBold'],
			'heading-medium': ['BeVietnamPro-Medium'],
			'body-semibold': ['NeutrifPro-SemiBold'],
			'body-regular': ['NeutrifPro-Regular'],
		},
    extend: {},
  },
  plugins: [],
}
