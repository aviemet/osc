import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const title = css`
	flex: 1 1 100%;
	width: 100%;

	@media (min-width: ${vars.breakpoints.sm}) {
		flex: 1;
		width: auto;
	}

	@media (max-width: ${vars.breakpoints.sm}) {
		&& {
			margin-bottom: 0;
		}
	}

	h1 {
		margin-bottom: 0;
	}
`

export const content = css`
	flex: 1 1 100%;
	display: flex;

	@media (min-width: ${vars.breakpoints.sm}) {
		flex: 1;
		width: auto;
	}
`
