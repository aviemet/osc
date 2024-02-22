import React from 'react'
import { Tabs, type TabsProps } from '@mantine/core'
import UrlTabs from './UrlTabs'

export interface ITabsComponentProps extends TabsProps {
	urlControlled?: boolean
	dependencies?: Record<string, string|string[]>
}

const TabsComponent = ({ children, urlControlled = false, ...props }: ITabsComponentProps) => {
	return urlControlled ?
		<UrlTabs { ...props }>{ children }</UrlTabs>
		:
		<Tabs { ...props }>{ children }</Tabs>
}

TabsComponent.List = Tabs.List
TabsComponent.Tab = Tabs.Tab
TabsComponent.Panel = Tabs.Panel

export default TabsComponent
