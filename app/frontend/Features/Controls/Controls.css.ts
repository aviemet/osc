import { vars } from "@/lib"
import { css } from "@linaria/core"

const highlightBorderPx = 4

export const controlContainer = css`
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-auto-rows: 150px;
	gap: ${vars.spacing.md};
	padding: ${vars.spacing.md};
	width: 100%;
	position: relative;

	.control-wrapper {
		width: 100%;
		height: 100%;
	
		.control {
			width: 100%;
			height: 100%;
			min-height: 50px;
			position: relative;

			&.spacer {}

			&.slider {}

			&.button {}
		}
	}
`

export const lastButtonClicked = css`
	border: ${highlightBorderPx}px solid ${vars.colors.green[4]};
`
