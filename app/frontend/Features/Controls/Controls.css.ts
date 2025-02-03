import { vars } from "@/lib"
import { css } from "@linaria/core"

const highlightBorderPx = 4

export const controlContainer = css`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-auto-rows: 1fr;
	gap: ${vars.spacing.md};
	width: 100%;
	padding: ${vars.spacing.md};

	.control {
		&.spacer {}

		&.slider {}

		&.button {
			width: 100%;
		}
	}
`

export const lastButtonClicked = css`
	border: ${highlightBorderPx}px solid ${vars.colors.green[4]};
`
