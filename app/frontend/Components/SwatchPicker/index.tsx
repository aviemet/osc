import React, { useCallback } from 'react'
import { Group, useMantineTheme, ColorSwatch, CheckIcon, rem, useComputedColorScheme } from '@mantine/core'
import cx from 'clsx'
import * as classes from './SwatchPicker.css'

export interface SwatchPickerProps {
	value: string
	onChange(value: string): void
}

const SwatchPicker = ({ value, onChange }: SwatchPickerProps) => {
	const colorScheme = useComputedColorScheme()
	const theme = useMantineTheme()

	const colors = useCallback(() => {
		return Object.keys(theme.colors).filter(color => {
			return !['dark','gray'].includes(color)
		}).map((color) => (
			<ColorSwatch
				key={ color }
				color={ colorScheme === 'dark' ? theme.colors[color][7] : theme.colors[color][5] }
				component="button"
				type="button"
				onClick={ () => onChange(color) }
				radius="sm"
				className={ cx(classes.colorSwatch) }
				style={ {
					color: colorScheme === 'dark' ? theme.colors[color][2] : theme.white,

				} }
			>
				{ value === color && <CheckIcon width={ rem(12) } height={ rem(12) } /> }
			</ColorSwatch>
		))
	}, [value, colorScheme])

	return (
		<Group gap={ 2 } mt={ 5 }>
			{ colors() }
		</Group>
	)
}

SwatchPicker.initialValue = 'violet'

export default SwatchPicker
