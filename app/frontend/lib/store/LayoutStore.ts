import { create } from 'zustand'
import { type IColorSlice, type ISidebarSlice } from './slices'
import { createColorSlice } from './slices/colorSlice'
import { createSidebarSlice } from './slices/sidebarSlice'

type LayoutStoreSlices = IColorSlice & ISidebarSlice & {
	defaults: {
		tableRecordsLimit: number
	}
}

const useLayoutStore = create<LayoutStoreSlices>()((...args) => ({
	defaults: {
		tableRecordsLimit: 25,
	},
	...createColorSlice(...args),
	...createSidebarSlice(...args),
}))

export default useLayoutStore
