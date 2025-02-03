import React, { useEffect, useState } from "react"
import { Paper, Page, Box, Section, Tabs } from "@/Components"
import { router } from "@inertiajs/react"
import { px, useMantineTheme } from "@mantine/core"
import { useViewportSize, useLocation } from "@/lib/hooks"

interface SettingsLayoutProps {
	children: React.ReactNode
}

type Tab = {
	name: string
	label: string
	icon?: React.ReactNode
}

const tabs: Tab[] = [
	{ name: "general", label: "General" },
	{ name: "appearance", label: "Appearance" },
	{ name: "mail", label: "Mail" },
	{ name: "notifications", label: "Notifications" },
	// { name: 'integrations', label: 'Integrations' },
	{ name: "asset_tags", label: "Asset Tags" },
	// { name: 'barcodes', label: 'Barcodes' },
	{ name: "ldap", label: "LDAP" },
	{ name: "tickets", label: "Tickets" },
	{ name: "backups", label: "Backups" },
	{ name: "logs", label: "Logs" },
]

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
	const title = "Settings"
	const { width } = useViewportSize()
	const theme = useMantineTheme()
	const [mobileFormat, setMobileFormat] = useState(window.innerWidth < Number(px(theme.breakpoints.sm)))

	const { paths } = useLocation()

	useEffect(() => {
		if(width === 0) return
		setMobileFormat(width < Number(px(theme.breakpoints.sm)))
	}, [width])

	const handleTabChange = (value: string | null) => {
		router.get(`/settings/${value ?? "general"}`, {}, { preserveState: true })
	}

	return (
		<Page title={ title }>
			<Section fullHeight>
				<Tabs
					orientation={ mobileFormat ? "horizontal" : "vertical" }
					variant="pills"
					defaultValue={ paths[1] }
					onChange={ handleTabChange }
					style={ (theme) => ({
						minHeight: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px - 60px)`,
					}) }
				>
					<Paper withBorder p='xs' shadow="sm">
						<Tabs.List
							style={ mobileFormat
								? {
									flexWrap: "nowrap",
									overflow: "auto",
								}
								: {} }
						>
							{ tabs.map(tab => (
								<Tabs.Tab key={ tab.name } value={ tab.name } role="link" >
									{ tab.label }
								</Tabs.Tab>
							)) }
						</Tabs.List>
					</Paper>

					{ tabs.map(tab => (
						<Tabs.Panel key={ tab.name } value={ tab.name } pl="xs" style={ { position: "relative" } }>
							<Box p='lg' style={ { height: "100%" } }>
								{ children }
							</Box>
						</Tabs.Panel>
					)) }

				</Tabs>
			</Section>
		</Page>
	)
}

export default SettingsLayout
