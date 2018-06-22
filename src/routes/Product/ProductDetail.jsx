import React from 'react';
import { enquireScreen } from 'enquire-js';
import ReactImageZoom from 'react-image-zoom';
import { Row, Col, Breadcrumb, Icon, InputNumber, Button, Message, Modal } from 'antd';
import $ from 'jquery';

import { getDiscountPercent, shuffle } from '../../utils/util';
import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import PurchaseModal from './PurchaseModal';
import ProductRelated from './ProductRelated';
import data from '../../data';
import './product.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
            quantity: 1,
        };
    }

    componentDidMount() {
        document.title = this.props.product.tenSp;
        window.scrollTo(0, 0);
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

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '115517331888071',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use version 2.1
            });
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidUpdate() {
        FB && FB.XFBML.parse();
    }

    componentWillReceiveProps({ product }) {
        document.title = product.tenSp;
        window.scrollTo(0, 0);
    }

    handleInputChange = (value) => {
        this.setState({ quantity: value });
    }

    handlePurchase = (values) => {
        const url = "https://docs.google.com/forms/d/e/1FAIpQLSeB9fimEskgBHOHa7rB7ci7ePgM-8mHCfl66t5l9N4sLczF4g/formResponse";
        const product = data.filter(item => item.id === values.product);

        const postData = {
            "entry.1545390167": values.name, 
            "entry.1754734183": values.phone,
            "entry.646369243": values.email,
            "entry.1732211460": product[0].tenSp,
            "entry.1832057127": values.address,
            "entry.227536673": values.quantity,
            "entry.1662075176": values.note, 
        }

        $.ajax({
            url: url,
            method: "POST",
            dataType: "xml",
            data: postData,
            statusCode: {
                0: () => {
                    Modal.success({
                        title: "Đặt hàng thành công",
                        okText: "OK",
                        content: (
                            <p>
                                Cảm ơn bạn đã đặt hàng của chúng tôi! Chúng tôi sẽ gọi điện tư vấn cho bạn trong thời gian sớm nhất!
                            </p>
                        ),
                        onOk() {
                            console.log('ok');
                        }
                    })
                },
                200: () => {
                    Modal.success({
                        title: "Đặt hàng thành công",
                        okText: "OK",
                        content: (
                            <p>
                                Cảm ơn bạn đã đặt hàng của chúng tôi! Chúng tôi sẽ gọi điện tư vấn cho bạn trong thời gian sớm nhất!
                            </p>
                        ),
                        onOk() {
                            console.log('ok');
                        }
                    })
                }
            }
        })
        
    }

    renderChildren = (data) => {
        const content = data.split(/\n/).filter(item => item.trim());
        return content.map((item, index) => {
            return <p key={index}>{item}</p>
        })
    }

    renderThanhphan = (data) => {
        const content = data.split(/\n/).filter(item => item.trim());
        return content.map((item, index) => <li key={index}>{item}</li>);
    }

    render() {
        const { product } = this.props;
        const zoomImgDefaultProps = { width: 250, height: 250, zoomWidth: 300, img: product.img };

        return (
            <div className="templates-wrapper">
                <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>
                <div className="product-detail-wrapper">
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Trang chủ </a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="#/san-pham">Sản phẩm </a></Breadcrumb.Item>
                        <Breadcrumb.Item>{product.tenSp}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="product-detail-overview">
                        <Col xs={{ span: 24 }} md={{ span: 10 }} className="image-wrapper">
                            {
                                isMobile ?
                                <div className="product-img-sm">
                                    <img src={product.img} alt={product.tenSp}/>
                                </div>
                                :
                                <div className="zoom-in-img">
                                    <ReactImageZoom {...zoomImgDefaultProps} />
                                </div>
                             }
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 14 }} className="overview-wrapper">
                            <h4 className="product-name">{product.tenSp}</h4>
                            <h1 className="product-price">
                                {`${product.giaKm}${product.currency}`} 
                                <span style={{ textDecoration: 'line-through' }}>
                                    {`${product.giaGoc}${product.currency}`}
                                </span>
                                <span style={{ color: '#555' }}>
                                    {`-${getDiscountPercent(product.giaGoc, product.giaKm)}%`}
                                </span>
                            </h1>
                            <ul>
                                <li><Icon type="check" />Miễn phí vận chuyển cho đơn hàng có giá trị từ 300.000đ</li>
                                <li><Icon type="check" />Giảm 20.000đ khi chia sẻ sản phẩm lên trang Facebook, Zalo cá nhân</li>
                                <li><Icon type="check" />Giao hàng 12h nội thành TP. HCM</li>
                            </ul>
                            <InputNumber min={1} max={100} defaultValue={1} size="large" onChange={this.handleInputChange} />
                            <PurchaseModal onOk={this.handlePurchase} productId={product.id} quantity={this.state.quantity} >
                                <Button className="btn-purchase" size="large">ĐẶT MUA</Button>
                            </PurchaseModal>
                        </Col>
                    </Row>
                    <Row className="product-detail-fullinfo">
                        <Col>
                            <p><b>Mô tả sản phẩm </b></p>
                            { this.renderChildren(product.mota) }

                            <p><b>Thành phần </b></p>
                            <ul>
                                { this.renderThanhphan(product.thanhphan) }
                            </ul>
                            
                            <p><b>Hướng dẫn sử dụng </b></p>
                            { this.renderChildren(product.huongdanSd) }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <div className="fb-comments" data-href="https://www.facebook.com/cna.net.au/" data-numposts="10" width="100%"></div>
                            </div>
                        </Col> 
                    </Row>
                    <Row>
                        <ProductRelated list={shuffle(data, 4)} />
                    </Row>
                </div>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
            </div>
        );
    }
}

export default ProductDetail;