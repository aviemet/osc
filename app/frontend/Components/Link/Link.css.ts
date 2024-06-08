import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const external = css`
	display: inline-block;

	.react-icon.external {
		display: inline-block;
		vertical-align: text-top;
	}
	
	&[disabled], &[data-disabled] {
		pointer-events: none;
	}
`
