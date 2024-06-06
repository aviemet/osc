import { vars, theme } from '@/lib/theme'
import { rem } from '@mantine/core'
import { css } from '@linaria/core'

export const wrapper = css`
	overflow: auto;
	position: relative;
	height: 100%;
	max-height: 100%;
`

export const table = css`
	width: 100%;

	&.layout-fixed {
		table-layout: fixed;
	}

	&.layout-auto {
		table-layout: auto;
	}

	thead {
		box-shadow: ${vars.shadows.xs};
		position: sticky;
		top: 0;
		z-index: 1;

		${vars.lightSelector} {
			background-color: ${vars.colors.gray[1]};

			th:hover {
				background-color: ${vars.colors.gray[1]};
			}
		}
		${vars.darkSelector} {
			background-color: ${vars.colors.dark[7]};
		}
	}

	th, td {
		padding: ${rem(6)};

		.mantine-Button-root {
			padding: ${vars.spacing.xxs};
		}

		&.table-column-fit {
			width: 1px;
			white-space: nowrap;
		}
	}

	th {
		&.sortable {
			position: relative;
			padding-right: 1rem;
			white-space: nowrap;

			a {
				${vars.lightSelector} {
					color: ${vars.colors.black};
				}
				${vars.darkSelector} {
					color: ${vars.colors.white};
				}
			}


			&:before {
				border-top: 0;
				top: calc(50% - (${theme.other.table.sortButtonHeight}px + 2px));
				border-bottom-width: ${theme.other.table.sortButtonWidth}px;
			}

			&:after {
				border-bottom: 0;
				bottom: calc(50% - (${theme.other.table.sortButtonHeight}px + 2px));
				border-top-width: ${theme.other.table.sortButtonWidth}px;
			}

			&.asc:before, &.desc:after {
				border-color: ${vars.colors.gray[7]};
			}
		}

	}

	/* On small screens, collapse tables into "cards" */
	@media(max-width: ${vars.breakpoints.sm}) {
		thead {
			display: none;
		}

		/* Only for tables with a thead */
		thead + tbody {
			tr {
				display: flex;
				flex-direction: column;
				margin-bottom: 10px;
				background-color: ${vars.colors.dark[7]};
				border-radius: ${rem(4)};
				padding: ${rem(6)};
				border-bottom: 1px solid ${vars.colors.primaryColors.filled};
			}

			td {
				display: grid;
				grid-template-columns: 8rem 1fr;

				&::before {
					content: attr(data-cell);
				}

				&.table-row-select-checkbox {
					visibility: collapse;
				}
			}
		}
	}
`

export const section = css`
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const searchWrapper = css`
	display: flex;
	flex: 1;
`

export const searchInput = css`
	flex: 1;

	input {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: ${vars.radius.sm};
		border-bottom-left-radius: ${vars.radius.sm};
	}
`

export const columnPickerButton = css`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
`

export const pagination = css`
	a:hover {
		text-decoration: none;
	}
`

export const limitSelect = css`
	display: inline-block;
	max-width: 60px;
`
