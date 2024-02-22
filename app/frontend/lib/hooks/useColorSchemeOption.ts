import { useColorScheme } from '@mantine/hooks'

const useColorSchemeOption = (light: any, dark: any) => {
	const colorScheme = useColorScheme()

	return colorScheme === 'dark' ? dark : light
}

export default useColorSchemeOption
