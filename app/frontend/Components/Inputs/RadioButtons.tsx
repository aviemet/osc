import React from 'react'
import { SegmentedControl, SegmentedControlProps } from '@mantine/core'
import Label from '../Label'

export type TOption = {
	label: string
	value: string
}

export interface IRadioButtonsProps extends Omit<SegmentedControlProps, 'data'> {
	label?: string
	labelPosition?: 'start'|'end'
	name: string
	options: TOption[]
	id?: string
	required?: boolean
}

const RadioButtons = ({ label, labelPosition = 'start', options, name, id, value, required, onChange }: IRadioButtonsProps) => {
	const LabelComponent = () => <Label required={ required } htmlFor={ id }>{ label }</Label>

	return (
		<>
			{ label && labelPosition === 'start' && <LabelComponent /> }
			<SegmentedControl
				value={ value }
				onChange={ (choice: string) => {
					if(onChange) onChange(choice)
				} }
				data={ options }
			/>
			{ label && labelPosition === 'end' && <LabelComponent /> }
		</>
	)
}

export default RadioButtons
