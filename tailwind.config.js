// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            keyframes: {
                easePulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                },
            },
            animation: {
                'ease-pulse': 'easePulse 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
