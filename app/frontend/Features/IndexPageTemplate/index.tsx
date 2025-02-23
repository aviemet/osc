import React from "react"
import { Page, Table } from "@/Components"
import TableTitleSection, { IIndexTableTitleSectionProps } from "./TableTitleSection"
import { type Pagination } from "@/types"

interface IIndexPageTemplateProps extends IIndexTableTitleSectionProps {
	model: string
	rows: Record<string, any>[]
	pagination: Pagination
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
}: IIndexPageTemplateProps) => {
	return (
		<Page title={ title }>
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
