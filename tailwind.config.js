/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'custom-black': '#000000',
                'custom-gray': '#434343',
              },
        },
      },
    plugins: [],
};