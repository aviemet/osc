import React from 'react'
import { Box, Button, Flex, Label, Paper } from '@/Components'
import { PlusCircleIcon, MinusCircleIcon } from '@/Components/Icons'
import { NestedFields, useDynamicInputs } from 'use-inertia-form'
import cx from 'clsx'

import * as classes from './Form.css'

interface IDynamicInputsProps {
	children: React.ReactNode | React.ReactElement[]
	model?: string
	label?: string | React.ReactNode
	emptyData: Record<string, unknown>
}

const DynamicInputs = ({ children, model, label, emptyData }: IDynamicInputsProps) => {
	const { addInput, removeInput, paths } = useDynamicInputs({ model, emptyData })

	return (
		<>
			<Label style={ { flex: 1 } }>{ label }</Label>

			{ paths.map((path, i) => (
				<NestedFields key={ i } model={ path }>
					<Paper className={ cx(classes.dynamicInput) }>
						<Flex key={ i } align="center">
							<Box style={ { flex: 1 } }>
								{ children }
							</Box>
							<Button onClick={ () => removeInput(i) } size='xs' ml="xs">
								<MinusCircleIcon />
							</Button>
						</Flex>
					</Paper>
				</NestedFields>
			)) }

			<Box style={ { textAlign: 'right' } }>
				<Button onClick={ addInput } size='xs' mb="xs" mr="xs">
					<PlusCircleIcon />
				</Button>
			</Box>
		</>
	)
}

export default DynamicInputs
