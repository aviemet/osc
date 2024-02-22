import React from 'react'
import { Link, Menu } from '@/Components'
import { DownArrowIcon } from '@/Components/Icons'
import { Routes, initials } from '@/lib'
import { usePageProps } from '@/lib/hooks'
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core'

const CircleHeaderMenu = () => {
	const props = usePageProps()

	const title = props.circle?.name || 'OSC'

	const hasMultipleCircles = props.auth.user.circles.length > 1

	return (
		<Menu offset={ 9 } width={ 225 } disabled={ !hasMultipleCircles }>

			<Menu.Target>
				<UnstyledButton style={ { width: '100%' } }>
					<Group justify='space-between'>
						{ props.circle?.name &&
							<Avatar size="sm">{ initials(title) }</Avatar>
						}
						<Text style={ { flex: 1 } }>{ title }</Text>
						{ hasMultipleCircles && <DownArrowIcon /> }
					</Group>
				</UnstyledButton>
			</Menu.Target>

			<Menu.Dropdown>
				{ props.auth.user.circles.map(circle => (
					<Menu.Item
						key={ circle.id }
						component={ Link }
						href={ Routes.circle(circle.slug) }
					>
						{ circle.name }
					</Menu.Item>
				)) }
			</Menu.Dropdown>
		</Menu>
	)
}

export default CircleHeaderMenu
