import { vars } from '@/lib/theme'
import { css } from '@linaria/core'

export const authLayout = css`
	height: 100%;

	#auth-layout-left, #auth-layout-right {
		flex: 1;
	}

	#auth-layout-left {
		.mantine-Paper-root {
			flex: 0.75;
		}
	}

	#auth-layout-right {
		background-color: ${vars.colors.primary.filled};
	}
`
