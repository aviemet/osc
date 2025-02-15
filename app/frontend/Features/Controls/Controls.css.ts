import { vars, theme } from "@/lib"
import { css } from "@linaria/core"

const highlightBorderPx = 4

export const controlContainer = css`
	display: grid;
	grid-auto-flow: dense;
	grid-auto-rows: ${theme.other.controls.rowHeight};
	gap: 16px;
	padding: ${vars.spacing.md};
	width: 100%;
	position: relative;
	grid-template-columns: repeat(var(--screen-grid-columns, 6), 1fr);

	.control-wrapper {
		width: 100%;
		height: 100%;
	
		.control {
			width: 100%;
			height: 100%;
			min-height: 50px;
			position: relative;

			&.spacer {}

			&.slider {}

			&.button {}
		}
	}
`

export const lastButtonClicked = css`
	border: ${highlightBorderPx}px solid ${vars.colors.green[4]};
`

export const ewResize = css`
	* {
		cursor: ew-resize !important;
	}
`

export const nsResize = css`
	* {
		cursor: ns-resize !important;
	}
`

export const nwseResize = css`
	* {
		cursor: nwse-resize !important;
	}
`

export const handleStyles = css`
  position: absolute;
  background-color: ${vars.colors.gray[3]};
  border-radius: ${vars.radius.sm};
  z-index: 100;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    background-color: ${vars.colors.blue[5]};
  }

  &.left {
    cursor: w-resize;
    left: -3px;
    top: 0;
    width: 6px;
    height: 100%;
  }

  &.right {
    cursor: e-resize;
    right: -3px;
    top: 0;
    width: 6px;
    height: 100%;
  }

  &.top {
    cursor: n-resize;
    top: -3px;
    left: 0;
    height: 6px;
    width: 100%;
  }

  &.bottom {
    cursor: s-resize;
    bottom: -3px;
    left: 0;
    height: 6px;
    width: 100%;
  }

  &.corner {
    height: 10px;
    width: 10px;

    &.top-left {
      cursor: nw-resize;
      top: -3px;
      left: -3px;
    }

    &.top-right {
      cursor: ne-resize;
      top: -3px;
      right: -3px;
    }

    &.bottom-left {
      cursor: sw-resize;
      bottom: -3px;
      left: -3px;
    }

    &.bottom-right {
      cursor: se-resize;
      bottom: -3px;
      right: -3px;
    }
  }
`
