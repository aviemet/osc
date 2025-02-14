import { Divider, Menu } from "@/Components"
import { CommandsIcon, ProtocolsIcon, ScreenIcon, ServerIcon, SignOutIcon } from "@/Components/Icons"
import { Routes } from "@/lib"

const LoggedInLinks = () => {
	return (
		<>
			<Menu.Link
				href={ Routes.editScreens() }
				leftSection={ <ScreenIcon /> }
			>
				Edit Screens
			</Menu.Link>

			<Divider />

			<Menu.Link
				href={ Routes.servers() }
				leftSection={ <ServerIcon /> }
			>
				Servers
			</Menu.Link>

			<Menu.Link
				href={ Routes.protocols() }
				leftSection={ <ProtocolsIcon /> }
			>
				Protocols
			</Menu.Link>

			<Menu.Link
				href={ Routes.commands() }
				leftSection={ <CommandsIcon /> }
			>
				Commands
			</Menu.Link>

			<Divider />

			<Menu.Link
				href={ Routes.destroyUserSession() }
				leftSection={ <SignOutIcon /> }
			>
				Sign Out
			</Menu.Link>
		</>
	)
}

export default LoggedInLinks
