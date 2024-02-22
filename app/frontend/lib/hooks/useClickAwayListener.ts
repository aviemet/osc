import React from 'react'

const useClickAwayListener = (ref: React.RefObject<HTMLElement>, callback: Function) => {
	const startClickListener = (callback?: Function) => {
		document.addEventListener('click', handleClickAway)
		document.addEventListener('keydown', handleEscKey)
		if(callback) callback()
	}

	const handleClickAway = e => {
		if(!ref.current?.contains(e.target)) {
			cancelClickListener(callback)
		}
	}

	const handleEscKey = e => {
		if(e.key === 'Escape') {
			cancelClickListener(callback)
		}
	}

	const cancelClickListener = (callback?: Function) => {
		document.removeEventListener('click', handleClickAway)
		document.removeEventListener('keydown', handleEscKey)
		if(callback) callback()
	}

	return { startClickListener, cancelClickListener }
}

export default useClickAwayListener


// import React, { useEffect } from 'react'

// const useClickAwayListener = (ref: React.RefObject<HTMLElement>, onClickAway?: Function) => {
// 	useEffect(() => {
// 		const handleClickAway = e => {
// 			if(!ref.current?.contains(e.target)) {
// 				if(onClickAway) onClickAway()
// 			}
// 		}

// 		const handleEscKey = e => {
// 			if(e.key === 'Escape') {
// 				if(onClickAway) onClickAway()
// 			}
// 		}

// 		document.addEventListener('click', handleClickAway)
// 		document.addEventListener('keydown', handleEscKey)

// 		return () => {
// 			document.removeEventListener('click', handleClickAway)
// 			document.removeEventListener('keydown', handleEscKey)
// 		}
// 	}, [ref, onClickAway])

// }

// export default useClickAwayListener
