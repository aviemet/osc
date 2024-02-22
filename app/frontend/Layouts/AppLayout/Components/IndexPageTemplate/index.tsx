import React from 'react'
import { Page, Table, type PageProps } from '@/Components'
import TableTitleSection, { IIndexTableTitleSectionProps } from './TableTitleSection'

interface IndexPageTemplateProps
	extends IIndexTableTitleSectionProps, Omit<PageProps, 'children'|'title'> {
	model: string
	rows: Record<string, any>[]
	pagination: Schema.Pagination
	search?: boolean
	advancedSearch?: React.ReactNode
}

const IndexPageTemplate = ({
	children,
	title,
	model,
	rows,
	pagination,
	search = true,
	menuOptions,
	advancedSearch,
	deleteRoute,
	navMenu,
	hideNavMenu,
	meta,
}: IndexPageTemplateProps) => {
	return (
		<Page title={ title } navMenu={ navMenu } hideNavMenu={ hideNavMenu } meta={ meta }>
			<Table.Section>
				<Table.TableProvider
					selectable
					model={ model }
					rows={ rows }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ menuOptions } deleteRoute={ deleteRoute }>
						{ search && <Table.SearchInput advancedSearch={ advancedSearch } /> }
					</TableTitleSection>

					{ children }

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default IndexPageTemplate
