import React from 'react'
import { Box, Control } from '@/Components'

interface ScreenControlLayoutProps {
	screen: Schema.ScreensShow
}

const ScreenControlLayout = ({ screen }: ScreenControlLayoutProps) => {
	return (
		<Box>
			{ screen?.controls?.map(control => <Control key={ control.id } control={ control } />) }
		</Box>
	)
}

export default ScreenControlLayout
