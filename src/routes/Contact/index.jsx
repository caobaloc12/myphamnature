import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Row, Col } from 'antd';

import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import FormDangky from '../Home/FormDangky';
import '../Home/less/antMotion_style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
          };
    }

    componentDidMount() {
        document.title = "Liên hệ ";
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
        return (
            <div className="templates-wrapper">
                <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>
                <Row className="formDangky">
                    <Col xs={24} md={{ span: 12, offset: 6 }} >
                        <h2 style={{textAlign: 'center', marginBottom: 40}}>Vui lòng để lại thông tin và thuốc mà bạn quan tâm để được tư vấn </h2>
                        <FormDangky />
                    </Col>
                </Row>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
            </div>
        );
    }
}

export default Contact;