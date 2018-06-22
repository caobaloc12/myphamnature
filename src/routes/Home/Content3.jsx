import React from 'react';
import PropTypes from 'prop-types';
import FormDangky from './FormDangky';
import { Row, Col } from 'antd';
import '../Home/less/antMotion_style.less';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMobile;
    return (
        <Row className="formDangky">
            <Col xs={24} md={{ span: 12, offset: 6 }} >
                <h2 style={{textAlign: 'center', marginBottom: 40}}>Vui lòng để lại thông tin và thuốc mà bạn quan tâm để được tư vấn </h2>
               <FormDangky />
            </Col>
        </Row>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'dangkyTuvan',
};

export default Content;
