import { create } from "zustand"
import { createContrastingColorSlice, type ContrastingColorSlice } from "./contrastingColorSlice"
import { createLayoutSlice, type LayoutSlice } from "./layoutSlice"
import { createDefaultsSlice, type DefaultsSlice } from "./defaultsSlice"

type GlobalStore = ContrastingColorSlice & LayoutSlice & DefaultsSlice

const useStore = create<GlobalStore>((...args) => ({
	...createContrastingColorSlice(...args),
	...createLayoutSlice(...args),
	...createDefaultsSlice(...args),
}))

export default useStore
