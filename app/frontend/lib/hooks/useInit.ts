import { useEffect, useRef } from "react"

const useInit = (cb: Function) => {
	const hasRunRef = useRef(false)
	useEffect(() => {
		let cleanup
		if(hasRunRef.current === false) {
			cleanup = cb()
			hasRunRef.current = true
		}

		return cleanup
		// eslint-disable-next-line
	}, [])
}

export default useInit
