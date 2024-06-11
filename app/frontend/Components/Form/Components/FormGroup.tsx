import React from 'react'
import { DivProps } from 'react-html-props'
import { ConditionalWrapper, Grid, Box } from '@/Components'
import { NestedFields } from 'use-inertia-form'
import cx from 'clsx'

interface FormGroupProps extends DivProps {
	legend?: string
	outline?: boolean
	model?: string
	grid?: boolean
}

const FormGroup = ({ children, legend, outline = true, model, grid = true }: FormGroupProps) => {
	return (
		<ConditionalWrapper
			condition={ grid }
			wrapper={ children => (
				<Grid.Col>
					<Grid component='fieldset' className={ cx({ outline }) } style={ {
						marginTop: legend ? '0.5rem' : undefined,
					} }>
						{ children }
					</Grid>
				</Grid.Col>
			) }
			elseWrapper={ children => (
				<Box component='fieldset' className={ cx({ outline }) } style={ {
					marginTop: legend ? '0.5rem' : undefined,
				} }>
					{ children }
				</Box>
			) }
		>
			<ConditionalWrapper
				condition={ model !== undefined }
				wrapper={ children => <NestedFields model={ model! }>{ children }</NestedFields> }
			>
				<>
					{ legend && <legend>{ legend }</legend> }
					{ children }
				</>
			</ConditionalWrapper>
		</ConditionalWrapper>
	)
}

export default FormGroup
