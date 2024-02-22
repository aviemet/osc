import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const menuItem = css`
	&.disabled * {
		// color: vars.colors.gray[vars.fn.primaryShade()],
		text-decoration: line-through;

		& input[type=checkbox], & input[type=checkbox]:checked {
			// background-color: vars.colors.gray[vars.fn.primaryShade()],
		}
	}
`
