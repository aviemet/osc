import { vars } from '@/lib'
import { css } from '@linaria/core'

export const editButtonIcon = css`
	position: absolute;
	top: 2px;
	right: 2px;
	cursor: pointer;
`

export const editControl = css`
	cursor: auto;

	&:active {
		transform: none;
	}
`
