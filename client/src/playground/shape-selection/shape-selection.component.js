// @flow
import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import Shape from './shape.component'

type ShapeSelectionProps = {
  player: string,
  options: { kind: string }[],
  onShapeSelected: (selected: { kind: string }) => void
}

const renderShapes = (shapes, onSelected) => (
  <Container>
    {shapes.map(s => <Shape key={s.kind} kind={s.kind} onClick={onSelected} />)}
  </Container>
)

const ShapeSelection = (props: ShapeSelectionProps) => (
  <Container className="shape-selector" textAlign="center">
    <Header as="h2">It's your turn {props.player}</Header>
    {renderShapes(props.options, props.onShapeSelected)}
  </Container>
)

export default ShapeSelection
