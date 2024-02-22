import React from 'react'

/**
 * createContext
 * Custom hook for initializing React Context. Returns a hook and Provider component
 * @param error Whether to throw an error if not inside a Context. Defaults to true
 * @returns Tuple of `useContext` hook for accessing this context value, and the JSX Context Provider Component
 */
const createContext = <T extends {} | null>() => {
	const context = React.createContext<T | null>(null)

	function useContext(): T
	function useContext(error: boolean): T | null

	function useContext(error = true) {
		const c = React.useContext(context)
		if(error && c === null) {
			throw new Error('useContext must be inside a Provider with a value')
		}
		return c
	}

	return [useContext, context.Provider] as const
}

export default createContext
