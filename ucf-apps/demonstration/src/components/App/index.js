/**
 * App模块
 */

import React, { Component } from 'react';
import { Col, Row, Collapse, Checkbox ,Select, FormControl,Panel, Table } from 'tinper-bee';
import Grid from 'bee-complex-grid';
import SidebarMenu from '../SidebarMenu';
import treeData from './menuList';
import 'bee-complex-grid/build/Grid.css';
import './index.less';
import {actions} from "mirrorx";
const PanelGroup = Panel.PanelGroup;
const Option = Select.Option;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            propsList: [],
            matters: [],
            collapse: {},
            value: {
                showHeader: true,
                bodyDisplayInRow: false,
            },
            inputValue: {
                title: '自定义标题'
            },
            columns: [
                { title: "员工编号", dataIndex: "a", key: "a", width: 200, filterType: 'text' },
                { title: "员工姓名", dataIndex: "b", key: "b", width:200, filterType: 'text'},
                { title: "性别", dataIndex: "c", key: "c", width: 200, filterType: 'text'},
                { title: "部门", dataIndex: "d", key: "d", width: 200, filterType: "dropdown" },
                { title: "职级", dataIndex: "e", key: "e", width: 200, filterType: 'text' }
            ],
            data: [
                { a: "ASVAL_20190328ASVAL_20190328ASVAL_20190328ASVAL_20190328", b: "小张", c: "男", d: "财务二科", e: "M1", key: "1" },
                { a: "ASVAL_20190320", b: "小明", c: "男", d: "财务一科", e: "T1", key: "2" },
                { a: "ASVAL_20190312", b: "小红", c: "女", d: "财务一科", e: "T2", key: "3" },
                { a: "ASVAL_20190328", b: "小张", c: "男", d: "财务二科", e: "M1", key: "4" },
                { a: "ASVAL_20190320", b: "小明", c: "男", d: "财务一科", e: "T1", key: "5" },
                { a: "ASVAL_20190312", b: "小红", c: "女", d: "财务一科", e: "T2", key: "6" }
            ],
        }
    }
    // componentDidUpdate(prevProps, nextState) {
    //     if (prevProps.scroll !== this.props.scroll) {
    //         this.refs.Grid.forceUpdate();
    //     }
    //     return true
    // }
    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.columns !== this.props.columns) {
    //         this.refs.Grid.resetColumns(nextProps.columns.slice())
    //     }
    // }
    table = {
        'filterable':(checked) => {
            const columns = this.state.columns.slice();
            if (checked) {
                columns.map(item => {
                    item.filterDropdown = 'show';
                })
            } else {
                columns.map(item => {
                    item.filterDropdown = 'hide';
                })
            }
            this.setState({columns});
        },
    }
    columns = {
        'columns[i].width': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[i].width'];
            if (checked) {
                columns.map(item => {
                    item.width =  +value || '200px';
                })
            } else {
                columns.map(item => {
                    item.width =  '200px';
                })
            }
            this.setState({columns});
        },
        'columns[i].fixed': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[i].fixed'];
            if (checked) {
                columns[2].fixed =  value || undefined;
            } else {
                columns[2].fixed =  undefined;
            }
            this.setState({columns});
        },
        'columns[i].titleAlign': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[i].titleAlign'];
            if (checked) {
                columns.map(item => {
                    item.titleAlign =  value;
                })
            } else {
                columns.map(item => {
                    item.titleAlign =  undefined;
                })
            }
            this.setState({columns});
        },
        'columns[i].contentAlign': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[i].contentAlign'];
            if (checked) {
                columns.map(item => {
                    item.contentAlign =  value;
                })
            } else {
                columns.map(item => {
                    item.contentAlign =  undefined;
                })
            }
            this.setState({columns});
        },
        'columns[i].textAlign': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[i].textAlign'];
            if (checked) {
                columns.map(item => {
                    item.textAlign =  value;
                })
            } else {
                columns.map(item => {
                    item.textAlign =  undefined;
                })
            }
            this.setState({columns});
        },
    }
    checkedMiddleware(value, attribute) {
        const _this = this;
        typeof _this['table'][attribute] === 'function' &&  _this['table'][attribute](value);
    }
    inputMiddleware(value, attribute){
        const _this = this;
        typeof _this['columns'][attribute] === 'function' &&  _this['columns'][attribute](value);
    }
    getAllMatters() {
        const arr = [];
        const fun = (data) => {
            data.map(item => {
                if (this.state.value[item.attribute]) {
                    item.matters && arr.push(item.matters);
                }
                if(item.children) {
                    fun(item.children)
                }
            })
        };
        fun(treeData);
        this.setState({matters: arr});
    }
    checkboxChange(value, attribute) {
        this.checkedMiddleware(value, attribute);
        this.inputMiddleware(value, attribute);
        this.setState({value: {...this.state.value, [attribute]: !this.state.value[attribute]}}, () => {
            this.setState({propsList: Object.keys(this.state.value).filter(item => this.state.value[item])}, () => console.log(this.state));
            this.getAllMatters();
        });
    }
    collapseClick(i) {
        this.setState({collapse: {...this.state.collapse, [i] : !this.state.collapse[i]}})
    }
    formChange(e, attribute, type) {
        const value = type === 'input' ? e.target.value : e;
        this.setState({inputValue: {...this.state.inputValue, [attribute]: value}}, () => {
            this.inputMiddleware(value, attribute);
        });
    }
    getItemInput(item) {
        let node = null;
        switch (item.type) {
            case 'input' : node = <input value={this.state.inputValue[item.attribute]} onChange={(e)=>this.formChange(e, item.attribute, 'input')} />; break;
            case 'select' : node = (
                <Select
                    size='sm'
                    value={this.state.inputValue[item.attribute]}
                    onChange={(value) => this.formChange(value, item.attribute, 'select')}
                >
                    {
                        (item.options || []).map(it => <Option value={it.value}>{it.title}</Option>)
                    }
                </Select>
            ); break;
        }
        return node;
    }
    getCollapse(propsList) {
        const length = propsList.length;
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(
                <div key={propsList[i].key}>
                    <div onClick={() =>this.collapseClick(i)}>{propsList[i].title}</div>
                    <Collapse in={this.state.collapse[i + '']}>
                        <div>
                            {
                                propsList[i].children.map(item => {
                                    return (
                                        <span key={item.key}>
                                            <Checkbox checked={!!this.state.value[item.attribute]} onChange={(value) => this.checkboxChange(value, item.attribute)}>{item.title}</Checkbox>
                                            {
                                                item.type
                                                    ?
                                                <span style={{display: this.state.value[item.attribute] ? 'inline-block' : 'none', width: '60px'}}>
                                                    {
                                                        this.getItemInput(item)
                                                    }
                                                </span>
                                                    :
                                                null
                                            }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </Collapse>
                </div>
            )
        }
        return arr;
    }
    onFilterChange(key, val, condition) {
        window.alert(`key:${key}, value:${val}, condition:${condition}`);
    }
    onFilterClear(value) {
        window.alert(`key:${key}, value:${val}, condition:${condition}`);
    }
    render() {
        let paginationObj = {
            items:10,//一页显示多少条
            total:100,//总共多少条、
            freshData:this.freshData,//点击下一页刷新的数据
            onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
            showJump:false,
            noBorder:true,
            horizontalPosition:'center'
        }
        const scroll = {};
        this.state.value.scrollX ? scroll.x = 3200 : null;
        this.state.value.scrollY ? scroll.y = 200 : null;
        return (
            <div className="app-wrap">
                <Row>
                    <Col md={2} xs={2} sm={2} lg={2}>
                        <SidebarMenu />
                    </Col>
                    <Col md={8} xs={8} sm={8} lg={8}>
                        {
                            this.getCollapse(treeData)
                        }
                        <div style={{marginTop: 20}}>
                            <Grid
                                ref={'Grid'}
                                className={this.state.value.zebraCrossing ? 'zebra-table' : ''}
                                columns={this.state.columns.slice()}
                                data={this.state.value.emptyText ? [] : this.state.data}
                                bordered={this.state.value.bordered}
                                loading={this.state.value.loading}
                                paginationObj={paginationObj}
                                // draggable={draggable}
                                // dragborder={dragborder}
                                // rowDraggAble={rowDraggAble}
                                // showHeaderMenu={showHeaderMenu}
                                // showFilterMenu={showFilterMenu}
                                // columnFilterAble={columnFilterAble}
                                filterable={this.state.value.filterable}
                                filterDelay={this.state.value.filterDelay ? this.state.inputValue.filterDelay : undefined}
                                onFilterChange={this.onFilterChange}
                                onFilterClear={this.onFilterClear}
                                showHeader={this.state.value.showHeader}
                                showRowNum={this.state.value.showRowNum}
                                bodyDisplayInRow={this.state.value.bodyDisplayInRow}
                                emptyText={this.state.inputValue.emptyText ? () => this.state.inputValue.emptyText : undefined}
                                onRowClick={this.state.value.onRowClick ? (record, index) => window.alert(`index=>${index},record=>${JSON.stringify(record)}`) : undefined}
                                onRowDoubleClick={this.state.value.onRowDoubleClick ? (record, index) => window.alert(`index=>${index},record=>${JSON.stringify(record)}`) : undefined}
                                onRowHover={this.state.value.onRowHover ? (index, record) => window.alert(`index=>${index},record=>${JSON.stringify(record)}`) : undefined}
                                bodyStyle={this.state.value.bodyStyle ? {color: this.state.inputValue.bodyStyle} : undefined}
                                size={this.state.value.size ? this.state.inputValue.size : undefined}
                                height={this.state.value.height ? +this.state.inputValue.height : undefined}
                                headerHeight={this.state.value.headerHeight ? +this.state.inputValue.headerHeight : undefined}
                                title={this.state.value.title ? () => <span>{this.state.inputValue.title}</span> : undefined}
                                scroll={scroll}
                                headerScroll={this.state.value.headerScroll}
                                footerScroll={this.state.value.footerScroll}
                                resetScroll={this.state.value.resetScroll}
                            />
                        </div>
                    </Col>
                    <Col md={2} xs={2} sm={2} lg={2}>
                            <Panel header="已选择组合的属性">
                                <div>
                                    {
                                        this.state.propsList.length > 0
                                            ?
                                        this.state.propsList.map(item => <p>{item}</p>)
                                            :
                                        '暂无属性'
                                    }
                                </div>
                            </Panel>
                            <Panel header="已选择属性注意事项">
                                <div>
                                    {
                                        this.state.matters.length > 0
                                            ?
                                        this.state.matters.map(item => <p>{item}</p>)
                                            :
                                        '暂无注意事项'
                                    }
                                </div>
                            </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
