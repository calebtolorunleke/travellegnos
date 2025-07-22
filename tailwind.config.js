// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            animation: {
                'zoom-in': 'zoomIn 0.5s ease-out forwards',
            },
            keyframes: {
                zoomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
