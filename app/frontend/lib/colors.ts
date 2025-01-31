import { isLightColor, MantinePrimaryShade, MantineTheme } from "@mantine/core"

export const calculateContrastingColor = (
	color: string,
	theme: MantineTheme,
	colorScheme: "light" | "dark"
) => {
	const black = theme?.black || "#000000"
	const white = theme?.white || "#FFFFFF"

	if(color === "black") return white
	if(color === "white" || color === undefined) return black

	let validatedColor = color
	if(validatedColor.charAt(0) !== "#") {
		if(!theme || !colorScheme) return black

		const colors = theme.colors
		const primaryShade = theme.primaryShade as MantinePrimaryShade

		if(Object.keys(colors).includes(color)) {
			const shade = primaryShade[colorScheme]
			validatedColor = colors[color][shade]
		}
	}

	return isLightColor(validatedColor) ? black : white
}
