import React from 'react'
import { Button } from '@/Components'
import { ElementProps, type ButtonProps } from '@mantine/core'
import { type ControlProps } from '..'
import { controlTitle } from '../lib'

import cx from 'clsx'
import * as classes from '../../Controls.css'

export interface ControlButtonBaseProps
	extends ControlProps, ButtonProps,
	ElementProps<'button', keyof ButtonProps>{ }

const ControlButtonBase = ({ children, control, disable, className, ...props }: ControlButtonBaseProps) => {
	return (
		<Button
			color={ control?.color ?? undefined }
			className={ cx(classes.button, className) }
			{ ...props }
		>
			{ children || controlTitle(control) }
		</Button>
	)
}

export default ControlButtonBase
