/**
 * App模块
 */
import React, { Component } from 'react';
import moment from 'moment';
import { Col, Row, Collapse, Checkbox ,Select, Popover, Panel, Icon, Tree } from 'tinper-bee';
import Table from 'bee-table';
import Radio from 'bee-radio';
import singleSelect from "tinper-bee/lib/singleSelect.js";
import multiSelect from "tinper-bee/lib/multiSelect.js";
import sort from "tinper-bee/lib/sort.js";
import sum from "tinper-bee/lib/sum.js";
import dragColumn from "tinper-bee/lib/dragColumn.js";
import filterColumn from "tinper-bee/lib/filterColumn.js";
import bigData from "tinper-bee/lib/bigData.js";
import Grid from 'bee-complex-grid';
import {leftMenuData, treeData, GridData, MultiSelectData, SortData, SumData, FilterColumnData} from './menuList2';
import 'bee-complex-grid/build/Grid.css';
import './index.less';
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
const SingleSelectTable = singleSelect(Table, Radio);
const SumTable = sum(Table);
const SortTable = sort(Table, Icon);
const MultiSelectTable = multiSelect(Table, Checkbox);
const DragColumnTable = dragColumn(Table);
const FilterColumnTable = filterColumn(Table, Popover, Icon);
const BigDataTable = bigData(Table);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            setAll: {},
            propsList: [],
            matters: [],
            collapse: {},
            treeData: treeData.slice(),
            selectedKeys: ['0-0'],
            table: 'Table',
            value: {},
            checkAttr: {},
            inputValue: {},
            columns: [
                { title: "员工编号", dataIndex: "a", key: "a", width: 200, filterType: 'text'},
                { title: "入职时间", dataIndex: "time", key: "time", width: 200, filterType: 'text'},
                { title: "员工姓名", dataIndex: "b", key: "b", width:200, filterType: 'text'},
                { title: "性别", dataIndex: "c", key: "c", width: 200, filterType: 'text'},
                { title: "部门", dataIndex: "d", key: "d", width: 200, filterType: "dropdown" },
                { title: "职级", dataIndex: "e", key: "e", width: 200, filterType: 'text' },
                { title: "报销款", dataIndex: "amount", key: "amount", width: 200, filterType: 'text' }
            ],
            data: [
                { a: "ASVAL_20190328ASVAL_20190328ASVAL_20190328ASVAL_20190328", time: '2019-09-03', amount: 155, b: "小张", c: "男", d: "财务二科", e: "M1", key: "1" },
                { a: "ASVAL_20190320", time: '2019-09-04', b: "小明", c: "男", d: "财务一科", amount: 616, e: "T1", key: "2" },
                { a: "ASVAL_20190312", time: '2019-09-02', b: "小红", c: "女", d: "财务一科", amount: 140, e: "T2", key: "3" },
                { a: "ASVAL_20190328", time: '2019-09-03', b: "小张", c: "男", d: "财务二科", amount: 120, e: "M1", key: "4" },
                { a: "ASVAL_20190320", time: '2019-09-01', b: "小明", c: "男", d: "财务一科", amount: 370, e: "T1", key: "5" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "6" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "7" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "8" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "9" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "11" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "12" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "13" },
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "14" },
            ],
        }
    }
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
        'data[i]._checked':(checked) => {
            const data = this.state.data.slice();
            if (checked) {
                data[1]['_checked'] = true
            } else {
                data[1]['_checked'] = false
            }
            this.setState({data});
        },
        'data[i]._disabled':(checked) => {
            const data = this.state.data.slice();
            if (checked) {
                data[2]['_disabled'] = true
            } else {
                data[2]['_disabled'] = false
            }
            this.setState({data});
        },
    };
    columns = {
        'columns[i].width': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[i].width'];
            if (checked) {
                columns.map(item => {
                    item.width =  value + 'px' || '200px';
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
            this.setState({columns}, () => console.log(this.state.columns));
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
        'columns[i].sorter': (value) => {
            const columns = this.state.columns.slice();
            if (value) {
                columns[1].sorter = (a, b) => moment(a.time) - moment(b.time);
            } else {
                columns[1].sorter =  undefined;
            }
            this.setState({columns});
        },
        'columns[i].sorterClick': (value) => {
            const columns = this.state.columns.slice();
            if (value) {
                columns[1].sorterClick = (data, type) => window.alert('排序后的回调函数');
            } else {
                columns[1].sorterClick =  undefined;
            }
            this.setState({columns});
        },
        'columns[i].sumCol': (value) => {
            const columns = this.state.columns.slice();
            if (value) {
                columns[6].sumCol = true;
            } else {
                columns[6].sumCol =  undefined;
            }
            this.setState({columns});
        },
        'columns[i].ifshow': (value) => {
            const columns = this.state.columns.slice();
            if (value) {
                columns[1].ifshow = true;
            } else {
                columns[1].ifshow =  false;
            }
            this.setState({columns});
        },
    };
    componentDidMount() {
        this.getAllPropList();
        this.getAllMatters();
    }
    onSelect = (selected, attribute, set) => {
        const {setAll, value} = this.state;
        if (selected) {
            setAll[attribute] = set;
            value[attribute] = true;
        } else {
            setAll[attribute] = [];
            value[attribute] = false;
        }
        this.setState({
            setAll
        });
    };
    // onSelect = (selectedKeys, info) => {
    //     const { table, selectedKey } = info.node.props;
    //     if (selectedKey === this.state.selectedKeys[0]) {
    //         return
    //     }
    //     let stateTreeData  = treeData.slice();
    //     // if (table === 'Grid') {
    //     //     stateTreeData = treeData.concat(GridData)
    //     // }
    //     // if (table === 'multiSelectData') {
    //     //     stateTreeData = treeData.concat(multiSelectData)
    //     // }
    //     stateTreeData = treeData.concat(this.tableData[table.replace('Table', 'Data')] || []);
    //     this.setState({
    //         selectedKeys: [selectedKey],
    //         table,
    //         treeData: stateTreeData
    //     });
    // };
    checkedMiddleware(value, attribute) {
        const _this = this;
        typeof _this['table'][attribute] === 'function' &&  _this['table'][attribute](value);
        typeof _this['columns'][attribute] === 'function' &&  _this['columns'][attribute](value);
    }
    inputMiddleware(value, attribute){
        const _this = this;
        typeof _this['table'][attribute] === 'function' &&  _this['table'][attribute](value);
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
        fun(this.state.treeData);
        this.setState({matters: arr});
    }
    getAllPropList(){
        this.setState({propsList: Object.keys(this.state.value).filter(item => this.state.value[item])});
    }
    checkboxChange(value, attribute) {
        this.checkedMiddleware(value, attribute);
        this.inputMiddleware(value, attribute);
        this.setState({value: {...this.state.value, [attribute]: !this.state.value[attribute]}}, () => {
            this.getAllPropList();
            this.getAllMatters();
            this.tableRefresh()
        });
    }
    collapseClick(i) {
        this.setState({collapse: {...this.state.collapse, [i] : !this.state.collapse[i]}})
    }
    formChange(e, attribute, type) {
        const value = type === 'input' ? e.target.value : e;
        this.setState({inputValue: {...this.state.inputValue, [attribute]: value}}, () => {
            this.inputMiddleware(value, attribute);
            this.tableRefresh()
        });
    }
    getItemInput(item) {
        let node = null;
        switch (item.type) {
            case 'input' : node = <input style={{width: '80px', height: '20px'}} value={this.state.inputValue[item.key]} onChange={(e)=>this.formChange(e, item.key, 'input')} />; break;
            case 'select' : node = (
                <Select
                    size='sm'
                    style={{width: '80px'}}
                    value={this.state.inputValue[item.key]}
                    onChange={(value) => this.formChange(value, item.key, 'select')}
                >
                    {
                        (item.options || []).map(it => <Option value={it.value}>{it.title}</Option>)
                    }
                </Select>
            ); break;
        }
        return <p>{`${item.key}: `}{node}</p>;
    }
    getCollapse(propsList) {
        const length = propsList.length;
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(
                <div key={propsList[i].key} style={{marginBottom: '10px'}}>
                    <div style={{
                        background: '#fafafa',
                        padding: '12px 16px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        border: '1px solid #d9d9d9'
                    }} onClick={() =>this.collapseClick(i)}>
                        {
                            this.state.collapse[i]
                                ?
                            <Icon type={'angle-arrow-down'} className={'uf-arrow-down'}></Icon>
                                :
                            <Icon type={'angle-arrow-pointing-to-right'} className={'uf-arrow-right'}></Icon>
                        }
                        {propsList[i].title}
                    </div>
                    <Collapse in={this.state.collapse[i + '']}>
                        <Row style={{padding: '15px'}}>
                            {
                                propsList[i].children.map(item => {
                                    return (
                                        <Col style={{lineHeight: '30px'}} md={4} xs={4} sm={6} lg={4}>
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
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Collapse>
                </div>
            )
        }
        return arr;
    }
    // 过滤回调 start
    onFilterChange(key, val, condition) {
        window.alert(`key:${key}, value:${val}, condition:${condition}`);
    }
    onFilterClear(value) {
        window.alert(`key:${key}, value:${val}, condition:${condition}`);
    }
    //
    afterFilter = (optData,columns)=>{
        alert('列过滤后的回调函数')
    }
    tableRefresh() {
        this.setState({display: false}, () => setTimeout(() => this.setState({display: true}), 4))
    }
    render() {
        const scroll = {};
        const {data = [], checkAttr = {}, inputValue, value} = this.state;
        const columns = this.state.columns.slice();
        let paginationObj = {
            items:10,//一页显示多少条
            total:data.length,//总共多少条、
            freshData:this.freshData,//点击下一页刷新的数据
            onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
            showJump:false,
            noBorder:true,
            horizontalPosition:'center'
        };
        inputValue['scroll.x'] ? scroll.x = +inputValue['scroll.x'] : null;
        inputValue['scroll.y'] ? scroll.y = +inputValue['scroll.y'] : null;
        if (inputValue['columns[2].fixed']) {
            columns[2].fixed = inputValue['columns[2].fixed']
        }
        const props = {
            ref: 'Table',
            className: inputValue.className,
            columns: columns.slice(),
            data: inputValue.data !== 'none' ? this.state.data : [],
            bordered: inputValue.bordered,
            loading: inputValue.loading,
            emptyText: inputValue.emptyText ? () => this.state.inputValue.emptyText : undefined,
            paginationObj: value.paginationObj && inputValue.paginationObj ? paginationObj : 'none',
            showHeaderMenu: value.showHeaderMenu ? inputValue.showHeaderMenu : false,
            showRowNum: value.showRowNum ? inputValue.showRowNum : false,
            //
            autoCheckedByClickRows: value.autoCheckedByClickRows,
            sorterClick: value.sorterClick ? () => console.log(arguments) : undefined,
            sort: {mode: 'single'},
            afterFilter: value.afterFilter ? this.afterFilter : undefined,
            getSelectedDataFunc: value.getSelectedDataFunc
                ?
                (selectedList, record, index) => window.alert('所有选中行:' + JSON.stringify(selectedList) + '\n当前操作行:' + JSON.stringify(record))
                :
                undefined,
            filterable: value.filterable,
            filterDelay: value.filterDelay ? this.state.inputValue.filterDelay : undefined,
            onFilterChange: value.filterable ? this.onFilterChange : undefined,
            onFilterClear: value.filterable ? this.onFilterClear : undefined,
            showHeader: value.showHeader,

            bodyDisplayInRow: value.bodyDisplayInRow,
            bodyStyle: value.bodyStyle ? {color: this.state.inputValue.bodyStyle} : undefined,
            size: value.size ? this.state.inputValue.size : undefined,
            height: value.height ? +this.state.inputValue.height : undefined,
            headerHeight: value.headerHeight ? +this.state.inputValue.headerHeight : undefined,
            title: value.title ? () => <span>{this.state.inputValue.title}</span> : undefined,
            scroll: scroll,
            headerScroll: value.headerScroll,
            footerScroll: value.footerScroll,
            resetScroll: value.resetScroll,
            multiSelect: value.multiSelect ? {type: this.state.inputValue.multiSelect} : {type: 'checkbox'}
        }
        const viewProp = {}
        Object.keys(props).map(item => {
            if (props[item] !== undefined) {
                if (typeof props[item] === "function") {
                    viewProp[item] = 'this.' + item;
                } else if(item === 'columns') {
                    viewProp[item] = 'this.state.columns';
                } else if(item === 'data') {
                    viewProp[item] = 'this.state.data';
                } else {
                    viewProp[item] = JSON.stringify(props[item])
                }
            }
        })
        return (
            <div className="app-wrap" style={{background: '#ccc'}}>
                <div style={{
                    background: '#fff',
                    height: '50px'
                }}>
                    <div style={{
                        background: '#666',
                        color: '#fff',
                        height: '50px',
                        lineHeight: '50px',
                        fontSize: '18px',
                        width: '160px'
                    }}>
                        Grid组件演示器
                    </div>
                </div>
                <Row style={{margin: '10px auto',minHeight: 500}}>
                    <Col md={3} xs={3} sm={3} lg={3} style={{height: '100%', padding: 0}}>
                        <Panel header="功能选择">
                            <Row>
                            <Col md={6} xs={6} sm={6} lg={6}  style={{padding: '10px'}}>
                                {
                                    treeData.map(item => {
                                        return (
                                            <div style={{height: 40, lineHeight: '40px'}}>
                                                <Checkbox
                                                    checked={checkAttr[item.key]}
                                                    onChange={() => this.setState({checkAttr: {...checkAttr, [item.key] : !checkAttr[item.key]}})}
                                                >
                                                    {item.title}
                                                </Checkbox>
                                            </div>);
                                    })
                                }
                            </Col>
                            <Col md={6} xs={6} sm={6} lg={6} style={{ padding: '10px', height: '100%'}}>
                                {
                                    treeData.map(item => {
                                        if (this.state.checkAttr[item.key]) {
                                            return item.children.map(it => {
                                                return (<div style={{height: 30, lineHeight: '30px'}}>
                                                    <Checkbox
                                                        checked={value[it.attribute]}
                                                        onChange={(value) => this.onSelect(value, it.attribute, it.set)}
                                                    >
                                                        {it.title}
                                                    </Checkbox>
                                                </div>)
                                            })
                                        }
                                        return null;
                                    })
                                }
                            </Col>
                        </Row>
                        </Panel>
                    </Col>
                    <Col md={6} xs={6} sm={6} lg={6}>
                        {/*{*/}
                        {/*    this.getCollapse(this.state.treeData)*/}
                        {/*}*/}
                        <Panel header="Grid预览">
                            {
                                this.state.display ?  <Grid {...props} /> : null
                            }
                        </Panel>
                    </Col>
                    <Col md={3} xs={3} sm={3} lg={3} style={{height: '100%', padding: 0}}>
                        <Panel header="属性配置">
                            <div>
                                {
                                    Object.keys(this.state.setAll).map(item => this.state.setAll[item].map(it => this.getItemInput(it)))
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
