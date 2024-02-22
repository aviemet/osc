import React, { useEffect, useState } from 'react'
import { Page, Box, Section, Tabs } from '@/Components'
import { router } from '@inertiajs/react'
import { Paper, useMantineTheme } from '@mantine/core'
import { useViewportSize, useLocation } from '@/lib/hooks'
import { px } from '@/lib'

interface ISettingsLayoutProps {
	children: React.ReactNode
}

type TTab = {
	name: string
	label: string
	icon?: React.ReactNode
}

const tabs: TTab[] = [
	{ name: 'general', label: 'General' },
	{ name: 'appearance', label: 'Appearance' },
	{ name: 'mail', label: 'Mail' },
	{ name: 'notifications', label: 'Notifications' },
	{ name: 'integrations', label: 'Integrations' },
]

const SettingsLayout = ({ children }: ISettingsLayoutProps) => {
	const title = 'Settings'
	const { width } = useViewportSize()
	const theme = useMantineTheme()
	const [mobileFormat, setMobileFormat] = useState(window.innerWidth < px(theme.breakpoints.sm))

	const { paths } = useLocation()

	useEffect(() => {
		if(width === 0) return
		setMobileFormat(width < px(theme.breakpoints.sm))
	}, [width])

	const handleTabChange = (value: string|null) => {
		router.get(`/admin/settings/${value}`, {}, { preserveState: true })
	}

	return (
		<Page title={ title }>
			<Section fullHeight>
				<Tabs
					orientation={ mobileFormat ? 'horizontal' : 'vertical' }
					variant="pills"
					defaultValue={ paths[1] }
					onChange={ handleTabChange }
				>
					<Paper withBorder p='xs' shadow="sm">
						<Tabs.List
							style={ mobileFormat ? {
								flexWrap: 'nowrap',
								overflow: 'auto',
							} : {} }
						>
							{ tabs.map(tab => (
								<Tabs.Tab key={ tab.name } value={ tab.name } role="link" >
									{ tab.label }
								</Tabs.Tab>
							)) }
						</Tabs.List>
					</Paper>

					{ tabs.map(tab => (
						<Tabs.Panel key={ tab.name } value={ tab.name } pl="xs" style={ { position: 'relative' } }>
							<Box p='lg' style={ { height: '100%' } }>
								{ children }
							</Box>
						</Tabs.Panel>
					)) }

				</Tabs>
			</Section>
		</Page>
	)
}

export default React.memo(SettingsLayout)
