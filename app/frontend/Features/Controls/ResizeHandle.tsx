import React from "react"
import { Box } from "@/Components"
import { vars } from "@/lib"
import { css } from "@linaria/core"

import cx from "clsx"

const handleStyles = css`
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

interface ResizeHandleProps {
	position: "left" | "right" | "top" | "bottom" | "corner"
	placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
	onResize: (e: React.MouseEvent) => void
}

const ResizeHandle = ({ position, placement, onResize }: ResizeHandleProps) => {
	return (
		<Box
			className={ cx(handleStyles, position, placement) }
			onMouseDown={ onResize }
			data-no-dnd
		/>
	)
}

export default ResizeHandle
