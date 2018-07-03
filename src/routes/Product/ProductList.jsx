import React from 'react';
import { Breadcrumb, Row, Col, Select } from 'antd';
import { enquireScreen } from 'enquire-js';
import data from '../../data';

import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import './product.less';
import ProductItem from './ProductItem';
import Cart from '../Cart';
const { Option } = Select;

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const categories = [
    { id: -1, name: 'tat-ca', text: 'Tất cả' },
    { id: 1, name: 'cham-soc-toc', text: 'Chăm sóc tóc' },
    { id: 2, name: 'cham-soc-da', text: 'Chăm sóc da' },
    { id: 3, name: 'dung-dich-ve-sinh', text: 'Dung dịch vệ sinh' },
    { id: 4, name: 'danh-cho-be', text: 'Dành cho bé' },
    { id: 5, name: 'danh-cho-me', text: 'Dành cho mẹ' },
    { id: 6, name: 'sua-tam', text: 'Sữa tắm' },
    { id: 7, name: 'san-pham-khac', text: 'Sản phẩm khác' }
];

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
            productList: props.list,
        };
    }

    componentDidMount() {
        document.title = "Sản phẩm"
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

    handleCategoryChange = (categoryId) => {
        if (categoryId === -1) {
            this.setState({ productList: data });
        } else {
            this.setState({
                productList: data.filter(product => product.category.indexOf(categoryId) > -1)
            });
        }
    }

    handleSelectChange = (value) => {
        this.handleCategoryChange(value);
    }

    renderCategoryMobile() {
        return (
            <Select defaultValue={categories[0].id} onChange={this.handleSelectChange} style={{ width: '100%', padding: '5px 15px' }}>
                {
                    categories.map((item, index) => <Option key={index} value={item.id} >{item.text}</Option>)
                }
            </Select>
        )
    }
    
    renderCategoryDesktop() {
        return (
            <ul className="categories">
                {
                    categories.map((item, index) => <li key={index} onClick={this.handleCategoryChange.bind(this, item.id)}><a href="javascript:;">{item.text}</a></li>)
                }
            </ul>
        )
    }

    render() {
        const { productList, isMobile } = this.state;

        return (
            <div className="templates-wrapper" style={{background: '#f2f2f2'}}>
                <Cart />
                <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} />
                <div className="product-list-wrapper">
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Trang chủ </a></Breadcrumb.Item>
                        <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={16}>
                        <Col xs={{ span: 24 }} md={{ span: 6 }} className="product-category">
                            <h4>Danh mục sản phẩm </h4>
                            {
                                isMobile ?
                                this.renderCategoryMobile()
                                :this.renderCategoryDesktop()
                            }
                            
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18}} className="product-list">
                            <Row gutter={16} className="product-list">
                                {   
                                    productList.length ?
                                    productList.map(item => (
                                        <Col key={item.id} xs={{ span: 24 }} md={{ span: 6 }}>
                                            <ProductItem item={item} />
                                        </Col>
                                    ))
                                    : <p>Không có sản phẩm nào</p>
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
            </div>
        );
    }
}

export default ProductList;