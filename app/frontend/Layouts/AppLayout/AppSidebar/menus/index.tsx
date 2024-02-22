import React from 'react'
import DefaultMenu, { type DefaultMenuProps } from './DefaultMenu'
import CircleMenu, { type CircleMenuProps  } from './CircleMenu'
import ThemeMenu, { type ThemeMenuProps  } from './ThemeMenu'

export type MenuNames = 'default' | 'circle' | 'theme'

export type MenuType =
	(() => React.FC<DefaultMenuProps>) |
	(() => React.FC<CircleMenuProps>) |
	(() => React.FC<ThemeMenuProps>)

export const menus: Record<MenuNames, MenuType> = {
	default: () => DefaultMenu,
	circle: () => CircleMenu,
	theme: () => ThemeMenu,
}

export const getDefaultMenu = () => () => <DefaultMenu />

export const getCircleMenu = ({ circle }: {circle: Schema.CirclesShare}) => () => (
	<>
		<CircleMenu circle={ circle } />
	</>
)

export const getThemeMenu = (
	{ circle, theme }: {circle: Schema.Circle, theme: Schema.Theme},
) => () => (
	<>
		<ThemeMenu circle={ circle } theme={ theme } />
	</>
)

export { DefaultMenu, CircleMenu, ThemeMenu }
