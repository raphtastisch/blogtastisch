/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  safelist: [
    'h-40',
    'h-48',
    'h-56',
    'h-xs',
    'sm:h-illustration',
    'md:h-illustration',

    'h-illustration',
    'h-sm',
    'h-md',
    'h-lg',
    'h-xl',
    'h-2xl',
    'w-xs',
    'w-sm',
    'w-md',
    'w-lg',
    'w-xl',
    'w-2xl'
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        purewhite: '#ffffff',
        pureblack: '#000000',
        black: '#040802', //'#040301',
        white: "#F9FDF7",//"#F9FDF7",//"#F6FBF3", // old brownish'#f7f5f3',
        main: {
          50: '#f2faeb',
          100: '#e3f3d4',
          200: '#c8e9ad',
          300: '#a5d97d',
          400: '#84c754',
          500: '#66ac36',
          600: '#4d8927',
          700: '#3c6922',
          800: '#365922',
          900: '#2d481f',
          950: '#15270c',
        },
        // maingradient: 'linear-gradient(to right, #4D8927, #365922)',
        sec: {
          300: '#fffbcc',
          500: '#ffea00',
          700: '#ffd700',
        },


        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },

      // borderWidth: {
      //   16: "16px",
      // },

      width: {
        'xs': '320px',
        "sm": "610px",
        "md": "738px",
        "lg": "974px",
        "xl": "1250px",
        "2xl": "1506px",
        // 'sm': '576px',
        // 'md': '768px',
        // 'lg': '992px',
        // 'xl': '1200px',
      },
      height: {
        'xs': '320px',
        'illustration': '420px',
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        // 'sm': '576px',
        // 'md': '768px',
        // 'lg': '992px',
        // 'xl': '1200px',
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
