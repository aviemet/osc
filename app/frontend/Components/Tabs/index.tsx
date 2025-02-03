import React from "react"
import { Tabs, type TabsProps } from "@mantine/core"
import UrlTabs from "./UrlTabs"
import TabLink from "./TabLink"

import cx from "clsx"
import * as classes from "./Tabs.css"

export interface TabsComponentProps extends TabsProps {
	urlControlled?: boolean
	dependencies?: Record<string, string | string[]>
}

const TabsComponent = ({ children, urlControlled = false, className, ...props }: TabsComponentProps) => {
	return urlControlled ?
		<UrlTabs className={ cx(className, classes.tabs) } { ...props }>{ children }</UrlTabs>
		:
		<Tabs className={ cx(className, classes.tabs) } { ...props }>{ children }</Tabs>
}

TabsComponent.List = Tabs.List
TabsComponent.Tab = Tabs.Tab
TabsComponent.Link = TabLink
TabsComponent.Panel = Tabs.Panel

export default TabsComponent
