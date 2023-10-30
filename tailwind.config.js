/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "main": "#A4B1F5",
                "main-light": "#F5F5FF",
                "main-dark": "#5B69E4",
                "second": "#FCA920",
                "second-light": "#FFF4E9",
                "second-dark": "#FF8A00",
                "error": "#E81919",
                "error-light": "#F9005C",
                "error-light-soft": "#D26276",
            },
            fontFamily: {
                sans: ["SignikaNegative"],
                fontHeader: ["lilitaOne"],
            },
        },
    },
    plugins: [],
};
