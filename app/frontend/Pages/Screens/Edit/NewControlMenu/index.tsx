import React from 'react'
import { Affix, Button, Menu } from '@/Components'
import ControlForm from '@/Features/Control/Form'
import { modals } from '@mantine/modals'
import { Routes } from '@/lib'

const controlFormFilter = ['control.id', 'control.command', 'control.updated_at', 'control.created_at', 'control.command_id', 'control.protocol']

type ControlType = 'button'|'spacer'|'slider'

interface NewControlMenuProps {
	menuId?: number
}

const NewControlMenu = ({ menuId }: NewControlMenuProps) => {
	if(!menuId) return <></>

	const emptyData = (type: ControlType): Schema.ControlsFormData => ({
		screen_id: menuId,
		control_type: type,
		order: NaN,
		title: '',
	})

	const handleNewButtonClick = () => {
		modals.open({
			title: 'Add New Control Button',
			children: (
				<ControlForm
					control={ emptyData('button') }
					remember={ false }
					to={ Routes.controls() }
					onSubmit={ () => modals.closeAll() }
					filter={ controlFormFilter }
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
					<Menu.Item
						onClick={ handleNewButtonClick }
					>
						Button
					</Menu.Item>
					{/* <Menu.Item>Slider</Menu.Item> */}
					<Menu.Item
						onClick={ handleNewSpacerClick }
					>
						Spacer
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Affix>
	)
}

export default NewControlMenu
