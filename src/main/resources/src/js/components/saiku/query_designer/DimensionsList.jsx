/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React from 'react';
import autoBind from 'react-autobind';
import { DropTarget } from 'react-dnd';
import {
  Button,
  Panel
} from 'react-bootstrap';
import _ from 'underscore';
import Types from './Types';
import QueryState from './QueryState';

const dimensionsTarget = {
  drop(props, monitor) {
    QueryState.addDimension(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DimensionsList extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, '_renderDimension', '_renderDropArea');
  }

  render() {
    const {dimensions, connectDropTarget} = this.props;

    return connectDropTarget(
      <div className="drop-panel">
        <Panel header="Dimensions" bsStyle="success">
          {this._renderDropArea()}
          {dimensions.map(this._renderDimension)}
        </Panel>
      </div>
    );
  }

  _renderDimension(dimension, index) {
    return (
      <Button
        bsStyle="primary"
        key={'btn_dimension_' + dimension.id}
        onClick={(event) => this._deleteDimension(event, dimension)}
      >
        {dimension.name} ×
      </Button>
    );
  }

  _renderDropArea() {
    if (_.isEmpty(this.props.dimensions)) {
      const over = this.props.isOver ? 'over' : '';

      return (
        <div className={'drop-area ' + over}>
          Drop dimensions here
        </div>
      );
    }
  }

  _deleteDimension(event, dimension) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    QueryState.deleteDimension(dimension);
  }
}

DimensionsList.propTypes = {
  isOver: React.PropTypes.bool.isRequired,
  connectDropTarget: React.PropTypes.func.isRequired,
  dimensions: React.PropTypes.array
};

export default DropTarget(
  Types.DIMENSION,
  dimensionsTarget,
  collect
)(DimensionsList);
