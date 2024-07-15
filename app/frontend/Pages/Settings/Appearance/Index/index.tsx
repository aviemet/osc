import React, { useEffect, useRef } from 'react'
import { Box, Title } from '@/Components'
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
			<Title mb={ 24 }>Appearance Settings</Title>
			<Box>
				<Title order={ 2 }>Company Theme</Title>

			</Box>
		</SettingsLayout>
	)
}

export default AppearanceSettings
