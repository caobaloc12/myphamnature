import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import MetaTags from 'react-meta-tags';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import Cart from '../Cart';
import FormDangky from '../Home/FormDangky';
import '../Home/less/antMotion_style.less';
import ogImg from '../../assets/ogImg.jpg';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const MapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqlGhruhUSQ4h3M0VxpRy3QIwh4aqvk3Y&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 10.8337769, lng: 106.6443918 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 10.8337769, lng: 106.6443918  }} onClick={props.onMarkerClick} />}
    </GoogleMap>
);

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
          };
    }

    componentDidMount() {
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
        const { isMobile } = this.state;
        const style={ icon: {fontSize: 24, marginLeft: 15, marginRight: 10,}}
        return (
            <div className="templates-wrapper">
                <MetaTags>
                    <title>Liên hệ</title>
                    <meta name="description" content="Mỹ phẩm I'm Nature - 100% Thiên Nhiên - Cam kết chất lượng - Giá cả phải chăng - Không tác dụng phụ. MUA NGAY!" />
                    <meta property="og:title" content="Liên hệe"/>
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content={ogImg} />
                </MetaTags>
                <Cart />
                <Nav id="nav_0_0" key="nav_0_0" isMobile={isMobile}/>
                <Row className="formDangky" style={{ maxWidth: 960, margin: '15px auto', padding: 15 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Trang chủ </a></Breadcrumb.Item>
                        <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
                    </Breadcrumb>
                    <Col xs={24} md={{ span: 12, offset: 6 }} >
                        <h2 
                            style={{
                                textAlign: 'center', 
                                marginTop: 40,
                                marginBottom: 40,
                                marginLeft: isMobile ? 0: 120,
                                fontSize: isMobile ? 20: 30
                            }}
                        >
                            LIÊN HỆ 
                        </h2>
                        <FormDangky />
                    </Col>
                    <div style={{ width: '100%', float: 'left', textAlign: 'center', fontSize: 16, paddingTop: 40, paddingBottom: 10 }}>
                        <span><Icon type="phone" style={style.icon} /> <a href="tel:0974285268">097 428 52 68</a></span>
                        <span><Icon type="mail" style={style.icon} /> <a href="mailto:lavender1491@gmail.com">lavender1491@gmail.com</a></span>
                        <span><Icon type="message" style={style.icon} /> <a href="https://m.me/1269417683194329">Messenger</a></span>
                        <p style={{textAlign: 'left', marginTop: 20}}> <Icon type="environment" style={style.icon}/>630 Phạm Văn Bạch, Tp. HCM</p>
                        <MapComponent isMarkerShown />
                    </div>
                </Row>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
            </div>
        );
    }
}

export default Contact;