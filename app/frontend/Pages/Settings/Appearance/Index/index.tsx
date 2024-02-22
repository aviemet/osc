import React, { useCallback, useEffect, useRef } from 'react'
import { Box, Heading } from '@/Components'
import { Form, Submit } from '@/Components/Form'
import SettingsLayout from '@/Layouts/AppLayout/SettingsLayout'
import { Routes } from '@/lib'
import { defaults } from 'lodash'
import useLayoutStore from '@/lib/store/LayoutStore'
import { type UseFormProps } from 'use-inertia-form'

interface IAppearanceFormData {
	settings: {
		primary_color: string
	}
}

interface IAppearanceSettingsProps {
	settings: {
		primary_color?: string
	}
}

const AppearanceSettings = ({ settings }: IAppearanceSettingsProps) => {
	const { primaryColor, setPrimaryColor } = useLayoutStore()
	const RevertColorRef = useRef<string>(primaryColor!)

	const handleChange = (color: string) => {
		setPrimaryColor(color)
	}

	useEffect(() => {
		return () => {
			setPrimaryColor(RevertColorRef.current)
		}
	}, [])

	const defaultFormData = useCallback(() => {
		const merged = defaults({
			settings: {
				primary_color: primaryColor!,
			},
		}, { settings })
		return merged
	}, [])

	const handleSubmit = ({ getData }: UseFormProps<IAppearanceFormData>) => {
		RevertColorRef.current = getData('settings.primary_color')
	}

	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Appearance Settings</Heading>
			<Box>
				<Heading order={ 2 }>Company Theme</Heading>
				<Form
					model="settings"
					data={ defaultFormData() }
					method="put"
					to={ Routes.settingsAppearance() }
					onSubmit={ handleSubmit }
					remember={ false }
				>
					{ /* <SwatchInput label="Company Color" name="primary_color" onChange={ handleChange } /> */ }
					<Submit>Save Appearance Settings</Submit>
				</Form>
			</Box>
		</SettingsLayout>
	)
}

export default AppearanceSettings
