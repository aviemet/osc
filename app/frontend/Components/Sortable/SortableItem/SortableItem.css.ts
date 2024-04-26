import { vars, theme } from '@/lib/theme'
import { css } from '@linaria/core'

export const sortableItem = css`
	display: flex;
	justify-content: space-between;
	flex-grow: 1;
	align-items: center;
	padding: 18px 20px;
	background-color: #fff;
	box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),
		0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);
	border-radius: calc(4px / var(--scale-x, 1));
	box-sizing: border-box;
	list-style: none;
	color: #333;
	font-weight: 400;
	font-size: 1rem;
	font-family: sans-serif;
`

export const dragHandle = css`
	display: flex;
  width: 12px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  touch-action: none;
  cursor: var(--cursor, pointer);
  border-radius: 5px;
  border: none;
  outline: none;
  appearance: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;

	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	&:focus-visible {
		box-shadow: 0 0px 0px 2px #4c9ffe;
	}

	& svg {
		flex: 0 0 auto;
		margin: auto;
		height: 100%;
		overflow: visible;
		fill: #919eab;
	}
`
