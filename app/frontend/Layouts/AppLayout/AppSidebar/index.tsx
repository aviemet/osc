import React from 'react'
import { AppShell, Divider, Text, NavLink, Burger } from '@mantine/core'
import { Link, Flex } from '@/Components'
import { Routes } from '@/lib'
import CircleHeaderMenu from './CircleHeaderMenu'
import useLayoutStore from '@/lib/store/LayoutStore'


const AppSidebar = () => {
	const { sidebarOpen, sidebarVisible, toggleSidebarOpen } = useLayoutStore()
	return (
		<>
			<AppShell.Section mb="xs">
				<Flex>
					<CircleHeaderMenu />
					<Burger opened={ sidebarOpen } onClick={ () => toggleSidebarOpen() } hiddenFrom="sm" size="sm" />
				</Flex>
			</AppShell.Section>

			<Divider />

			<AppShell.Section grow id="dynamic-nav-menu">
			</AppShell.Section>

			<Divider />

			<AppShell.Section>
			</AppShell.Section>
		</>
	)
}

export default AppSidebar
