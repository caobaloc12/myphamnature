import React from 'react';
import PropTypes from 'prop-types';

import logoImg from '../../assets/logo_imnature.png';
class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  componentDidMount() {
    console.log('componentDidMount');
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0&appId=275065773064671&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    window.FB && window.FB.XFBML.parse();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    return (
      <div {...props} >
        <ul id={`${props.id}-ul`}>
          <li key="logo" id={`${props.id}-logo`}>
            <img src={logoImg} alt="My pham I'm Nature" style={{ height: 82 }}/>
            <p style={{fontSize: 12, paddingLeft: 12, marginTop: -12, color: '#848a3f'}}>Vẻ đẹp thật sự đến từ thiên nhiên</p>
          </li>
          <li key="danhmuc">
            <h2>Danh mục</h2>
            <ul>
              <li><a>Dành cho bé </a></li>
              <li><a>Dành cho mẹ </a></li>
              <li><a>Chăm sóc tóc </a></li>
              <li><a>Chăm sóc da</a></li>
            </ul>
          </li>
          <li key="huongdan">
            <h2>Hướng dẫn </h2>
            <ul>
              <li><a href="#/huong-dan#mua-hang">Hướng dẫn mua hàng  </a></li>
              <li><a href="#/huong-dan#bank-info">Thông tin tài khoản </a></li>
              <li><a>Chính sách đổi trả </a></li>
            </ul>
          </li>
          <li key="ketnoi" className="fbpage">
            <h2>Kết nối với chúng tôi </h2>
            <div className="fb-page" data-href="https://www.facebook.com/M&#x1ef9;-Ph&#x1ea9;m-Thi&#xea;n-Nhi&#xea;n-Im-Nature-1269417683194329" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-height="250"><blockquote cite="https://www.facebook.com/M&#x1ef9;-Ph&#x1ea9;m-Thi&#xea;n-Nhi&#xea;n-Im-Nature-1269417683194329" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/M&#x1ef9;-Ph&#x1ea9;m-Thi&#xea;n-Nhi&#xea;n-Im-Nature-1269417683194329">Mỹ Phẩm Thiên Nhiên-I&#039;m Nature</a></blockquote></div>
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
