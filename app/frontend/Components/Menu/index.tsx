import { Menu, type MenuProps } from "@mantine/core"
import MenuLink from "./MenuLink"
import MenuTarget from "./MenuTarget"

const MenuComponent = ({ children, ...props }: MenuProps) => {
	return (
		<Menu { ...props }>{ children }</Menu>
	)
}

MenuComponent.Target = MenuTarget
MenuComponent.Dropdown = Menu.Dropdown
MenuComponent.Label = Menu.Label
MenuComponent.Item = Menu.Item
MenuComponent.Link = MenuLink
MenuComponent.Divider = Menu.Divider

export default MenuComponent
