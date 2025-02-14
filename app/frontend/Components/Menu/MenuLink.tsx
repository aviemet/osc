import { forwardRef } from "react"
import { Menu, type MenuItemProps as MantineMenuItemProps } from "@mantine/core"
import { Link } from "@/Components"
import { LinkProps } from "../Link"

type ConflictingProps = "color" | "children" | "classNames" | "styles" | "variant" | "vars"
interface MenuItemProps extends MantineMenuItemProps, Omit<LinkProps, ConflictingProps> {
	disabled?: boolean
	type?: string
}

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>((
	{ children, ...props },
	ref,
) => {
	return (
		<Menu.Item
			ref={ ref }
			component={ Link }
			{ ...props }
		>
			{ children }
		</Menu.Item>
	)
})

export default MenuItem
