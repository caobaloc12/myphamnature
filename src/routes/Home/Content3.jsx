import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Slider from "react-slick";
import FeedbackImg from './FeedbackImg';
import "../../../node_modules/slick-carousel//slick/slick-theme.css";
import '../../../node_modules/slick-carousel/slick/slick.css';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const settings = {
      infinite: true,
      dots: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    };

    return (
        <Row className={`${this.props.className}-slider`}>
          <Col span={18} offset={3}>
            <h2 style={{textAlign: 'center', marginBottom: 40, marginTop: 20}}>Khách hàng phản hồi </h2>
              <Slider {...settings} >
              {/* <img src={FeedbackImg[0]} alt=""/> */}
              {/* <img src={FeedbackImg[1]} alt=""/> */}
              <img src={FeedbackImg[2]} alt=""/>
              <img src={FeedbackImg[3]} alt=""/>
              <img src={FeedbackImg[4]} alt=""/>
              <img src={FeedbackImg[5]} alt=""/>
              <img src={FeedbackImg[6]} alt=""/>
              <img src={FeedbackImg[6]} alt=""/>
              <img src={FeedbackImg[7]} alt=""/>
              <img src={FeedbackImg[8]} alt=""/>
              <img src={FeedbackImg[9]} alt=""/>
              <img src={FeedbackImg[10]} alt=""/>
              <img src={FeedbackImg[11]} alt=""/>
              <img src={FeedbackImg[12]} alt=""/>
              <img src={FeedbackImg[13]} alt=""/>
              <img src={FeedbackImg[14]} alt=""/>
              <img src={FeedbackImg[15]} alt=""/>
              <img src={FeedbackImg[16]} alt=""/>
              <img src={FeedbackImg[17]} alt=""/>
              <img src={FeedbackImg[18]} alt=""/>
              <img src={FeedbackImg[19]} alt=""/>
            </Slider>
          </Col>
        </Row>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'feedback',
};

export default Content;
