import React from 'react';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import prodImg1 from '../../assets/dau-goi.png';
import prodImg2 from '../../assets/dau-xa.png';
import prodImg3 from '../../assets/ddvspn.png';
import prodImg4 from '../../assets/kem-boi-da-cho-be.jpg';
import prodImg5 from '../../assets/mat-na.jpg';
import prodImg6 from '../../assets/muoi-tam-im-nature.png';
import prodImg7 from '../../assets/sua-rua-mat.png';
import prodImg8 from '../../assets/sua-tam-cho-be.png';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <p>
          <a href={`#/${item.link}`}>{item.content}</a>
        </p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMobile) => {
    const index = e.index;
    const delay = isMobile ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const dataArray = [
      {img: prodImg1, content: 'Dầu gội ', link: 'dau-goi'},
      {img: prodImg2, content: 'Dầu xả ', link: 'dau-xa'},
      {img: prodImg3, content: 'Dung dịch vệ sinh phụ nữ ', link: 'dung-dich-ve-sinh'},
      {img: prodImg4, content: 'Kem bôi da cho bé ', link: 'kem-boi-da-cho-be'},
      {img: prodImg5, content: 'Mặt nạ ', link: 'mat-na'},
      {img: prodImg6, content: 'Muối tắm ', link: 'muoi-tam'},
      {img: prodImg7, content: 'Sữa rửa mặt ', link: 'sua-rua-mat'},
      {img: prodImg8, content: 'Sữa tắm cho bé ', link: 'sua-tam-cho-be'}
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            SẢN PHẨM NỔI BẬT 
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            Chiết xuất 100% từ thiên nhiên 
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMobile)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
