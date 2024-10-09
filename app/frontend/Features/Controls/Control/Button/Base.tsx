import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import axios from 'axios'
import { type ButtonProps } from '@mantine/core'
import { useLocalStorage } from '@/lib/hooks'
import { type ControlProps } from '..'
import { controlRoute, controlTitle } from '../lib'

import cx from 'clsx'
import * as classes from '../Control.css'

export interface ButtonControlBaseProps extends ButtonProps, ControlProps {}

const ButtonControlBase = forwardRef<HTMLButtonElement, ButtonControlBaseProps>((
	{ children, control, disable, ...props },
	ref,
) => {
	return (
		<Button
			ref={ ref }
			color={ control?.color ?? undefined }
			{ ...props }
		>
			{ children || controlTitle(control) }
		</Button>
	)
})

export default ButtonControlBase
