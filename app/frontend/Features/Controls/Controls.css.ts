import { vars } from "@/lib"
import { css } from "@linaria/core"

const highlightBorderPx = 4

export const controlWrapper = css`

`

export const lastButtonClicked = css`
	border: ${highlightBorderPx}px solid ${vars.colors.green[4]};
	margin: calc(${vars.spacing.xs} - ${highlightBorderPx}px);
`
export const spacer = css`
	/* border-style: dashed;
	border-width: 2px;
	border-color: ${vars.colors.white}; */
`

export const button = css`

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
