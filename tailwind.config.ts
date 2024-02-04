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
        'max-w-text',
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
        'w-2xl',
        'ml-4',
        'ml-6',
        'ml-8',
        'mr-4',
        'mr-8',
        'pl-4',
        'pl-8',
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

            animation: {
                slideRightToLeft: 'slideRightToLeft 100s linear infinite',
            },
            keyframes: {
                slideRightToLeft: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
            },


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
                sec: {
                    300: '#fffbcc',
                    500: '#ffea00',
                    700: '#ffd700',
                },
            },

            maxWidth: {
                'text': '738px', // equals with md
            },

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
        },
    },
    plugins: [require("tailwindcss-animate")],
}
