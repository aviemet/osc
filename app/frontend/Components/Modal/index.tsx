import React from 'react'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export type TriggerComponent =  React.ReactElement<{onClick: () => void}>

interface ModalProps {
	trigger: TriggerComponent
	title: string
	children: (close: () => void) => React.ReactNode
}

const ReusableModal: React.FC<ModalProps> = ({ trigger, title, children }) => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			{ React.cloneElement(trigger, { onClick: open }) }

			<Modal opened={ opened } onClose={ close } title={ title }>
				{ children(close) }
			</Modal>
		</>
	)
}

export default ReusableModal
