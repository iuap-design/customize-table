/**
 * App模块
 */

import React, { Component } from 'react';
import { Col, Row } from 'tinper-bee';
import Grid from 'bee-complex-grid';
import SidebarMenu from '../SidebarMenu';

import 'bee-complex-grid/build/Grid.css';
import './index.less';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps, nextState) {
        if (prevProps.scroll !== this.props.scroll) {
            this.refs.Grid.forceUpdate();
        }
        return true
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.columns !== this.props.columns) {
            this.refs.Grid.resetColumns(nextProps.columns.slice())
        }
    }

    render() {
        let {
            columns,
            data,
            nodata,
            bordered,
            zebraCrossing, //隔行换色
            loading,
            draggable,
            dragborder,
            rowDraggAble,
            showHeaderMenu,
            showFilterMenu,
            columnFilterAble,
            showHeader,
            bodyDisplayInRow,
            height,
            heightTakeEffect,
            headerHeight,
            headerHeightTakeEffect,
            sizeTakeEffect,
            size,
            titleTakeEffect,
            title,
            scroll = {},
        } = this.props;
        let paginationObj = {
            items:10,//一页显示多少条
            total:100,//总共多少条、
            freshData:this.freshData,//点击下一页刷新的数据
            onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
            showJump:false,
            noBorder:true,
            horizontalPosition:'center'
        }
        return (
            <div className="app-wrap">
                <Row>
                    <Col md={2} xs={2} sm={12}>
                        <SidebarMenu />
                    </Col>
                    <Col md={10} xs={10} sm={12}>
                        <Grid
                            ref={'Grid'}
                            className={zebraCrossing ? 'zebra-table' : ''}
                            columns={columns.slice()}
                            data={!nodata ? data : []}
                            bordered={bordered}
                            loading={loading}
                            paginationObj={paginationObj}
                            draggable={draggable}
                            dragborder={dragborder}
                            rowDraggAble={rowDraggAble}
                            showHeaderMenu={showHeaderMenu}
                            showFilterMenu={showFilterMenu}
                            columnFilterAble={columnFilterAble}
                            showHeader={showHeader}
                            bodyDisplayInRow={bodyDisplayInRow}
                            height={heightTakeEffect ? height : undefined}
                            headerHeight={headerHeightTakeEffect ? headerHeight : undefined}
                            size={sizeTakeEffect ? size : undefined}
                            title={titleTakeEffect ? () => <span>{title}</span> : undefined}
                            scroll={scroll}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
