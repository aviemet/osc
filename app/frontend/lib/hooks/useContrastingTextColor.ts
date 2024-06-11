import { isLightColor, type MantinePrimaryShade, useMantineColorScheme, useMantineTheme } from '@mantine/core'

const useContrastingTextColor = (color: string) => {
	const { colors, primaryShade } = useMantineTheme()
	const { colorScheme } = useMantineColorScheme()

	if(color === undefined) return 'black'

	let validatedColor = color
	if(Object.keys(colors).includes(color)) {
		const shade = (primaryShade as MantinePrimaryShade)[(colorScheme as 'light'|'dark')]
		validatedColor = colors[color][shade]
	}

	return isLightColor(validatedColor, 0.379) ? 'black' : 'white'
}

export default useContrastingTextColor
