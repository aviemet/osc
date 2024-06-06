import React, { useEffect, useRef } from 'react'
import { Box, Heading } from '@/Components'
import SettingsLayout from '../../SettingsLayout'
import useLayoutStore from '@/lib/store/LayoutStore'

interface IAppearanceSettingsProps {
	settings: {
		primary_color?: string
	}
}

const AppearanceSettings = ({ settings }: IAppearanceSettingsProps) => {
	const { primaryColor, setPrimaryColor } = useLayoutStore()
	const RevertColorRef = useRef<string>(primaryColor!)

	useEffect(() => {
		return () => {
			setPrimaryColor(RevertColorRef.current)
		}
	}, [])

	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Appearance Settings</Heading>
			<Box>
				<Heading order={ 2 }>Company Theme</Heading>

			</Box>
		</SettingsLayout>
	)
}

export default AppearanceSettings
