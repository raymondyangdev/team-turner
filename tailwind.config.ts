import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                'rw-yellow': '#FFE512',
                'rw-grey': '#333333',
                'rw-black': '#171E1A',
                'rw-lite-grey': '#8A8D8C',
                'rw-white': '#FFFFFF',
                'rw-off-white': '#F8F8F9',
            },
        },
    },
    plugins: [],
};
export default config;
