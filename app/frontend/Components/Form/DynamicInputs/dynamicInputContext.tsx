import React from 'react'

export interface DynamicInputProps<T> {
	record: T
	path: string
	addInput: () => void
	removeInput: (i: number) => T
	index: number
}

const DynamicInputContext = React.createContext<DynamicInputProps<any> | null>(null)
const DynamicInputContextProvider = DynamicInputContext.Provider

export const useDynamicInputContext = <T extends {}>(): DynamicInputProps<T> => {
	const context = React.useContext(DynamicInputContext)

	if(context === null) {
		throw new Error('useContext must be inside a Provider with a value')
	}

	return context as DynamicInputProps<T>
}

export { DynamicInputContextProvider }
