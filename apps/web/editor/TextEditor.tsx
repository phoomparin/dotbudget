import React, {useState, useRef} from 'react'

import {
  ControlledEditor,
  EditorDidMount,
  monaco,
  ControlledEditorOnChange,
} from '@monaco-editor/react'

import {editor as EditorAPI} from 'monaco-editor/esm/vs/editor/editor.api'

type Getter = () => string
type EditorInstance = EditorAPI.IStandaloneCodeEditor

interface TextEditorProps {
  value: string
  onChange: (value: string) => void
}

const options: EditorAPI.IEditorOptions = {
  fontSize: 20,
  fontWeight: 'JetBrains Mono',
}

export function TextEditor(props: TextEditorProps) {
  const editorRef = useRef<EditorInstance>()

  const handleMount: EditorDidMount = (getter, editor) => {
    editorRef.current = editor
  }
  const handleChange: ControlledEditorOnChange = (e, value) => {
    if (value) props.onChange(value)
  }

  return (
    <ControlledEditor
      value={props.value}
      height="100vh"
      language="yaml"
      editorDidMount={handleMount}
      onChange={handleChange}
      theme="dark"
      options={options}
    />
  )
}
