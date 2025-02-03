import React from "react"
import { Box, Button, Flex, Label, Paper } from "@/Components"
import { PlusCircleIcon, MinusCircleIcon } from "@/Components/Icons"
import { NestedFields, NestedObject, useDynamicInputs, useForm } from "use-inertia-form"
import { DynamicInputContextProvider } from "./dynamicInputContext"
import cx from "clsx"

import * as classes from "../../Form.css"

export interface DynamicInputsProps<T = NestedObject> {
	children: React.ReactNode | React.ReactElement[]
	model?: string
	label?: string | React.ReactNode
	emptyData: T
	onAddInput?: () => void
	onRemoveInput?: (record: T) => void
}

const DynamicInputs = <T extends Record<string, any>>({
	children,
	model,
	label,
	emptyData,
	onAddInput,
	onRemoveInput,
}: DynamicInputsProps<T>) => {
	const { addInput, removeInput, paths } = useDynamicInputs<T>({ model, emptyData })
	const { getData, model: formModel } = useForm()

	const handleRemoveInput = (i: number) => {
		const record = removeInput(i)
		onRemoveInput?.(record as T)
	}

	const handleAddInput = () => {
		onAddInput?.()
		addInput()
	}

	return (
		<Box className={ cx("dynamic_inputs", model, paths) }>
			<Label style={ { flex: 1 } }>{ label }</Label>

			{ paths.map((path, i) => (
				<DynamicInputContextProvider key={ i } value={ {
					record: getData(`${formModel}.${path}`),
					path,
					addInput,
					removeInput,
					index: i,
				} }>
					<NestedFields model={ path }>
						<Paper className={ cx(classes.dynamicInput) }>
							<Flex key={ i } align="center">
								<Box style={ { flex: 1 } }>
									{ children }
								</Box>
								<Button onClick={ () => handleRemoveInput(i) } size='xs' ml="xs">
									<MinusCircleIcon />
								</Button>
							</Flex>
						</Paper>
					</NestedFields>
				</DynamicInputContextProvider>
			)) }

			<Box style={ { textAlign: "right" } }>
				<Button onClick={ handleAddInput } size='xs' mb="xs" mr="xs">
					<PlusCircleIcon />
				</Button>
			</Box>
		</Box>
	)
}

export default DynamicInputs

export { useDynamicInputContext } from "./dynamicInputContext"
