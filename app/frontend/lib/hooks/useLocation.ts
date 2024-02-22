import { useState, useEffect, useMemo } from 'react'
import { omit } from 'lodash'
import { NestedURLSearchParams } from '@/lib/collections'

const useLocation = () => {
	const [location, setLocation] = useState(window.location)

	const listenToPopstate = () => {
		setLocation(window.location)
	}

	useEffect(() => {
		window.addEventListener('popstate', listenToPopstate)

		return () => {
			window.removeEventListener('popstate', listenToPopstate)
		}
	}, [])

	const params = useMemo(() => new URLSearchParams(location.search), [location.search])

	return {
		...omit(location, [
			'toString',
			'replace',
			'reload',
			'assign',
			'ancestorOrigins',
		]),
		path: `${location.origin}${location.pathname}`,
		paths: location.pathname.replace(/^\//, '').split('/'),
		params,
		paramsAsJson: useMemo(() => {
			const hash: Record<string, string> = {}
			for(const [key, value] of params.entries()) {
				hash[key] = value
			}
			return hash
		}, [params]),
		nestedParams: useMemo(() => new NestedURLSearchParams(params), [params]),
		toString: () => location.toString(),
	}
}

export default useLocation
