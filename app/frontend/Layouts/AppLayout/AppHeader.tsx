import React from 'react'
import { ActionIcon, Avatar, Box, Divider, Text } from '@mantine/core'
import { LogoutIcon, PlusCircleIcon, SettingsIcon } from '@/Components/Icons'
import { Link, Menu } from '@/Components'
import { usePage } from '@inertiajs/react'
import { Routes } from '@/lib'

const Header = () => {
	const { props } = usePage<SharedInertiaProps>()

	return (
		<>
			<Box style={ { flex: 1 } }>
				<Text>OSC</Text>
			</Box>
			<Box>
				<Menu position="bottom-end">
					<Menu.Target>
						<Avatar radius="xl" component={ ActionIcon }></Avatar>
					</Menu.Target>

					<Menu.Dropdown>
						{ props.auth.user.circles.length > 0 && <Text><Link href={ Routes.circles() }>Circles</Link></Text> }

						{ props.auth.user.circles.slice(0,4).map(circle => (
							<Menu.Item
								key={ circle.id }
								href={ Routes.circle(circle.slug) }
							>
								{ circle.name }
							</Menu.Item>
						)) }
						{ /* <Menu.Item
							href={ Routes.newCircle() }
							icon={ <PlusCircleIcon /> }
						>
							New Circle
						</Menu.Item> */ }
						{ props.auth.user.circles.length > 4 && <Menu.Item href={ Routes.circles() }>more...</Menu.Item> }

						<Divider />

						<Menu.Item
							href={ Routes.settingsGeneral() }
							icon={ <SettingsIcon /> }
						>
							Preferences
						</Menu.Item>

						<Divider />

						<Menu.Item
							href={ Routes.destroyUserSession() }
							icon={ <LogoutIcon /> }
						>
							Sign Out
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Box>
		</>
	)
}

export default Header
