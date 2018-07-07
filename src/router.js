import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import ProductList from './routes/Product/ProductList';
import ProductDetail from './routes/Product/ProductDetail';
import data from './data';
import NotFound from './routes/NotFound';
import CartCheckout from './routes/CartCheckout';
import Help from './routes/Help'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/gioi-thieu" exact component={About} />
        <Route path="/lien-he" exact component={Contact} />
        <Route path="/san-pham" exact component={() => <ProductList list={data} />} />
        <Route path="/san-pham/:slug" exact component={props => {
          const { match: { params: { slug } } } = props;
          const product = data.filter(item => item.slug === slug)[0];
          return <ProductDetail product={product}/>
        }} />
        <Route path="/gio-hang" exact component={CartCheckout} />
        <Route path="/huong-dan" component={Help} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
