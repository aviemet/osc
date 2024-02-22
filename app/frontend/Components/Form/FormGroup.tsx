import React from 'react'
import { Box } from '@mantine/core'
import cx from 'clsx'
import { DivProps } from 'react-html-props'
import ConditionalWrapper from '../ConditionalWrapper'
import { NestedFields } from 'use-inertia-form'

interface IFormGroupProps extends DivProps {
	legend?: string
	outline?: boolean
	compact?: boolean
	model?: string
}

const FormGroup = ({ children, legend, outline = true, compact = false, model }: IFormGroupProps) => {
	return (
		<Box component='fieldset' className={ cx({ outline }) } sx={ {
			marginTop: legend ? '0.5rem' : undefined,
		} }>
			<ConditionalWrapper
				wrapper={ children => <NestedFields model={ model! }>{ children }</NestedFields> }
				condition={ model !== undefined }
			>
				<>
					{ legend && <legend>{ legend }</legend> }
					{ children }
				</>
			</ConditionalWrapper>
		</Box>
	)
}

export default FormGroup
