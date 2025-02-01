import { vars } from "@/lib"
import { css } from "@linaria/core"

const highlightBorderPx = 4

export const controlWrapper = css`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: ${vars.spacing.md};
	width: 100%;
`

export const lastButtonClicked = css`
	border: ${highlightBorderPx}px solid ${vars.colors.green[4]};
	margin: calc(${vars.spacing.xs} - ${highlightBorderPx}px);
`
export const spacer = css`
	border: 2px dotted ${vars.colors.gray[4]};
	border-radius: ${vars.radius.sm};
	min-height: 40px;
	margin: ${vars.spacing.xs} 0;
`

export const button = css`
	width: 100%;
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
