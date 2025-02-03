import { useEffect } from "react"
import { usePage } from "@inertiajs/react"
import { showNotification } from "@mantine/notifications"

const shownMessageIds = new Set<string>()

const Flash = () => {
	const { flash } = usePage<SharedInertiaProps>().props

	useEffect(() => {
		for(const [type, message] of Object.entries(flash)) {
			if(message !== null && !shownMessageIds.has(message.id)) {
				let color
				switch(type) {
					case "alert":
						color = "red"
						break
					case "success":
						color = "green"
						break
					case "info":
						color = "blue"
						break
					case "warning":
						color = "yellow"
						break
				}

				shownMessageIds.add(message.id)

				showNotification({
					id: message.id,
					message: message.message,
					color,
					onClose: () => shownMessageIds.delete(message.id),
				})
			}
		}
	}, [flash])

	return <></>
}

export default Flash
