import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Icon, Tooltip } from 'antd';

function mapStateToProps(state) {
    const { cart: { list } } = state;
    return {
        list
    };
}

class Cart extends Component {
    render() {
        const { list } = this.props;
        return (
            <Tooltip title="Giỏ hàng" placement="leftBottom">
                <div style={{position: 'fixed', right: 25, top: 18, zIndex: 980}}>
                    <a href="#/gio-hang">
                    <Icon style={{ fontSize: 28 }} type="shopping-cart" /><Badge count={list.length} style={{marginTop: -10, marginLeft: 5}} />
                    </a>
                </div>
            </Tooltip>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cart);