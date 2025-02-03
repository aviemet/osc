import { vars, theme } from "@/lib/theme"
import { rem } from "@mantine/core"
import { css } from "@linaria/core"

export const section = css`
	${vars.lightSelector} {
		background-color: ${vars.colors.white};
	}
	${vars.darkSelector} {
		background-color: ${vars.colors.gray[9]};
	}
	
	box-shadow: ${vars.shadows.xs};
	padding: 1rem 0.75rem;
	border-top: 2px solid ${vars.colors.primaryColors.filled};

	& + & {
		margin-top: ${rem(10)};
	}
`
