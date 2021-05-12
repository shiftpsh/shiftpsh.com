import Color from 'color'
import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import Article from '../Article'
import Label from '../Label'
import OuterLink from '../OuterLink'
import ProfileList from '../ProfileList'
import Subcaption, { Subsubcaption } from '../Subcaption'
import labelPlugin from './LabelPlugin'

interface Props {
  source: string
}

const MarkdownRenderer: React.FC<Props> = (props) => {
  const renderers = useMemo(
    () => ({
      h1: Subcaption,
      h2: Subsubcaption,
      p: Article,
      ul: ProfileList,
      a: OuterLink,
      shiftLabel: ({ value }: { value: string }) => {
        return <Label color={new Color('black')}>{value}</Label>
      },
    }),
    []
  )
  const plugins = useMemo(() => [labelPlugin], [])

  return (
    <ReactMarkdown
      renderers={renderers}
      plugins={plugins}
      source={props.source}
    />
  )
}

export default MarkdownRenderer
