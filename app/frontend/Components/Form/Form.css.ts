import { vars, theme } from '@/lib/theme'
import { rem } from '@mantine/core'
import { css } from '@linaria/core'

export const form = css`
	.field {
		/* margin-bottom: ${vars.spacing.md} */
	}
`

export const dynamicInput = css`
	background-color: ${vars.colors.gray[8]};
	box-shadow: ${vars.shadows.xs};
	margin-bottom: ${vars.spacing.xs};
	padding: ${vars.spacing.xs};
	border-radius: ${vars.radius.sm}
`
