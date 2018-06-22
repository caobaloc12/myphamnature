import React from 'react';
import { Icon } from 'antd';
import img from '../assets/intro_image_0.png';

class NotFound extends React.PureComponent {

  componentDidMount() {
    document.title = "Mỹ phẩm I'm Nature"
  }

  render() {
    return (
      <div>
        <h4 style={{ display: 'block', fontSize: 20, marginTop: 50, marginBottom: 50, width: '100%', textAlign: 'center', color: '#78aa42' }}>
            Không tìm thấy trang mà bạn yêu cầu <br />
            <a href="/"><Icon type="home" /> Về trang chủ </a>
        </h4>
        <img src={img} alt="My pham I'm Nature" style={{ display: 'block', margin: '20px auto' }}/>
      </div>
    );
  }
}

export default NotFound;