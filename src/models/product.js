
import * as productService from '../services/product';

export default {

  namespace: 'product',

  state: {
    list: [],
    product: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/san-pham') {
          dispatch({ type: 'fetch', payload: {} });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(productService.query);
      console.log(data);
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
