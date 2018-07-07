import React from 'react';
import { enquireScreen } from 'enquire-js';
import MetaTags from 'react-meta-tags';
import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';
import Cart from '../Cart';

import './less/antMotion_style.less';
import ogImg from '../../assets/ogImg.jpg';

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
      <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} />,
      <Content0 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile} />,
      <Content1 id="content_1_0" key="content_1_0" isMobile={this.state.isMobile} />,
      <Content2 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile} />,
      <Content3 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile} />,
      <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile} />,
    ];
    return (
      <div className="templates-wrapper">
        <MetaTags>
          <title>Mỹ phẩm I'm Nature - Vẻ đẹp thật sự đến từ thiên nhiên</title>
          <meta name="description" content="Mỹ phẩm I'm Nature - 100% Thiên Nhiên - Cam kết chất lượng - Giá cả phải chăng - Không tác dụng phụ. MUA NGAY!" />
          <meta property="og:title" content="Mỹ phẩm I'm Nature - Vẻ đẹp thật sự đến từ thiên nhiên" />
          <meta property="og:image" content={ogImg} />
        </MetaTags>
        <Cart />
        {this.state.show && children}
      </div>

    );
  }
}
