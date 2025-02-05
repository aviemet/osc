import React from "react"
import { Box } from "@/Components"
import { vars } from "@/lib"
import { css } from "@linaria/core"

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

  &.right {
    cursor: e-resize;
    right: -3px;
    top: 0;
    width: 6px;
    height: 100%;
  }

  &.bottom {
    cursor: s-resize;
    bottom: -3px;
    left: 0;
    height: 6px;
    width: 100%;
  }

  &.corner {
    cursor: se-resize;
    bottom: -3px;
    right: -3px;
    height: 10px;
    width: 10px;
  }
`

interface ResizeHandleProps {
	position: "right" | "bottom" | "corner"
	onResize: (e: React.MouseEvent) => void
}

const ResizeHandle = ({ position, onResize }: ResizeHandleProps) => {
	return (
		<Box
			className={ `${handleStyles} ${position}` }
			onMouseDown={ onResize }
		/>
	)
}

export default ResizeHandle
