import { useState } from "react"

export const useBooleanToggle = (initial: boolean): [boolean, (explicit?: boolean) => void] => {
	const [value, setValue] = useState(initial)
	return [value, (explicit?: boolean) => {
		if(explicit === value) return

		setValue(explicit === undefined ? bool => !bool : explicit)
	}]
}
