import React from 'react'
import { ActionIcon, Menu, type MenuTargetProps } from '@mantine/core'
import { DotsIcon } from '@/Components/Icons'

interface IMenuTargetProps extends Omit<MenuTargetProps, 'children'> {
	children?: React.ReactNode
	icon?: React.ReactNode
	variant?: 'gradient' | 'subtle' | 'filled' | 'outline' | 'light' | 'default' | 'transparent'
	color?: string
}

const MenuTarget = ({ children, icon, variant, color, ...props }: IMenuTargetProps) => {
	if(!children) {
		return (
			<Menu.Target { ...props }>
				<ActionIcon color={ color } variant={ variant } >
					{ icon || <DotsIcon /> }
				</ActionIcon>
			</Menu.Target>
		)
	}

	return (
		<Menu.Target { ...props }>
			{ children }
		</Menu.Target>
	)
}

export default MenuTarget
