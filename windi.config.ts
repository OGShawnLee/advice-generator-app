import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			crayola: 'hsl(150, 100%, 66%)',
			cyan: {
				50: 'hsl(193, 38%, 86%)'
			},
			slate: {
				600: 'hsl(217, 19%, 38%)',
				700: 'hsl(217, 19%, 24%)',
				800: 'hsl(218, 23%, 16%)'
			}
		},
		fontFamily: {
			manrope: ['Manrope', 'sans-serif']
		}
	}
});
