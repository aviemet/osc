import { StateCreator } from 'zustand'
import { defaultColor } from '@/lib/theme'

export interface IColorSlice {
	primaryColor: string
	setPrimaryColor: (color: string) => void
}

export const createColorSlice: StateCreator<IColorSlice, [], [], IColorSlice> =
(set) => ({
	primaryColor: defaultColor,

	setPrimaryColor: color => set(() => ({
		primaryColor: color,
	})),

})
