import React from 'react';
import { connect } from 'dva';
import { enquireScreen } from 'enquire-js';
import ReactImageZoom from 'react-image-zoom';
import { Row, Col, Breadcrumb, Icon, InputNumber, Button, Message, Modal } from 'antd';
import _ from 'lodash';
import { MetaTags } from 'react-meta-tags';

import { getDiscountPercent, shuffle } from '../../utils/util';
import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import ProductRelated from './ProductRelated';
import data from '../../data';
import './product.less';
import Cart from '../Cart';

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
            window.FB.init({
                appId      : '275065773064671',
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
            js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0&appId=275065773064671&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
    }

    componentDidUpdate() {
        window.FB && window.FB.XFBML.parse();
    }

    componentWillReceiveProps({ product }) {
        window.scrollTo(0, 0);
    }

    handleInputChange = (value) => {
        this.setState({ quantity: value });
    }

    handlePurchase = () => {
        const { dispatch, product, list } = this.props;
        const { quantity } = this.state;
        const index = _.findIndex(list, { id: product.id });
        if(index > -1) {
            list.splice(index, 1);
        }
        list.push({ quantity, ...product });
        dispatch({ type: 'cart/add', payload: { list }});
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
                <MetaTags>
                    <title>{product.tenSp}</title>
                    <meta name="description" content="Mỹ phẩm I'm Nature - 100% Thiên Nhiên - Cam kết chất lượng - Giá cả phải chăng - Không tác dụng phụ. MUA NGAY!" />
                    <meta property="og:title" content={product.tenSp}/>
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content={product.img} />
                </MetaTags>
                
                <Cart />
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
                            {/* <PurchaseModal onOk={this.handlePurchase} productId={product.id} quantity={this.state.quantity} >
                            </PurchaseModal> */}
                            <Button className="btn-purchase" size="large" onClick={this.handlePurchase}>THÊM VÀO GIỎ HÀNG </Button>
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
                                <div className="fb-comments" data-href={window.location.href} data-numposts="10" width="100%"></div>
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

function mapStateToProps(state) {
    const { cart } = state;
    return {
        list: cart.list
    }
}

export default connect(mapStateToProps)(ProductDetail);