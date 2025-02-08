import React from "react"
import IconProvider from "./IconProvider"
import UiFrameworkProvider from "./UiFrameworkProvider"
import QueryProvider from "./QueryProvider"
import ContrastingColorsSetup from "./ContrastingColorsSetup"
import { I18nextProvider } from "react-i18next"
// import i18n from "@/lib/i18n"

import "./reset.css"
import "./global.css"
import "@mantine/core/styles.css"
import "@mantine/tiptap/styles.css"
import "@mantine/dates/styles.css"
import "@mantine/notifications/styles.css"

interface IProviderProps {
	children?: React.ReactNode
}

const Providers = ({ children }: IProviderProps) => {
	return (
		<QueryProvider>
			<UiFrameworkProvider>
				<ContrastingColorsSetup />
				<IconProvider>
					{ children }
				</IconProvider>
			</UiFrameworkProvider>
		</QueryProvider>
	)
}

export default Providers
