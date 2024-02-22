import React from 'react'
import { useTableContext } from '@/Components/Table/TableContext'
import { Box, Title, Group, Divider } from '@mantine/core'
import { Menu } from '@/Components'
import { TrashIcon } from '@/Components/Icons'
import { router } from '@inertiajs/react'
import * as classes from './IndexPageStyles.css'

// TODO: Figure out correct type for icon
export interface IIndexTableTitleSectionProps {
	children: React.ReactNode
	title: string
	deleteRoute?: string
	menuOptions?: {
		label: string
		href: string
		icon?: any
	}[]
}

const IndexTableTitleSection = ({ children, title, deleteRoute, menuOptions }: IIndexTableTitleSectionProps) => {
	const { tableState: { selected } } = useTableContext()

	const deleteRecords = () => {
		if(!deleteRoute) return

		router.visit(deleteRoute, {
			method: 'delete',
			data: { ids: Array.from(selected) },
		})
	}

	return (
		<Group align="start">
			<Group className={ classes.title }>
				<Title>
					{ title }
				</Title>
				<Menu position="bottom-end">
					<Menu.Target />

					<Menu.Dropdown>
						{ menuOptions && menuOptions.map(({ label, href, icon }, index) => {
							const Icon = icon
							return (
								<Menu.Link key={ index } href={ href } icon={ icon && <Icon size={ 14 } /> }>
									{ label }
								</Menu.Link>
							)
						}) }

						{ selected.size > 0 && <>
							<Divider />

							<Menu.Item icon={ <TrashIcon size={ 14 } color='red' /> } onClick={ deleteRecords }>
								Delete
							</Menu.Item>
						</> }

					</Menu.Dropdown>
				</Menu>
			</Group>
			{ !!children && <Box className={ classes.content }>
				{ children }
			</Box> }
		</Group>
	)
}

export default IndexTableTitleSection
