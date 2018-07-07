import dva from 'dva';
// import createHistory from 'history/createBrowserHistory';
// import { message } from 'antd';
// import './index.css';

// 1. Initialize
const app = dva();

// const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
// const app = dva({
//   history: createHistory(),
//   onError(e) {
//     message.error(e.message, ERROR_MSG_DURATION);
//   },
// });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/cart'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
