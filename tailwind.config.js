/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            'primary': 'var(--primary-color)',
            'whatsapp': 'var(--whatsapp-green)',
            'dark': 'var(--text-dark)',
            'light': 'var(--text-light)',
        },
    },
};
export const plugins = [];
