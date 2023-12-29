import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      emoji: [
        "Twemoji Mozilla",
        "Apple Color Emoji",
        "Noto Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Segoe UI",
        "EmojiOne Color",
        "Android Emoji",
      ],
    },
    extend: {
      keyframes: {
        flyEmoji: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateY(-150px) scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        flyEmoji: "flyEmoji 1s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
