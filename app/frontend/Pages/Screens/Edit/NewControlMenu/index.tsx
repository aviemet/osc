import React from 'react'
import { Affix, Button, Menu } from '@/Components'
import ControlForm from '../../Components/Control/Form'
import { modals } from '@mantine/modals'
import { Routes } from '@/lib'

type ControlType = 'button'|'spacer'|'slider'

interface NewControlMenuProps {
	menuId?: number
}

const NewControlMenu = ({ menuId }: NewControlMenuProps) => {
	const emptyData = (type: ControlType) => ({
		control: {
			screen_id: menuId,
			control_type: type,
		},
	})
	const handleNewButtonClick = (type: ControlType) => {
		modals.open({
			title: 'Add New Control Button',
			children: (
				<ControlForm
					data={ emptyData(type) }
					remember={ false }
					to={ Routes.controls() }
					onSubmit={ () => modals.closeAll() }
					filter={ ['control.id', 'control.command', 'control.updated_at', 'control.created_at', 'control.command_id', 'control.protocol'] }
				/>
			),
		})
	}

	const handleNewSpacerClick = () => {

	}

	return (
		<Affix>
			<Menu position="top-end">
				<Menu.Target>
					<Button radius="xl" p="sm" m="lg">+</Button>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label
						onClick={ () => handleNewButtonClick('button') }
					>
						Button
					</Menu.Label>
					{ /* <Menu.Label>Slider</Menu.Label> */ }
					<Menu.Label
						onClick={ () => handleNewButtonClick('spacer') }
					>
						Spacer
					</Menu.Label>
				</Menu.Dropdown>
			</Menu>
		</Affix>
	)
}

export default NewControlMenu
