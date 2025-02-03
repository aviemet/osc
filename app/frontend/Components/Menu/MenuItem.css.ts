import { vars } from "@/lib/theme"
import { css } from "@linaria/core"

export const menuItem = css`
	&.disabled * {
		text-decoration: line-through;

		& input[type=checkbox], & input[type=checkbox]:checked {
			
		}
	}
`
