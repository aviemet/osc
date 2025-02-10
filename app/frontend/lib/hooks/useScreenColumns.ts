import { useEffect } from "react"

export const useScreenColumns = (columns: number) => {
	useEffect(() => {
		document.documentElement.style.setProperty("--screen-grid-columns", columns.toString())

		return () => {
			document.documentElement.style.setProperty("--screen-grid-columns", "6") // Reset to default
		}
	}, [columns])
}
