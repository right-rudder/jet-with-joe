import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans2: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand Variable", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        stock: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
			colors: {
				primary: {
					'50': '#f1f8fe',
					'100': '#e3effb',
					'200': '#c0dff7',
					'300': '#89c7f0',
					'400': '#4aa9e6',
					'500': '#238ed4',
					'600': '#1677be',
					'700': '#125a92',
					'800': '#134d79',
					'900': '#154165',
					'950': '#0e2a43',
				},
				accent: {
					'50': '#fbffe7',
					'100': '#f4ffc1',
					'200': '#eeff86',
					'300': '#ecff41',
					'400': '#f2ff0d',
					'500': '#ffff00',
					'600': '#d1bf00',
					'700': '#a68b02',
					'800': '#896c0a',
					'900': '#74580f',
					'950': '#443004',
				},
				'cod-gray': {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#111111',
				},
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
