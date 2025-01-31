import React from "react"
import { useTableContext } from "@/Components/Table/TableContext"
import { Title, Group, Divider } from "@mantine/core"
import { Menu } from "@/Components"
import { TrashIcon } from "@/Components/Icons"
import { router } from "@inertiajs/react"
import { IconType } from "react-icons"

// import * as classes from './IndexPage.css'

// TODO: Figure out correct type for icon
export interface IIndexTableTitleSectionProps {
	children: React.ReactNode
	title: string
	deleteRoute: string
	menuOptions?: {
		label: string
		href: string
		icon?: IconType
	}[]
}

const IndexTableTitleSection = ({ children, title, deleteRoute, menuOptions }: IIndexTableTitleSectionProps) => {
	const { tableState: { selected } } = useTableContext()

	const deleteRecords = () => {
		router.visit(deleteRoute, {
			method: "delete",
			data: { ids: Array.from(selected) },
		})
	}

	return (
		<Group grow mb="sm">
			<Group justify="space-between">
				<Title>{ title }</Title>

				<Menu position="bottom-end">
					<Menu.Target />

					<Menu.Dropdown>
						{ menuOptions && menuOptions.map(({ label, href, icon }, index) => {
							const Icon = icon
							return (
								<Menu.Link key={ index } href={ href } leftSection={ Icon !== undefined && <Icon size={ 14 } /> }>
									{ label }
								</Menu.Link>
							)
						}) }

						{ selected.size > 0 && <>
							<Divider />

							<Menu.Item leftSection={ <TrashIcon size={ 14 } color='red' /> } onClick={ deleteRecords }>
								Delete
							</Menu.Item>
						</> }

					</Menu.Dropdown>
				</Menu>
			</Group>

			{ !!children && children }
		</Group>
	)
}

export default IndexTableTitleSection
