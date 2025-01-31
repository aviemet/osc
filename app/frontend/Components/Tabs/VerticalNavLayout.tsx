import React, { useState } from "react"
import { Page, Box, Section, Tabs } from "@/Components"
import { router } from "@inertiajs/react"
import { Paper, useMantineTheme } from "@mantine/core"
import { useViewportSize, useLocation } from "@/lib/hooks"
import { px } from "@/lib"

export type Tab = {
	name: string
	label: string
	icon?: React.ReactNode
}

export interface IVerticalNavLayoutProps {
	tabs: Tab[]
	title: string
	routePrefix: string
	children: React.ReactNode
}

const VerticalNavLayout = ({ children, tabs, title, routePrefix }: IVerticalNavLayoutProps) => {
	const theme = useMantineTheme()
	const [mobileFormat, setMobileFormat] = useState(window.innerWidth < px(theme.breakpoints.sm))

	useViewportSize(({ width }) => {
		if(width === 0) return
		setMobileFormat(width < px(theme.breakpoints.sm))
	})

	const location = useLocation()

	const handleTabChange = (value: string | null) => {
		if(!value) return

		router.get(`${location.pathname}`, { tab: value }, { preserveState: true })
	}

	return (
		<Page title={ title }>
			<Section fullHeight>
				<Tabs
					urlControlled
					orientation={ mobileFormat ? "horizontal" : "vertical" }
					variant="pills"
					defaultValue={ tabs[0].name }
					onChange={ handleTabChange }
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
								<Tabs.Tab key={ tab.name } value={ tab.name } role="link">
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

export default VerticalNavLayout
