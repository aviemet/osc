import { router } from "@inertiajs/react"
import { Select, type SelectProps } from "@mantine/core"
import axios from "axios"
import { Routes } from "@/lib"
import { useLocation, usePageProps } from "@/lib/hooks"
import useStore from "@/lib/store/"

import cx from "clsx"
import * as classes from "../Table.css"

interface LimitSelectProps extends SelectProps {
	pagination: Schema.Pagination
	model: string
}

const LimitSelect = ({ pagination, model }: LimitSelectProps) => {
	const { auth: { user } } = usePageProps()
	const location = useLocation()
	const defaultLimit = useStore(state => state.defaults.tableRecordsLimit)

	const handleLimitChange = (limit: string | null) => {
		if(!model) return

		limit ||= String(defaultLimit)

		// TODO: Use react-query
		axios.patch( Routes.apiUpdateTablePreferences(user.id!), {
			user: {
				table_preferences: {
					[model]: { limit },
				},
			},
		}).then(() => {
			// Redirect to first page if new limit puts page out of bounds of records
			if(parseInt(limit) * (pagination.current_page - 1) > pagination.count) {
				location.params.delete("page")
				router.get(
					location.path,
					{ ...location.paramsAsJson },
					{ preserveScroll: true },
				)
			} else {
				router.reload()
			}
		})
	}

	return (
		<Select
			variant="filled"
			mx={ 4 }
			my={ 0 }
			withCheckIcon={ false }
			className={ cx(classes.limitSelect) }
			rightSectionWidth='1rem'
			defaultValue={ String(pagination.limit) || String(defaultLimit) }
			data={ [
				{ value: "10", label: "10" },
				{ value: "25", label: "25" },
				{ value: "50", label: "50" },
				{ value: "100", label: "100" },
			] }
			onChange={ handleLimitChange }
		/>
	)
}

export default LimitSelect
