import { vars } from "@/lib"
import { css } from "@linaria/core"

export const editControlsForm = css`
	.control {
		&.spacer {
			border: 2px dotted ${vars.colors.gray[4]};
			border-radius: ${vars.radius.sm};
			min-height: 100%;
		}

		&.slider {}

		&.button {
			width: 100%;
		}
	}
`

export const editButtonIcon = css`
	position: absolute;
	top: 5px;
	right: 13px;
	cursor: pointer;
	z-index: 100;
`

export const editControl = css`
	cursor: auto;

	&:active {
		transform: none;
	}
`

export const editControlWrapper = css`
	display: inline-block;
	position: relative;
`
