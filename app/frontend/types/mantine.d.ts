import { type SelectProps, type InputProps } from '@mantine/core'

type OverriddenColors = {
	[key in keyof Colors]: key extends 'primary'
		? {
			0: string
			1: string
			2: string
			3: string
			4: string
			5: string
			6: string
			7: string
			8: string
			9: string
			filled: string
			filledHover: string
			light: string
			lightHover: string
			lightColor: string
			outline: string
			outlineHover: string
		}
		: Colors[key]
}

declare module '@mantine/vanilla-extract/lib/types' {
	type Colors = OverriddenColors

	interface MantineVars {
		colors: OverriddenColors
	}
}

declare module '@mantine/vanilla-extract' {
	type Colors = OverriddenColors

	interface MantineVars {
		colors: OverriddenColors
	}
}

declare module '@mantine/core' {
	export interface MantineThemeOther {
		colorSchemeOption: (light: any, dark: any) => any
		header: {
			height: number
		}
		navbar: {
			width: {
				closed: number
				open: number
			}
		}
		footer: {
			height: number
		}
		table: {
			sortButtonHeight: number | string
			sortButtonWidth: number | string
		}
		colors: {
			primary: OverriddenColors
		}
	}

	// https://phelipetls.github.io/posts/polymorphic-components-react-typescript/

	type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>

	type PolymorphicProps<
		T extends React.ElementType = React.ElementType,
		TProps = {}
	> = {
		as?: T
	} & TProps &
	Omit<PropsOf<T>, keyof TProps & 'as'>

	interface PolymorphicComponent<T extends React.Element> {
		as: T
	}
}
