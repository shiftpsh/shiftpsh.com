import { Node } from 'unist-builder'
import { visit } from 'unist-util-visit'

const extractText = (source: string, start: number, end: number) => {
  const startLine = source.slice(0, start).split('\n')
  const endLine = source.slice(0, end).split('\n')

  return {
    type: 'text',
    value: source.slice(start, end),
    position: {
      start: {
        line: startLine.length,
        column: startLine[startLine.length - 1].length + 1,
      },
      end: {
        line: endLine.length,
        column: endLine[endLine.length - 1].length + 1,
      },
    },
  }
}

const labelPlugin = () => {
  const transformer = (tree: Node) => {
    return visit(tree, 'text', (node, position, parent) => {
      const LabelRegex = /\{\{[^{}]+\}\}/g

      const value = node.value as string
      const siblings = []

      let lastIndex = 0
      let match

      while ((match = LabelRegex.exec(value)) !== null) {
        const matchedValue = match[0]

        if (match.index !== lastIndex) {
          siblings.push(extractText(value, lastIndex, match.index))
        }

        siblings.push({
          type: 'shiftLabel',
          value: matchedValue.slice(2, matchedValue.length - 2),
        })

        lastIndex = match.index + matchedValue.length
      }

      if (lastIndex !== value.length) {
        const text = extractText(value, lastIndex, value.length)
        siblings.push(text)
      }

      if (parent !== null && position !== null) {
        const last = parent.children.slice(position + 1)
        parent.children = parent.children.slice(0, position)
        parent.children = parent.children.concat(siblings)
        parent.children = parent.children.concat(last)
      }
    })
  }
  return transformer
}

export default labelPlugin
