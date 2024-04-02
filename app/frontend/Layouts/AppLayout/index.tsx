import React from 'react'
import { AppShell, Burger, Container, Link, Menu, Title } from '@/Components'
import { useAuth } from '@/lib/hooks'
import { Routes } from '@/lib'

import * as classes from './AppLayout.css'
import { HomeIcon } from '@/Components/Icons'

const AppLayout = ({ children }: { children: any }) => {
	const { isLoggedIn } = useAuth()

	return (
		<AppShell
			header={ { height: 45 } }
		>

			<AppShell.Header className={ classes.layout } p="xs">
				<Link href={ Routes.home() } mr="md"><HomeIcon size={ 28 } color="white" /></Link>
				<Title size="h3">OSC Commands Interface</Title>
				<Menu shadow="sm">
					<Menu.Target>
						<Burger size="sm" className={ classes.menu }></Burger>
					</Menu.Target>

					<Menu.Dropdown>
						{ isLoggedIn ?
							<>
								<Menu.Link href={ Routes.editScreens() }>Edit Screens</Menu.Link>
								<Menu.Link href={ Routes.protocols() }>Edit Protocols</Menu.Link>
								<Menu.Link href={ Routes.commands() }>Edit Commands</Menu.Link>
							</>
							:
							<Menu.Label>Sign In</Menu.Label>
						}
					</Menu.Dropdown>
				</Menu>
			</AppShell.Header>

			<AppShell.Main>
				<Container pt="sm">
					{ children }
				</Container>
			</AppShell.Main>

		</AppShell>
	)
}

export default AppLayout
