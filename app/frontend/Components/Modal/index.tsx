import React from 'react'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { createContext } from '@/lib/hooks'

export type TriggerComponent =  React.ReactElement<{onClick: () => void}>

type ModalDisclosureVariables = {
	opened: boolean
	open: () => void
	close: () => void
	toggle: () => void
}

const [useModalContext, ModalContextProvider] = createContext<ModalDisclosureVariables>()
export { useModalContext }

interface ModalProps {
	trigger: TriggerComponent
	title: string
	children: React.ReactNode
}

const ReusableModal = ({ trigger, title, children }: ModalProps) => {
	const [opened, { open, close, toggle }] = useDisclosure(false)

	return (
		<ModalContextProvider value={ { opened, open, close, toggle } }>
			{ React.cloneElement(trigger, { onClick: open }) }

			<Modal opened={ opened } onClose={ close } title={ title }>
				{ children }
			</Modal>
		</ModalContextProvider>
	)
}

export default ReusableModal
