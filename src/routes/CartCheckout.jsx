import React from 'react';
import { enquireScreen } from 'enquire-js';
import { connect } from 'dva';
import { Row, Col, Breadcrumb, Icon, InputNumber, Button, Table, Tooltip, Popconfirm } from 'antd';

import { shuffle, numberWithDot } from '../utils/util';
import Nav from './Home/Nav';
import Footer from './Home/Footer';
import ProductRelated from './Product/ProductRelated';
import FormDangky from './Home/FormDangky';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class CartCheckout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
            list: this.buildListOrder(props.list),
            totalRevenue: this.getTotalRevenue(props.list),
        };
    }

    buildListOrder = (list) => {
        list.map((item, index) => {
            item.revenue = numberWithDot(item.quantity * item.giaKm * 1000);
            item.key = index;
        });
        return list;
    }

    componentDidMount() {
        document.title = 'Gio hang';
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
    }

    handleCheckout = (values) => {
        const { list, totalRevenue } = this.state;
        const { dispatch } = this.props;
        
        const products = list.map(item => {
            return `(${item.quantity}) ${item.tenSp}`;
        });

        const data = {
            "entry.1545390167"  : values.name,
            "entry.1754734183"  : values.phone,
            "entry.646369243"   : values.email,
            "entry.1732211460"  : products.join(';'),
            "entry.227536673"   : `${totalRevenue}đ`,
            "entry.1832057127"  : values.address,
            "entry.1662075176"  : values.remarks,
        }

        dispatch({ type: 'cart/checkout', payload: { data }});
    }

    handleQuantityChange = (record, value) => {
        const { list } = this.state;
        record.quantity = value;
        let index = _.findIndex(list, { id: record.id });
        list.splice(index, 1, record);
        this.setState({ list: this.buildListOrder(list), totalRevenue: this.getTotalRevenue(list) });
    }

    handleRemove = (record) => {
        const { list } = this.state;
        const { dispatch } = this.props;
        let index = _.findIndex(list, { id: record.id });
        list.splice(index, 1);
        this.setState({ list, totalRevenue: this.getTotalRevenue(list) });
        const cloneList = _.cloneDeep(list);
        cloneList.map(item => delete item.revenue);
        dispatch({ type: 'cart/add', payload: { list: cloneList } })
    }

    getTotalRevenue(list = []) {
        let initialValue = 0;
        let result = list.reduce(function (acc, cur) {
            return acc + parseInt(cur.revenue.split('.').join(''));
        }, initialValue);

        return numberWithDot(result);
    }

    renderMobileCartList() {
        const { list } = this.state;
        const columns = [
            {
                title: '',
                key: 'list',
                render: (t, r, i) => (
                    <div style={{ display: 'flex'}}>
                        <img src={r.img} alt={r.tenSp} style={{ width: 50, height: 50 }} />
                        <div style={{marginLeft: 10}}>
                            <a href={`#/san-pham/${r.slug}`} style={{ display: 'block' }}>{r.tenSp}</a>
                            <InputNumber style={{width: 60, marginRight: 8}} defaultValue={r.quantity} min={1} onChange={this.handleQuantityChange.bind(null, r)} />
                            <span>{` Đơn giá: ${r.giaKm}đ, `}</span>
                            <span style={{display: 'block'}}>{` Thành tiền: ${r.revenue}đ `}</span>
                        </div>
                        <div style={{position: 'absolute', top: 15, right: 15}}>

                            <Popconfirm title="Bạn có thực sự muốn xóa sản phẩm này không?" onConfirm={this.handleRemove.bind(null, r)} placement="topRight" okText="Có" cancelText="Không" > 
                                <Icon type="delete" style={{ fontSize: 16, cursor: 'pointer', color: '#ef3000' }} />
                            </Popconfirm>
                        </div>
                    </div>
                )
            }
        ];
        return (
            <Table 
                dataSource={list} 
                columns={columns}
                size="small"
                showHeader={false}
            />
        )
    }

    render() {
        const { list, isMobile } = this.state;
        const columns = [
            {
                title: 'STT',
                key: 'stt',
                render: (text, record, index) => <span>{`${index + 1}`}</span>
            }, 
            {
                title: 'Tên sản phẩm',
                dataIndex: 'tenSp',
                key: 'tenSp',
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={record.img} alt={record.tenSp} style={{ width: 70, height: 70 }} />
                        <span style={{ marginLeft: 15 }}>{record.tenSp}</span>
                    </div>
                )
            }, 
            {
                title: 'Số lượng',
                dataIndex: 'quantity',
                key: 'quantity',
                render: (text, record) => <InputNumber defaultValue={record.quantity} min={1} onChange={this.handleQuantityChange.bind(null, record)} />
            }, 
            {
                title: 'Đơn giá',
                dataIndex: 'giaKm',
                key: 'giaKm',
                render: text => <span>{`${text}đ`}</span>
            }, 
            {
                title: 'Thành tiền',
                dataIndex: 'revenue',
                key: 'revenue',
                render: text => <span>{`${text}đ`}</span>
            },
            {
                title: '',
                key: 'action',
                render: (text, record) => <Tooltip title="Xóa sản phẩm" placement="leftBottom"> <span onClick={this.handleRemove.bind(null, record)}><Icon type="delete" style={{ fontSize: 16, cursor: 'pointer', color: '#ef3000' }} /></span></Tooltip>
            }
        ];

        return (
            <div className="templates-wrapper">
                <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} />
                <div className="cart-detail-wrapper" style={{ maxWidth: 960, margin: '15px auto', padding: 15 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Trang chủ </a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="#/gio-hang">Giỏ hàng </a></Breadcrumb.Item>
                        <Breadcrumb.Item>Thông tin giỏ hàng </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="cart-wrapper">
                        {
                            list && list.length ? 
                             isMobile? 
                                this.renderMobileCartList()
                                :<Table rowKey={record => record.uid} dataSource={list} columns={columns} pagination={false} style={{ marginTop: 15, marginBottom: 15 }} />
                            : <p style={{textAlign: 'center', padding: 40 }}>Giỏ hàng trống!</p>
                        }
                    </Row>
                    <Row>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <a href="#/san-pham" style={{ marginTop: 8 }}><Icon type="shopping-cart" style={{ fontSize: 16, marginRight: 4 }} /> Tiếp tục mua sắm </a>
                            <p style={{ fontSize: 25, textAlign: 'right' }}>
                                {`Tổng cộng: ${this.getTotalRevenue(list)} đ`}
                            </p>
                        </div>
                    </Row>
                    <Row style={{ padding: '40px 20px 20px', margin: 20, border: '1px solid #ececec' }}>
                        <Col span={20}>
                            <FormDangky isCheckout={true} onCheckout={ values => this.handleCheckout(values)} disabledSubmit={ list && list.length? false: true }/>
                        </Col>
                    </Row>

                </div>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cart } = state;
    const list = cart.list || [];
    return {
        list
    }
}

export default connect(mapStateToProps)(CartCheckout);