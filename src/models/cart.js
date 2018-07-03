import { Modal } from 'antd';
import $ from 'jquery';
const url = "https://docs.google.com/forms/d/e/1FAIpQLSeB9fimEskgBHOHa7rB7ci7ePgM-8mHCfl66t5l9N4sLczF4g/formResponse";

export default {

    namespace: 'cart',

    state: {
        list: [],
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname, query }) => {
                if (pathname === '/' || pathname === '/gio-hang' || pathname === '/san-pham' || pathname === '/lien-he') {
                    dispatch({ type: 'fetch', payload: {} });
                }
            });
        },
    },

    effects: {
        *fetch(action, { put }) {  // eslint-disable-line
            const list = JSON.parse(window.localStorage.getItem('orders')) || [];
            yield put({ type: 'save', payload: { list } });
        },
        *add({ payload }, { put }) {
            const { list } = payload;
            window.localStorage.setItem('orders', JSON.stringify(list));
            yield put({ type: 'reload' });
        },
        *checkout({ payload }, { put }) {
            const { data } = payload;
            $.ajax({
                url: url,
                method: "POST",
                dataType: "xml",
                data,
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
                                window.localStorage.setItem('orders', JSON.stringify([]));
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
                                window.localStorage.setItem('orders', JSON.stringify([]));
                            }
                        })
                    }
                }
            })
            yield put({ type: 'save', payload: { list: [] }});
        },
        *reload(action, { put }) {
            yield put({ type: 'fetch', payload: {} });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
