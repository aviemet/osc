import { useState, useEffect } from "react"

const useCheckboxState = (length: number, selected: number) => {
	const [allChecked, setAllChecked] = useState(false)
	const [indeterminate, setIndeterminate] = useState(false)

	// Set the status of the table head checkbox
	useEffect(() => {
		if(length === 0) return

		switch(selected) {
			case length: // All checked
				setAllChecked(true)
				setIndeterminate(false)
				break
			case 0: // None checked
				setAllChecked(false)
				setIndeterminate(false)
				break
			default: // Some checked
				if(!indeterminate) setIndeterminate(true)
		}
	}, [selected])

	return { allChecked, indeterminate }
}

export default useCheckboxState
