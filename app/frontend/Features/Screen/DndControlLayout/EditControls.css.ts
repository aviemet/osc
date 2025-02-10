import { vars, theme } from "@/lib"
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
	top: 0;
	right: 0;
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

export const controlOverlay = css`
	background-color: ${vars.colors.white[5]};
	opacity: 0.5;
	border: 2px dashed ${vars.colors.gray[4]};
	border-radius: ${vars.radius.sm};
	width: 100%;
	height: ${theme.other.controls.rowHeight};
	position: absolute;
	pointer-events: none;
`

export const dragging = css`
	opacity: 0.9;
	height: ${theme.other.controls.rowHeight};
`
