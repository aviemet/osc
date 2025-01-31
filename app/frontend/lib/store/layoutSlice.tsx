import { StateCreator } from "zustand"
import { defaultColor } from "../theme"

export interface LayoutSlice {
	siteTitle: string

	sidebarOpen: boolean
	sidebarVisible: boolean
	sidebarBreakpoint: string
	toggleSidebarOpen: (sidebarOpen?: boolean) => void
	setSidebarVisible: (visible: boolean) => void

	primaryColor: string
	setPrimaryColor: (color: string) => void

	NavMenu: React.JSX.Element
	setNavMenu: (menu: React.JSX.Element) => void
}

export const createLayoutSlice: StateCreator<LayoutSlice> = (set) => ({
	siteTitle: "OSC",

	sidebarOpen: true,
	sidebarVisible: false,
	sidebarBreakpoint: "sm",

	primaryColor: defaultColor,

	NavMenu: <></>,

	toggleSidebarOpen: sidebarOpen => set(state => {
		let setValue = sidebarOpen
		if(sidebarOpen === undefined) {
			setValue = !state.sidebarOpen
		}
		return { sidebarOpen: setValue }
	}),

	setSidebarVisible: visible => set(() => ({
		sidebarVisible: visible,
	})),

	setPrimaryColor: color => set(state => ({
		primaryColor: color,
	})),

	setNavMenu: menu => set(() => ({
		NavMenu: menu,
	})),
})
