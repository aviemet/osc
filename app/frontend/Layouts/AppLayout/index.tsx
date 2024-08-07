import React from 'react'
import { AppShell, Burger, Container, Divider, Link, Menu, Title } from '@/Components'
import { useAuth } from '@/lib/hooks'
import { Routes } from '@/lib'

import * as classes from './AppLayout.css'
import { HomeIcon } from '@/Components/Icons'
import { ToggleColorSchemeButton } from '@/Components/Button'

const AppLayout = ({ children }: { children: any }) => {
	const { isLoggedIn } = useAuth()

	return (
		<AppShell
			header={ { height: 45 } }
		>
			<AppShell.Header className={ classes.layout } p="xs">
				<Link href={ Routes.home() } mr="md">
					<HomeIcon size={ 28 } />
				</Link>

				<Title size="h3" style={ { flex: 1 } }>OSC Commands Interface</Title>

				<ToggleColorSchemeButton mr="sm" />

				<Menu shadow="sm">
					<Menu.Target>
						<Burger size="sm" className={ classes.menu }></Burger>
					</Menu.Target>

					<Menu.Dropdown>
						{ isLoggedIn ?
							<>
								<Menu.Link href={ Routes.editScreens() }>Edit Screens</Menu.Link>
								<Divider />
								<Menu.Link href={ Routes.servers() }>Servers</Menu.Link>
								<Menu.Link href={ Routes.protocols() }>Protocols</Menu.Link>
								<Menu.Link href={ Routes.commands() }>Commands</Menu.Link>
								<Divider />
								<Menu.Link href={ Routes.destroyUserSession() }>Sign Out</Menu.Link>
							</>
							:
							<Menu.Link href={ Routes.newUserSession() }>Sign In</Menu.Link>
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
