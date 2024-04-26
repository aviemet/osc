import React from 'react'
import { SortableList } from '@/Components/Sortable'
import { Box, Flex } from '@mantine/core'

const Dev = ({ protocol }: { protocol: Schema.ProtocolsShow }) => {
	return (
		<div>
			<SortableList<Schema.CommandsOptions>
				items={ protocol.commands }
			>{ item => (
					<SortableList.Item id={ item.id }>
						<SortableList.DragHandle />
						<Flex>
							<Box>{ item.title }</Box>
							<Box>{ item.order }</Box>
						</Flex>
					</SortableList.Item>
				) }
			</SortableList>
		</div>
	)
}

export default Dev
