import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const footerContent = { heading: 'Mỹ phẩm I\'m Nature', content: 'Chiết xuất 100% từ thiên nhiên ' };
    
    return (
    <div {...props} >
      <ul id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <h2>{footerContent.heading}</h2>
          <p>{footerContent.content}</p>
        </li>
        <li key="danhmuc">
          <h2>Danh mục</h2>
          <ul>
            <li><a href="">Dành cho bé </a></li>
            <li><a href="">Dành cho mẹ </a></li>
            <li><a href="">Chăm sóc tóc </a></li>
            <li><a href="">Chăm sóc da</a></li>
          </ul>
        </li>
        <li key="huongdan">
          <h2>Hướng dẫn </h2>
          <ul>
            <li><a href="">Hướng dẫn mua hàng  </a></li>
            <li><a href="">Hướng dẫn thanh toán  </a></li>
            <li><a href="">Chính sách đổi trả </a></li>
          </ul>
        </li>
        <li key="ketnoi">
          <h2>Kết nối với chúng tôi </h2>
          <ul>
            <li><a href=""><Icon type="facebook" /> </a></li>
            <li><a href=""><Icon type="skype" /> </a></li>
            <li><a href=""><Icon type="youtube" /></a></li>
          </ul>
        </li>
      </ul>
      <p
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          &copy; Bản quyền thuộc về I'm Nature | Cung cấp bởi Mỹ phẩm I'm Nature
        </span>
      </p>
    </div>);
  }
}

export default Footer;
