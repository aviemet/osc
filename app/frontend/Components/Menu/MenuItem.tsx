import React, { forwardRef } from 'react'
import { Menu, createPolymorphicComponent, type MenuItemProps, Flex } from '@mantine/core'
import { Link } from '..'
import cx from 'clsx'
import * as classes from './MenuItem.css'

interface IMenuItemProps extends MenuItemProps {
	disabled?: boolean
	href?: string
	icon?: JSX.Element
}

const MenuItem = forwardRef<HTMLButtonElement, IMenuItemProps>((
	{ children, disabled = false, href, icon, className, ...props },
	ref,
) => {
	return (
		<Menu.Item
			ref={ ref }
			disabled={ disabled }
			className={ cx(classes.menuItem, className, { disabled }) }
			{ ...props }
		>
			<Flex align="center" wrap="nowrap" gap="xs">
				{ icon }
				{ children }
			</Flex>
		</Menu.Item>
	)
})

export default createPolymorphicComponent<'button', IMenuItemProps>(MenuItem)
