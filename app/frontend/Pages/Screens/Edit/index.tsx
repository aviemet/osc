import React, { useState } from "react"
import { Page, Tabs } from "@/Components"
import { Routes } from "@/lib"
import { useLocation } from "@/lib/hooks"
import { router } from "@inertiajs/react"
import { useDroppable } from "@dnd-kit/core"
import NewControlMenu from "./NewControlMenu"
import NewScreenTabButton from "./ScreenTabControls/NewScreenTabButton"
import EditScreenTabButton from "./ScreenTabControls/EditScreenTabButton"

import cx from "clsx"
import * as classes from "./ScreenControl.css"
import DndControlPosition from "@/Features/Screen/DndControlPosition"

interface EditScreenProps {
	screen: Schema.ScreensEdit
	screens: Schema.ScreensOptions[]
}

const EditScreen = ({ screen, screens }: EditScreenProps) => {
	const getScreenId = (slug: string): number | false => {
		const currentScreen = screens.find(s => s.slug === slug)
		if(currentScreen?.id) {
			return currentScreen.id
		}

		return false
	}

	const { paths } = useLocation()

	const [currentTabId, setCurrentTabId] = useState(getScreenId(paths[1]))

	const title = "Edit Screen"

	const droppable = useDroppable({
		id: "screen_droppable",
	})

	const handleTabChange = (value: string | null) => {
		if(value === null) return

		const currentScreenId = getScreenId(value)

		if(currentScreenId) {
			setCurrentTabId(currentScreenId)
		}

		value && router.get(Routes.editScreen(value))
	}

	return (
		<>
			<Page title={ title }>

				<Tabs
					variant="outline"
					value={ paths[1] }
					onChange={ handleTabChange }
					className={ cx(classes.tabsParent) }
				>
					<Tabs.List>
						{ screens.map(iScreen => (
							<Tabs.Tab
								key={ iScreen.id }
								value={ iScreen.slug }
								className={ cx(classes.tabsTab) }
							>
								{ iScreen.title }
								<EditScreenTabButton screen={ iScreen } />
							</Tabs.Tab>
						)) }
						<NewScreenTabButton />

					</Tabs.List>

					{ screens.map(iScreen => (
						<Tabs.Panel
							key={ `${iScreen.id}-${iScreen.slug}` }
							value={ iScreen.slug }
							className={ cx(classes.tabsPanel) }
							ref={ droppable.setNodeRef }
						>
							{ iScreen.id === screen.id && <DndControlPosition screen={ screen } /> }
						</Tabs.Panel>
					)) }
				</Tabs>

				<NewControlMenu screenId={ currentTabId } menuId={ currentTabId || undefined } />

			</Page>

			<div id="control-form-portal" />
		</>
	)
}

export default EditScreen
