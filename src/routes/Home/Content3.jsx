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
      slidesToScroll: 1,
    };

    return (
        <div className={`${this.props.className}-slider`}>
            <h2 style={{textAlign: 'center', marginBottom: 40}}>Feedback </h2>
               <Slider {...settings} >
                <img src={FeedbackImg[0]} alt=""/>
                <img src={FeedbackImg[1]} alt=""/>
                <img src={FeedbackImg[2]} alt=""/>
                <img src={FeedbackImg[3]} alt=""/>
                <img src={FeedbackImg[4]} alt=""/>
                <img src={FeedbackImg[5]} alt=""/>
              </Slider>
        </div>
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
