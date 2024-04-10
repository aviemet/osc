import React from 'react'
import { Box, Button, Flex, Paper } from '@/Components'
import { PlusCircleIcon, MinusCircleIcon } from '@/Components/Icons'
import { NestedFields, useDynamicInputs } from 'use-inertia-form'

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
			<Flex>
				<Box style={ { flex: 1 } }>{ label }</Box>
				<Button onClick={ addInput } size='xs' mb="xs" mr="xs">
					<PlusCircleIcon />
				</Button>
			</Flex>

			{ paths.map((path, i) => (
				<NestedFields key={ i } model={ path }>
					<Paper p="xs" shadow="xs" mb="xs">
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
		</>
	)
}

export default DynamicInputs
