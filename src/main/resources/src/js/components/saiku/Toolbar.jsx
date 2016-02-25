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
import _ from 'underscore';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import Icon from './Icon';
import ToolbarCollection from '../../collections/ToolbarCollection';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: ''
    };

    this._toolbarUI = new ToolbarCollection();

    autoBind(this, '_handleFetchUI');
  }

  componentDidMount() {
    this._toolbarUI.fetch({
      success: this._handleFetchUI
    });
  }

  _handleFetchUI(toolbarUI) {
    this.setState({
      models: toolbarUI.models[0]
    });
  }

  _renderNavItem(item, key) {
    let isItemVisible = !item.visible ? 'hidden' : '';

    return (
      <NavItem key={key} eventKey={key} className={isItemVisible} href="#">
        <Icon name={item.icon} />
      </NavItem>
    );
  }

  render() {
    let items = (this.state && !(_.isEmpty(this.state.models))) ?
      this.state.models.getItem() : [];

    return (
      <Navbar className="toolbar">
        {/*
        <Navbar.Header>
          <Navbar.Text>Cubes</Navbar.Text>
        </Navbar.Header>
        */}
        <Nav>
          {items.map(this._renderNavItem)}
        </Nav>
      </Navbar>
    );
  }
}

export default Toolbar;