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
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Wrapper from './Wrapper';
import Content from './Content';
import MenuBar from './MenuBar';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Tab from './Tab';
import Tabs from './Tabs';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSidebar: false
    };
  }

  openSidebar() {
    if (this.state.isOpenSidebar) {
      this.setState({
        isOpenSidebar: false
      });
    }
    else {
      this.setState({
        isOpenSidebar: true
      });
    }
  }

  render() {
    return (
      <Wrapper isOpenSidebar={this.state.isOpenSidebar}>
        <MenuBar openSidebar={this.openSidebar.bind(this)} />
        <Sidebar />
        <Content page>
          <Tabs>
            <Tab tabKey="tab_1" title="Workspace">
              <Content>
                <Toolbar />
                <Grid>
                  <Row>
                    <Col sm={12}>
                      <h4>Workspace</h4>
                    </Col>
                  </Row>
                </Grid>
              </Content>
            </Tab>
            <Tab tabKey="tab_2" title="Tab 2">
              <Content><h1>Sample Tab 2</h1></Content>
            </Tab>
            <Tab tabKey="tab_3" title="Tab 3">
              <Content><h1>Sample Tab 3</h1></Content>
            </Tab>
          </Tabs>
        </Content>
      </Wrapper>
    );
  }
}

export default Workspace;
