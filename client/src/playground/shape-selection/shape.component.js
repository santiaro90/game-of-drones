// @flow
import React from 'react'
import { Icon } from 'semantic-ui-react'

type ShapeProps = {
  onClick: (shape: { kind: string }) => void,
  kind: string
}

const colors = {
  rock: 'red',
  paper: 'blue',
  scissors: 'green'
}

const Shape = (props: ShapeProps) => (
  <Icon
    color={colors[props.kind]}
    name={`hand ${props.kind}`}
    size="huge"
    onClick={() => props.onClick({ kind: props.kind })} />
)

export default Shape
