import { useEffect } from 'react'

const useInit = (cb: Function) => {
	useEffect(() => {
		cb()
		// Really quite stupid that I have to do something hacky like this. I get the arguments,
		//   but I think I know when I need something to run just once on load and not re-run when
		//   a "dependent" value changes. If this is the direction we're going with useEffect, there
		//   should be a prescribed way to run something just once on component render. Not everything
		//   that goes in a useEffect body is about data fetching.
		// eslint-disable-next-line
	}, [])
}

export default useInit
