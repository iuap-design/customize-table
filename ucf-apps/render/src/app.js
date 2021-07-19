/**
 * 入口、导入组件样式、渲染
 */

import React from 'react';
import { render } from 'mirrorx';
import mirror, { connect } from 'mirrorx';
import App from './App/index';
import model from './model'
// 数据和组件UI关联、绑定

mirror.model(model);
import './app.less';


render(<App />, document.querySelector("#app"));
