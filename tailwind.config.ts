import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'congress-blue': {
          '50': '#ebf9ff',
          '100': '#d1f2ff',
          '200': '#aee9ff',
          '300': '#76dfff',
          '400': '#35caff',
          '500': '#07a7ff',
          '600': '#0081ff',
          '700': '#0068ff',
          '800': '#0056d7',
          DEFAULT: '#004596', //900
          '950': '#062f65',
        },
        'chateau-green': {
          '50': '#eefff5',
          '100': '#d7ffea',
          '200': '#b2ffd6',
          '300': '#76ffb8',
          '400': '#33f592',
          '500': '#09de71',
          DEFAULT: '#00b559', //600
          '700': '#04914a',
          '800': '#0a713e',
          '900': '#0a5d35',
          '950': '#00341b',
        },
        'concrete-gray': {
          '50': '#f8f8f8',
          DEFAULT: '#f2f2f2', //100
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'swiss-coffee': {
          '50': '#f9f7f7',
          '100': '#f2eeee',
          '200': '#e7e2e1',
          DEFAULT: '#d7cdcc', //300
          '400': '#bdaeac',
          '500': '#a5908e',
          '600': '#8d7775',
          '700': '#756260',
          '800': '#625352',
          '900': '#544948',
          '950': '#2b2524',
        },
        'blush': {
          '50': '#fbf4f6',
          '100': '#f8ebef',
          '200': '#f2d8e1',
          '300': '#e9b8c8',
          '400': '#da8ca3',
          DEFAULT: '#ca6680', //500
          '600': '#b74b62',
          '700': '#9d394c',
          '800': '#82323f',
          '900': '#6d2e38',
          '950': '#41161d',
        },
      }
    },
    screens: {
      'tablet': '34.375rem',
      'laptop': '68.75rem',
      'desktop': '93.75rem',
    },
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
  },
  plugins: [],
};
export default config;
