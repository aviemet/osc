import React from 'react'
import { router, usePage } from '@inertiajs/react'
import { Routes } from '@/lib'
import axios from 'axios'
import { Menu } from '@/Components'
import { ColumnsIcon } from '@/Components/Icons'
import { Checkbox } from '@/Components/Inputs'
import { useTableContext } from './TableContext'
import { Button } from '@mantine/core'

const ColumnPicker = () => {
	const { auth: { user } } = usePage<SharedInertiaProps>().props
	const { tableState: { hideable, columns, model } } = useTableContext()

	if(!hideable || !model) return <></>

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// axios.patch( Routes.updateTablePreferences(user.id), {
		// 	user: {
		// 		table_preferences: {
		// 			[model]: {
		// 				hide: {
		// 					[e.target.name]: !e.target.checked,
		// 				},
		// 			},
		// 		},
		// 	},
		// }).then(() => {
		// 	router.reload({ only: ['auth'] })
		// })
	}

	return (
		<Menu closeOnItemClick={ false } position="bottom-end">
			<Menu.Target>
				<Button size="md" p="xs"><ColumnsIcon size={ 24 } /></Button>
			</Menu.Target>

			<Menu.Dropdown>
				{ columns.filter(option => option.hideable).map(({ label, hideable }) => (
					<Menu.Item key={ label } component="div" style={ { cursor: 'default', padding: 0 } }>
						<Checkbox
							name={ hideable }
							label={ label }
							onChange={ handleChange }
							// checked={ !user.table_preferences?.[model]?.hide?.[hideable] }
							style={ { padding: 0 } }
						/>
					</Menu.Item>
				)) }
			</Menu.Dropdown>
		</Menu>
	)
}

export default ColumnPicker
