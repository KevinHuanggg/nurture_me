/** @type {import('tailwindcss').Config} */
export default {
	content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"Noto Sans TC"',
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},

			fontSize: {
				// H1 到 H7 通用類別樣式設定
				heading: [
					"80px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h1: [
					"64px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h2: [
					"56px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h3: [
					"40px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h4: [
					"32px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h5: [
					"28px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h6: [
					"24px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],
				h7: [
					"20px",
					{
						lineHeight: "1.2",
						letterSpacing: "0.04em",
						fontWeight: "700",
					},
				],

				// fs-1 到 fs-10 通用類別樣式設定
				...(() => {
					const sizes = {};
					const lineHeight = "1.5";
					const letterSpacing = "0.02em";

					// 定義 fs-1 到 fs-10 的字體大小
					const fontSizes = {
						"fs-1": "40px",
						"fs-2": "32px",
						"fs-3": "28px",
						"fs-4": "24px",
						"fs-5": "20px",
						"fs-6": "16px",
						"fs-7": "14px",
						"fs-8": "12px",
						"fs-9": "8px",
						"fs-10": "6px",
					};

					// 為每個字體大小設置固定的行高和字母間距
					for (const [key, size] of Object.entries(fontSizes)) {
						sizes[key] = [
							size,
							{
								lineHeight: lineHeight,
								letterSpacing: letterSpacing,
							},
						];
					}

					return sizes;
				})(),
			},

			colors: {
				primary: {
					DEFAULT: "#27337B",
					1: "#27337B",
					2: "#3E4D9C",
					3: "#7782B8",
					4: "#C3C8E1",
				},
				secondary: {
					DEFAULT: "#EF4323",
					1: "#EF4323",
					2: "#F26348",
					3: "#F6927F",
				},
				highlight: {
					DEFAULT: "#FFEE75",
				},
			},

			backgroundImage: {
				donation_banner:
					"url('/assets/images/donation/donation_banner.jpg')",
			},

			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1200px",
				"2xl": "1400px",
			},
		},

		container: {
			center: true,
			padding: "24px",
			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1200px",
				"2xl": "1400px",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
