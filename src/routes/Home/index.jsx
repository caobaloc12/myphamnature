import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Collapse } from 'antd';
import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';
const Panel = Collapse.Panel;

import './less/antMotion_style.less';
import Cart from '../Cart';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    } 
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" />,
      <Content0 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile}/>,
      <Content1 id="content_1_0" key="content_1_0" isMobile={this.state.isMobile}/>,
      <Content2 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile}/>,
      <Content3 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>,
    ];
    return (
      <div className="templates-wrapper">
        <Cart />
        {this.state.show && children}
      </div>

    );
  }
}
