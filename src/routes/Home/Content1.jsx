import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import introImg1 from '../../assets/intro_content_image_1.png';
import introImg2 from '../../assets/intro_content_image_2.png';
import introImg3 from '../../assets/intro_content_image_3.png';
import introImg4 from '../../assets/intro_content_image_4.png';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content1',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const dataSource = [
      { icon: introImg1, title: '100% Thiên Nhiên', content: 'Toàn bộ sản phẩm của mỹ phẩm I\'m Nature hoàn toàn từ nguyên liệu tự nhiên' },
      { icon: introImg2, title: 'Cam kết chất lượng', content: 'Sản phẩm chất lượng cao là giá trị cốt lõi tạo nên thương hiệu của Im Nature' },
      { icon: introImg3, title: 'Giá cả phải chăng', content: 'Các sản phẩm I\'m Nature đều có giá thành khá hợp lý do có nguồn nguyên liệu tự nhiên, không chất hóa học.' },
      { icon: introImg4, title: 'Không tác dụng phụ', content: 'Dịu nhẹ với làn da và lành tính đối với các vùng da nhạy cảm, giúp nuôi dưỡng da từ bên trong' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <div
          className={`content-template ${props.className}`}
          // location={props.id}
        >
          <h1
            id={`${props.id}-title`}
          >
             GIỚI THIỆU I'M NATURE
             <p style={{textAlign: 'center', fontSize: 14, lineHeight: '1.6', padding: '4%'}}>
             "...Lấy cảm hứng từ những mùi hương thiên nhiên, mộc mạc, các sản phẩm của I'm Nature luôn chú trọng đến hương thơm nhẹ nhàng, tinh tế bên cạnh những cam kết về thành phần hoàn toàn tự nhiên . Các sản phẩm của I'm Nature hiện nay rất đa dạng, từ các sản phẩm chăm sóc da, dưỡng thể, dầu gội cho đến tinh dầu,dung dịch vệ sinh ..."
             </p>
          </h1>
          <ul
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </ul>
        </div>
      </div>
    );
  }
}

export default Content;
