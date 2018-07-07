import React from 'react';
import { Card } from 'antd';
import { getDiscountPercent } from '../../utils/util';

const ProductItem = ({ item }) => {
    return (
        <a href={`/san-pham/${item.slug}`}>
            <Card title={null} className="product-item">
                <img src={item.img} alt={item.tenSp} />
                <div className="content">
                    <p className="name">{item.tenSp}</p>
                    <div className="price">
                        <p className="first-line">{`${item.giaKm}${item.currency}`}</p>
                        <p className="second-line">
                            <span className="line-through">{`${item.giaGoc}${item.currency}`}</span>
                            <span className="discount-percent">{`-${getDiscountPercent(item.giaGoc, item.giaKm)}%`}</span>
                        </p>
                    </div>
                </div>
            </Card>
        </a>
    )
}

export default ProductItem;