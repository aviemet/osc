import { AppShell, Burger, Container, Link, Menu, Title } from "@/Components"
import { ToggleColorSchemeButton } from "@/Components/Button"
import { HomeIcon, SignInIcon } from "@/Components/Icons"
import { Routes } from "@/lib"
import { useAuth } from "@/lib/hooks"
import { LayoutProps } from "../index"
import LoggedInLinks from "./LoggedInLinks"

import * as classes from "./AppLayout.css"

const AppLayout = ({ children }: LayoutProps) => {
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

					<Menu.Dropdown>{ isLoggedIn ?
						<LoggedInLinks />
						:
						<Menu.Link
							href={ Routes.newUserSession() }
							leftSection={ <SignInIcon /> }
						>
							Sign In
						</Menu.Link>
					}</Menu.Dropdown>
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
