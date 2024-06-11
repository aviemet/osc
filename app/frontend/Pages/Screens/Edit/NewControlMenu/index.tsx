import React from 'react'
import { Affix, Button, Menu } from '@/Components'

const NewControlMenu = () => {
	const handleNewButtonClick = () => {

	}

	return (
		<Affix>
			<Menu position="top-end">
				<Menu.Target>
					<Button radius="xl" p="sm" m="lg">+</Button>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label
						onClick={ handleNewButtonClick }
					>Button</Menu.Label>
					{ /* <Menu.Label>Slider</Menu.Label> */ }
					{ /* <Menu.Label>Spacer</Menu.Label> */ }
				</Menu.Dropdown>
			</Menu>
		</Affix>
	)
}

export default NewControlMenu
