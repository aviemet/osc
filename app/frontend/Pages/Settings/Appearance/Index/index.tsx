import React, { useEffect, useRef } from "react"
import { Box, Title } from "@/Components"
import SettingsLayout from "../../SettingsLayout"
import useStore from "@/lib/store"
import { useTranslation } from "react-i18next"

interface IAppearanceSettingsProps {
	settings: {
		primary_color?: string
	}
}

const AppearanceSettings = ({ settings }: IAppearanceSettingsProps) => {
	const { t } = useTranslation()
	const { primaryColor, setPrimaryColor } = useStore()
	const RevertColorRef = useRef<string>(primaryColor!)

	useEffect(() => {
		return () => {
			setPrimaryColor(RevertColorRef.current)
		}
	}, [])

	return (
		<SettingsLayout>
			<Title mb={ 24 }>{ t("settings.appearance.title") }</Title>
			<Box>
				<Title order={ 2 }>{ t("settings.appearance.company_theme") }</Title>
			</Box>
		</SettingsLayout>
	)
}

export default AppearanceSettings
