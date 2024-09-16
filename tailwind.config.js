/** @type {import('tailwindcss').Config} */
export default {
	content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
	theme: {
		extend: {
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
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
