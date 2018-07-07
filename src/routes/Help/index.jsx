import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Row, Col, Steps, Card, Breadcrumb } from 'antd';
import MetaTags from 'react-meta-tags';
import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import Cart from '../Cart';
import '../Home/less/antMotion_style.less';
import ogImg from '../../assets/ogImg.jpg';
import acbImg from '../../assets/acb.png';
import vcbImg from '../../assets/vcb.png';

const { Step } = Steps;

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class Help extends React.Component {
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

    renderCardTitle = (text, img, style) => <div style={style.title}><img src={img} style={style.titleImg}/><span>{text}</span></div> 

    render() {
        const { isMobile } = this.state;
        const style = {
            title: {display: 'flex', alignItems: 'center'}, 
            titleImg: {height: 40, width: 'auto', marginRight: 10},
        };
        const acbTitle = this.renderCardTitle('Ngân hàng ACB', acbImg, style);
        const vcbTitle = this.renderCardTitle('Ngân hàng Vietcombank', vcbImg, style);
        
        return (
            <div className="templates-wrapper">
                <MetaTags>
                    <title>Hỗ trợ </title>
                    <meta name="description" content="Mỹ phẩm I'm Nature - 100% Thiên Nhiên - Cam kết chất lượng - Giá cả phải chăng - Không tác dụng phụ. MUA NGAY!" />
                    <meta property="og:title" content="Hỗ trợ" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content={ogImg} />
                </MetaTags>
                <Cart />
                <Nav id="nav_0_0" key="nav_0_0" isMobile={isMobile} />
                <Row id="mua-hang" style={{ maxWidth: 960, margin: '0 auto', padding: 15 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Trang chủ </a></Breadcrumb.Item>
                        <Breadcrumb.Item>Hỗ trợ</Breadcrumb.Item>
                    </Breadcrumb>
                    <Col xs={24} md={{ span: 12, offset: 6 }} >
                        <h2
                            style={{
                                textAlign: 'center',
                                marginTop: 30,
                                marginBottom: 30,
                                fontSize: isMobile ? 20 : 30
                            }}
                        >
                            HƯỚNG DẪN MUA HÀNG 
                        </h2>
                        <Steps direction="vertical" current={5}>
                            <Step title="Đến trang sản phẩm" description="Bấm vào 'Sản phẩm' trên thanh điều hướng để đi tới trang sản phẩm." />
                            <Step title="Chọn sản phẩm" description="Chọn sản phẩm mà bạn muốn mua." />
                            <Step title="Thêm vào giỏ hàng" description="Bấm vào 'Mua hàng' để thêm sản phẩm vào giỏ hàng của bạn." />
                            <Step title="Đến giỏ hàng" description="Bấm vào 'Giỏ hàng' để đi tới trang giỏ hàng." />
                            <Step title="Tiến hành đặt hàng" description="Xem lại sản phẩm bạn đã thêm, điền thông tin liên quan để tiến hành đặt hàng." />
                        </Steps>,
                    </Col>
                </Row>
                <Row gutter={16} id="bank-info">
                    <Col xs={24} md={{ span: 12, offset: 6 }} >
                        <h2
                            style={{
                                textAlign: 'center',
                                marginTop: 40,
                                marginBottom: 40,
                                marginLeft: isMobile ? 0 : 120,
                                fontSize: isMobile ? 20 : 30
                            }}
                        >
                            THÔNG TIN TÀI KHOẢN
                        </h2>
                    </Col>
                        
                    <Col xs={24} md={{ span: 6, offset: 6}}>
                        <Card 
                            title={acbTitle} 
                            style={{minHeight: 200, fontSize: 14}}
                        >
                            <p>Chi nhánh: Phòng giao dịch Tân Chánh Hiệp, Tp. HCM </p>
                            <p>Số tài khoản: 246 736 409</p>
                            <p>Người thụ hưởng: HÀ HƯƠNG GIANG</p>
                        </Card>
                    </Col>
                    <Col xs={24} md={{ span: 6}}>
                        <Card title={vcbTitle} style={{minHeight: 200, fontSize: 14}}>
                            <p>Chi nhánh Kỳ Đồng, Tp. HCM </p>
                            <p>Số tài khoản: 0721 000 592 453</p>
                            <p>Người thụ hưởng: HÀ HƯƠNG GIANG</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={{ span: 12, offset: 6}}>
                        <p style={{fontSize: 16, paddingTop: 40, paddingBottom: 40, textAlign: 'center'}}>Mọi thắc mắc Quý khách vui lòng gọi: <a href="tel:0974285268" style={{fontSize: 20}}>097 428 52 68</a> để được giải đáp.</p>
                    </Col>
                </Row>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile} />
            </div>
        );
    }
}

export default Help;