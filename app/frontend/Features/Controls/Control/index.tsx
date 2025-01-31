import React from "react"
import ButtonControl from "./Button"
import SliderControl from "./Slider"
import SpacerControl from "./Spacer"
import { type BoxProps } from "@mantine/core"
import { ConditionalWrapper, Box } from "@/Components"
import EditControlWrapper from "./EditControlWrapper"

import cx from "clsx"
import * as classes from "../Controls.css"

export interface ControlPropsBase extends BoxProps {
	children?: React.ReactNode
	edit?: boolean
	wrapper?: boolean
	disable?: boolean
}

type ControlPropsEdit = ControlPropsBase & {
	edit: true
	control: Schema.ControlsFormData
}

type ControlPropsShow = ControlPropsBase & {
	edit: false | undefined
	control: Schema.ControlsShow
}

type ControlComponent =  (props: Omit<ControlProps, "edit"> & {
	edit: boolean
	control: Schema.ControlsFormData | Schema.ControlsShow
}) => React.ReactNode

export type ControlProps = ControlPropsEdit | ControlPropsShow

const Control = ({ control, edit = false, wrapper = true, className, ...props }: ControlProps) => {
	let ControlComponent: ControlComponent

	switch(control.control_type) {
		case "button":
			ControlComponent = ButtonControl as ControlComponent
			break

		case "slider":
			ControlComponent = SliderControl as ControlComponent
			break


		case "spacer":
			ControlComponent = SpacerControl as ControlComponent
			break

		default:
			ControlComponent = React.Fragment
	}

	return (
		<ConditionalWrapper
			condition={ !edit || wrapper }
			wrapper={ children => <Box className={ cx(classes.controlWrapper) }>{ children }</Box> }
		>
			<ConditionalWrapper
				condition={ edit === true }
				wrapper={ children => (
					<EditControlWrapper
						control={ control as Schema.ControlsFormData }
					>
						{ children }
					</EditControlWrapper>
				) }
			>
				<ControlComponent
					m="xs"
					edit={ edit === true }
					control={ control }
					className={ cx(className) }
					{ ...props }
				/>
			</ConditionalWrapper>
		</ConditionalWrapper>
	)
}

export default Control
