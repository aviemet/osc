import { StateCreator } from "zustand"
import { type MantineTheme } from "@mantine/core"
import { calculateContrastingColor } from "../colors"

export interface ContrastingColorSlice {
	contrastingColorsMap: Map<string, string>
	setThemeData: (theme: MantineTheme, colorScheme: "light" | "dark") => void
	getContrastingColor: (color: string) => string
}

export const createContrastingColorSlice: StateCreator<ContrastingColorSlice> = (set, get) => {
	let theme: MantineTheme
	let colorScheme: "light" | "dark"

	return {
		theme: undefined,
		colorScheme: "light",
		contrastingColorsMap: new Map(),

		setThemeData: (newTheme, newColorScheme) => {
			theme = newTheme
			colorScheme = newColorScheme
		},

		getContrastingColor: (color) => {
			const { contrastingColorsMap } = get()

			if(contrastingColorsMap.has(color)) {
				return contrastingColorsMap.get(color)!
			}

			const contrastingColor = calculateContrastingColor(color, theme, colorScheme)
			contrastingColorsMap.set(color, contrastingColor)

			return contrastingColor
		},
	}
}
