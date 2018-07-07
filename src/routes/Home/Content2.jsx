import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

import data from '../../data';
import ProductImages from '../Product/ProductImages';
import ProductItem from '../Product/ProductItem';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content2',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={ProductImages[item.id]} height="100%" /></span>
        <p>
          <a href={`/san-pham/${item.slug}`}>{item.tenSp}</a>
        </p>
      </div>
    </li>);
  }

  getMobileChildren = (item, index) => {
    return (
      <Col key={index} xs={{ span: 24 }}>
          <a href={`/san-pham/${item.slug}`}>
              <Card title={null} className="product-item">
                  <img src={item.img} alt={item.tenSp} />
                  <div className="content">
                      <p className="name">{item.tenSp}</p>
                  </div>
              </Card>
          </a>
      </Col>
    )
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    const childrenToRender = data.map(this.getChildrenToRender);

    return (
      <div
        {...props}
        className="content-template-wrapper content2-wrapper"
      >
        <div
          className={`content-template ${props.className}`}
        >
          <h1
            id={`${props.id}-title`}
          >
            SẢN PHẨM NỔI BẬT 
          </h1>
          <p
            id={`${props.id}-content`}
          >
            Chiết xuất 100% từ thiên nhiên 
          </p>
          {
            isMobile?
            <Row key="mobile" id={`${props.id}-mobile`} className={`${props.id}-mobile`} >
              { data.map((item, index) => {
                return (
                  <Col key={index} xs={{ span: 24 }}>
                      <ProductItem item={item} />
                  </Col>
                )
                }) 
              }
            </Row>
          :
          <ul
            className={`${props.className}-img-wrapper`}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </ul>
          }
        </div>
      </div>
    );
  }
}


export default Content;
