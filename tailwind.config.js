export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#5038f0",
                "bg-dark": "#090919",
                "bg-card": "#1a1a3a",
                "bg-surface": "#12122b",
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"]
            },
            animation: {
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'subtle-pan': 'subtle-pan 40s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(80, 56, 240, .3)' },
                    '50%': { boxShadow: '0 0 40px rgba(80, 56, 240, .6)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'subtle-pan': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                }
            }
        },
    },
    plugins: [],
}
