import React, { useCallback, useEffect } from 'react'
import { router } from '@inertiajs/react'
import { type VisitOptions } from '@inertiajs/core'
import { debounce } from 'lodash'
import { useTableContext } from '../TableContext'
import { TextInput } from '@/Components/Inputs'
import { SearchIcon, CrossIcon } from '@/Components/Icons'
import { ActionIcon, Box } from '@mantine/core'
import { useSessionStorage } from '@mantine/hooks'
import ColumnPicker from './ColumnPicker'
import AdvancedSearch from './AdvancedSearch'
import { useInit, useLocation } from '@/lib/hooks'
import * as classes from '../Table.css'

interface SearchInputProps {
	columnPicker?: boolean
	advancedSearch?: React.ReactNode
}

/**
 * Performs an Inertia request to the current url (window.location), using the search params
 * as query string with the key of 'search'
 */
const SearchInput = ({ columnPicker = true, advancedSearch }: SearchInputProps) => {
	const { tableState: { model }, setTableState } = useTableContext()

	const location = useLocation()
	const [searchValue, setSearchValue, clearSearchValue] = useSessionStorage({
		key: `${model ?? 'standard'}-query`,
		defaultValue: location.params.get('search') || '',
		getInitialValueInEffect: false,
	})

	useInit(() => {
		const urlSearchString = location.params.get('search')

		// On first render, use URL search param as search value.
		// This should only trigger on page load when directly visited via a shared link e.g.
		if(urlSearchString) {
			// Doesn't trigger a server visit due to checks in the other useEffect
			setSearchValue(urlSearchString)
			return
		}

		// Only persist search parameter for tables scoped to a model
		if(model && searchValue) {
			setTableState({ searching: true })
			setSearchValue(searchValue)
		}
	})

	const debouncedSearch = useCallback(debounce((path) => {
		const options: VisitOptions = {
			replace: true,
			preserveScroll: true,
			preserveState: true,
			onStart: () => {
				setTableState({ searching: true })
			},
			onSuccess: () => {
				setTableState({ searching: false })
			},
		}
		if(model) options.only = [model, 'pagination']

		router.get(path, {}, options)
	}, 500), [model, setTableState])

	useEffect(() => {
		const url = new URL(window.location.href)

		if(
			url.searchParams.get('search') === searchValue ||
			(url.searchParams.get('search') === null && searchValue === '')
		) return

		if(searchValue === '') {
			url.searchParams.delete('search')
		} else {
			url.searchParams.set('search', searchValue ?? '')
			url.searchParams.delete('page')
		}

		debouncedSearch(url.toString())
	}, [debouncedSearch, searchValue])

	return (
		<Box className={ classes.searchWrapper }>
			{ advancedSearch && <AdvancedSearch>{ advancedSearch }</AdvancedSearch> }
			<TextInput
				name="search"
				id="search"
				value={ searchValue }
				onChange={ e => setSearchValue(e.target.value) }
				rightSection={ searchValue !== '' && <ActionIcon variant="transparent" onClick={ clearSearchValue }>
					<CrossIcon color="grey" />
				</ActionIcon> }
				leftSection={ <SearchIcon size={ 24 } /> }
				leftSectionPointerEvents="none"
				className={ classes.searchInput }
				aria-label="Search"
				wrapper={ false }
			/>
			{ columnPicker && <ColumnPicker /> }
		</Box>
	)
}

export default SearchInput
