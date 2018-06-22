import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import { getDiscountPercent } from '../../utils/util';
import ProductItem from './ProductItem';

const ProductRelated = ({ list, className }) => {
    return (
        <Col className={className}>
            <Row gutter={16} className="product-related-inner">
                <h2 style={{marginTop: 30, marginBottom: 20}}>Sản phẩm liên quan </h2>
                {   
                    list.length ?
                    list.map(item => (
                        <Col key={item.id} xs={{ span: 24 }} md={{ span: 6 }}>
                            <ProductItem item={item} />
                        </Col>
                    ))
                    : <p>Không có sản phẩm nào</p>
                }
            </Row>
        </Col>
    )
}

ProductRelated.defaultProps = {
    className: 'product-related',
    randomList: [],
}

ProductRelated.propTypes = {
    className: PropTypes.string,
    randomList: PropTypes.array
}

export default ProductRelated;