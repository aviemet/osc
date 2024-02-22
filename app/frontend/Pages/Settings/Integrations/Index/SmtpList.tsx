import { Group, Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { Routes } from '@/lib'
import React from 'react'

interface ISmtpListProps {
	smtps: Schema.Smtp[]
}

const SmtpList = ({ smtps }: ISmtpListProps) => {
	return (
		<Table.TableProvider
			model="smtp"
			rows={ smtps }
			selectable
		>
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.Cell sort="name">Name</Table.Cell>
						<Table.Cell sort="domain">Host</Table.Cell>
						<Table.Cell sort="username">Username</Table.Cell>
						<Table.Cell>Actions</Table.Cell>
					</Table.Row>
				</Table.Head>

				<Table.Body>
					<Table.RowIterator render={ (smtp: Schema.Smtp) => (
						<Table.Row key={ smtp.id }>
							<Table.Cell>
								<Link href={ Routes.settingsSmtp(smtp.id!) }>{ smtp.name }</Link>
							</Table.Cell>
							<Table.Cell>{ smtp.domain }</Table.Cell>
							<Table.Cell>{ smtp.username }</Table.Cell>
							<Table.Cell fitContent>
								<Group spacing="sm">
									<EditButton href={ Routes.editSettingsSmtp(smtp.id!) } label={ smtp.name } />
								</Group>
							</Table.Cell>
						</Table.Row>
					) } />
				</Table.Body>

			</Table>
		</Table.TableProvider>
	)
}

export default SmtpList
