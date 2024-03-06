import React from 'react'
import Control, { ControlProps } from './index'
import * as classes from './Control.css'

const EditControl = ({ control }: ControlProps) => {
	return <Control control={ control } edit className={ classes.editControl }></Control>
}

export default EditControl
