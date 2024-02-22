import React from 'react'
import { Menu, type MenuProps } from '@mantine/core'
import MenuItem from './MenuItem'
import MenuLink from './MenuLink'
import MenuTarget from './MenuTarget'

const MenuComponent = ({ children, ...props }: MenuProps) => {
	return (
		<Menu { ...props }>{ children }</Menu>
	)
}

MenuComponent.Target = MenuTarget
MenuComponent.Dropdown = Menu.Dropdown
MenuComponent.Label = Menu.Label
MenuComponent.Item = MenuItem
MenuComponent.Link = MenuLink
MenuComponent.Divider = Menu.Divider

export default MenuComponent
