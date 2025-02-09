import { css } from "@linaria/core"
import { vars } from "@/lib/theme"

export const globals = css`
	:global() {
		html, body, #app {
			height: 100%;
		}

		*::selection {
			background-color: ${vars.colors.primary[2]}; // [2]
		}

		.hidden {
			display: none;
		}

		.fullHeight {
			display: flex;
			flex-direction: column;
		}

		label {
			font-size: 1rem;
		}

		em {
			font-style: italic;
		}

		b {
			font-weight: bold;
		}

		strong {
			font-weight: bold;
		}
	}

	:root {
		--screen-grid-columns: 6;
	}


`
