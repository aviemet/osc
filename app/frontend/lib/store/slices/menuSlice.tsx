import React from 'react'
import { StateCreator } from 'zustand'
import { DefaultMenu } from '@/Layouts/AppLayout/AppSidebar/menus'

export interface IMenuSlice {
	NavMenu: React.JSX.Element
	setNavMenu: (menu: React.JSX.Element) => void
}

export const createMenuSlice: StateCreator<IMenuSlice, [], [], IMenuSlice> =
(set) => ({
	NavMenu: <DefaultMenu />,

	setNavMenu: menu => set(() => ({
		NavMenu: menu,
	})),
})
