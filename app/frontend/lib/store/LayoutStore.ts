import { create } from 'zustand'
import { type IColorSlice, type IMenuSlice, type ISidebarSlice } from './slices'
import { createColorSlice } from './slices/colorSlice'
import { createMenuSlice } from './slices/menuSlice'
import { createSidebarSlice } from './slices/sidebarSlice'

type LayoutStoreSlices = IColorSlice & ISidebarSlice //& IMenuSlice

const useLayoutStore = create<LayoutStoreSlices>()((...a) => ({
	...createColorSlice(...a),
	...createSidebarSlice(...a),
	// ...createMenuSlice(...a),
}))

export default useLayoutStore
