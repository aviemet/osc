import { useColorScheme } from "@mantine/hooks"

export const useColorSchemeOption = (light: any, dark: any) => {
	const colorScheme = useColorScheme()

	return colorScheme === "dark" ? dark : light
}
