import React from 'react'
import Control, { type ControlProps } from '.'
import * as classes from './Control.css'

const EditControl = ({ control }: ControlProps) => {
	return <Control control={ control } edit className={ classes.editControl }></Control>
}

export default EditControl
