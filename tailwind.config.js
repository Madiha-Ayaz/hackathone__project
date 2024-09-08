"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                padding: "15px",
                center: true,
            },
            colors: {
                accent: '#FF8F9C',
            },
        },
    },
    plugins: [],
};
exports.default = config;
