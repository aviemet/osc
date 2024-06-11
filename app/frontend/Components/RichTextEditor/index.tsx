import React, { forwardRef } from 'react'
import { RichTextEditor, Link, type RichTextEditorProps as MantineRichTextEditorProps } from '@mantine/tiptap'
import { useEditor, BubbleMenu, FloatingMenu } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import { DEFAULT_LABELS } from './tiptapLabels'

export interface RichTextEditorProps extends Omit<MantineRichTextEditorProps, 'children'|'editor'|'onChange'> {
	children?: string
	onChange?: (value: string) => void
}

const RichTextEditorComponent = forwardRef<HTMLDivElement, RichTextEditorProps>((
	{ children, onChange },
	ref,
) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			Link,
			Superscript,
			SubScript,
			Highlight,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
		],
		content: children,
		onUpdate: ({ editor }) => {
			onChange?.(editor.getHTML())
		},
	})

	return (
		<RichTextEditor
			ref={ ref }
			editor={ editor }
			labels={ DEFAULT_LABELS }
		>
			<RichTextEditor.Toolbar sticky stickyOffset={ 60 }>
				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Bold />
					<RichTextEditor.Italic />
					<RichTextEditor.Underline />
					<RichTextEditor.Strikethrough />
					<RichTextEditor.ClearFormatting />
					<RichTextEditor.Highlight />
					<RichTextEditor.Code />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.H1 />
					<RichTextEditor.H2 />
					<RichTextEditor.H3 />
					<RichTextEditor.H4 />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Blockquote />
					<RichTextEditor.Hr />
					<RichTextEditor.BulletList />
					<RichTextEditor.OrderedList />
					<RichTextEditor.Subscript />
					<RichTextEditor.Superscript />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Link />
					<RichTextEditor.Unlink />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.AlignLeft />
					<RichTextEditor.AlignCenter />
					<RichTextEditor.AlignJustify />
					<RichTextEditor.AlignRight />
				</RichTextEditor.ControlsGroup>
			</RichTextEditor.Toolbar>

			{ editor && (
				<BubbleMenu editor={ editor }>
					<RichTextEditor.ControlsGroup>
						<RichTextEditor.Bold />
						<RichTextEditor.Italic />
						<RichTextEditor.Link />
					</RichTextEditor.ControlsGroup>
				</BubbleMenu>
			) }

			{ editor && (
				<FloatingMenu editor={ editor }>
					<RichTextEditor.ControlsGroup>
						<RichTextEditor.H1 />
						<RichTextEditor.H2 />
						<RichTextEditor.BulletList />
					</RichTextEditor.ControlsGroup>
				</FloatingMenu>
			) }
			<RichTextEditor.Content />
		</RichTextEditor>
	)
})

export default RichTextEditorComponent
