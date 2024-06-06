export { default as Button } from './Button'
export { default as ConditionalWrapper } from './ConditionalWrapper'
export { default as Control } from '../Features/Control'
export { default as DangerousHtml } from './DangerousHtml'
export { default as Heading } from './Heading'
export { default as Link, NavLink } from './Link'
export { default as Menu } from './Menu'
export { default as Modal } from './Modal'
export { default as Page, type PageProps } from './Page'
export { default as RichTextEditor } from './RichTextEditor'
export { default as Section } from './Section'
export { default as Table, type TableProps } from './Table'
export { default as Label } from './Label'
export { default as Tabs } from './Tabs'

// Export UI library components as a proxy to allow easy refactoring
export {
	ActionIcon,
	AppShell,
	Badge,
	Box,
	Burger,
	Card,
	Center,
	Code,
	Container,
	Divider,
	Flex,
	Grid,
	Group,
	List,
	Paper,
	ScrollArea,
	SimpleGrid,
	Slider,
	Stack,
	Text,
	Title,
	Tooltip,
	ThemeIcon as Icon,
} from '@mantine/core'
