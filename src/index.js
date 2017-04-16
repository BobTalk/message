import React from 'react';
import ReactDOM from 'react-dom';
require("bootstrap/dist/css/bootstrap.css");
import MessageBox from  './containers/MessageBox';
//本地缓存
/*let store = require("./config");*/
//数据库
let store = require("./interface");
ReactDOM.render(<MessageBox store={store}/>, document.querySelector("#app"));
