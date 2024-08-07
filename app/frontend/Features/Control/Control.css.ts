import { vars } from '@/lib'
import { css } from '@linaria/core'

const highlightBorderPx = 4

export const lastButtonClicked = css`
	border: ${highlightBorderPx}px solid ${vars.colors.green[4]};
	margin: calc(${vars.spacing.xs} - ${highlightBorderPx}px);
`
