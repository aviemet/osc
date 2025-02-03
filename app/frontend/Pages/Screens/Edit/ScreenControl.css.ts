import { vars } from "@/lib/theme"
import { css } from "@linaria/core"

export const droppable = css`
	width: 100%;
	height: 100%;
	background-color: #CCC;
`

export const dragOverlay = css`
	background-color: rgba(255,255,255,0.4);
	border: 1px solid #333;
`

export const tabsParent = css`

`

export const tabsTab = css`
	.mantine-Tabs-tabLabel {
		display: flex;
		gap: 8px;
		justify-content: space-between;
	}
`

export const tabsPanel = css`
	padding: ${ vars.spacing.sm };
	border-left: 1px solid var(--tab-border-color);
	border-bottom: 1px solid var(--tab-border-color);
	border-right: 1px solid var(--tab-border-color);
`
