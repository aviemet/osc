import { StateCreator } from "zustand"

export interface DefaultsSlice {
	defaults: {
		tableRecordsLimit: number
	}
}

export const createDefaultsSlice: StateCreator<DefaultsSlice> = () => ({
	defaults: {
		tableRecordsLimit: 25,
	},
})
