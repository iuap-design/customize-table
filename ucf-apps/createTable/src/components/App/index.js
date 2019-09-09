/**
 * App模块
 */
import React, { Component } from 'react';
import moment from 'moment';
import { Col, Row, ColorPicker, Checkbox ,Select, Popover, Panel, Icon, Tree } from 'tinper-bee';
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
            treeData: treeData.slice(),
            selectedKeys: ['0-0'],
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
        'data[2]._disabled':(checked) => {
            const {inputValue} = this.state;
            if (checked) {
                this.onSelect(true, 'multiSelect', this.getSet('multiSelect'));
                this.setState({inputValue:{ ...inputValue, multiSelect : 'checkbox'}}, () => this.tableRefresh());
            }
        },
    };
    data = {
        'data[2]._disabled':(checked) => {
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
                    item.width =  isNaN(+value) ? '200px' : +value + 'px';
                })
            } else {
                columns.map(item => {
                    item.width =  '200px';
                })
            }
            this.setState({columns}, () => this.tableRefresh());
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
        'columns[2].fontColor': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[2].fontColor'];
            if (checked) {
                columns[2].fontColor = this.state.inputValue['columns[2].fontColor']
            } else {
                columns[2].fontColor = undefined
            }
            this.setState({columns});
        },
        'columns[2].bgColor': (value) => {
            const columns = this.state.columns.slice();
            const checked = this.state.value['columns[2].bgColor'];
            if (checked) {
                columns[2].bgColor = this.state.inputValue['columns[2].bgColor']
            } else {
                columns[2].bgColor = undefined
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
    getSet(attribute) {
        let set;
        treeData.map(item => item.children.map(it => {
            if(it.attribute === attribute) {
                set = it.set;
            }
        }));
        return set
    }
    onSelect = (selected, attribute, set) => {
        const {setAll, value, inputValue} = this.state;
        if (selected) {
            setAll[attribute] = set;
            value[attribute] = true;
        } else {
            setAll[attribute] = [];
            set.map(item => inputValue[item.key] = undefined);
            value[attribute] = false;
        }
        this.setState({
            setAll,
            value,
            inputValue
        }, () => {
            this.checkedMiddleware(selected, attribute);
            this.inputMiddleware(value, attribute);
        });
    };
    checkedMiddleware(value, attribute) {
        const _this = this;
        typeof _this['table'][attribute] === 'function' &&  _this['table'][attribute](value);
    }
    inputMiddleware(value, attribute){
        const _this = this;
        typeof _this['columns'][attribute] === 'function' &&  _this['columns'][attribute](value);
        typeof _this['data'][attribute] === 'function' &&  _this['data'][attribute](value);
    }
    formChange(e, attribute, type) {
        let value;
        switch (type) {
            case 'input' : value = e.target.value;break;
            case 'select' : value = e;break;
            case 'radio' : value = e;break;
            case 'colorPicker' : value = e.hex;break;
        }
        this.setState({inputValue: {...this.state.inputValue, [attribute]: value}}, () => {
            this.inputMiddleware(value, attribute);
            this.tableRefresh();
        });
    }
    getItemInput(item) {
        let node = null;
        switch (item.type) {
            case 'input' : node = (
                <div style={{paddingLeft: '12px', padding: '10px, 0'}}>
                    <span style={{marginRight: '12px'}}>{item.key}:</span>
                    <input
                        style={{width: '120px', height: '20px'}}
                        value={this.state.inputValue[item.key]}
                        onChange={(e)=>this.formChange(e, item.key, 'input')} />
                </div>
            );break;
            case 'select' : node = (
                <div style={{paddingLeft: '12px', padding: '10px, 0'}}>
                    <span style={{marginRight: '12px'}}>{item.key}:</span>
                    <Select
                        size='sm'
                        style={{width: '120px'}}
                        value={this.state.inputValue[item.key]}
                        onChange={(value) => this.formChange(value, item.key, 'select')}
                    >
                        {
                            (item.options || []).map(it => <Option value={it.value}>{it.title}</Option>)
                        }
                    </Select>
                </div>
            ); break;
            case 'radio' : node = (
                <div style={{paddingLeft: '12px', padding: '10px, 0'}}>
                    <span style={{marginRight: '12px'}}>{item.key}:</span>
                    <Radio.RadioGroup
                        value={this.state.inputValue[item.key]}
                        onChange={(value) => this.formChange(value, item.key, 'radio')}
                    >
                        {
                            (item.options || []).map(it => <Radio value={it.value}>{it.title}</Radio>)
                        }
                    </Radio.RadioGroup>
                </div>
            ); break;
            case 'colorPicker' : node = (
                <div>
                    <ColorPicker
                        style={{width: '120px', height: '20px'}}
                        value={this.state.inputValue[item.key]}
                        onChange={(e)=>this.formChange(e, item.key, 'colorPicker')}
                        label={item.key + ':'}
                    />
                </div>
            ); break;
        }
        return <div style={{color: '#212121', fontSize: '12px'}}>{node}</div>;
    }
    tableRefresh() {
        this.setState({display: false}, () => setTimeout(() => this.setState({display: true}), 4))
    }
    render() {
        const scroll = {};
        const clientHeight = document.body.clientHeight - 120;
        const {data = [], checkAttr = {}, inputValue, value, setAll = {}, display} = this.state;
        const columns = this.state.columns.slice();
        const paginationObj = {
            items:10,//一页显示多少条
            total:data.length,//总共多少条、
            freshData:this.freshData,//点击下一页刷新的数据
            onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
            showJump:false,
            noBorder:true,
            horizontalPosition:'center'
        };
        const toolBtns = [{
            value:'新增',
            onClick:this.addData,
            bordered:false,
            colors:'primary'
        },{
            value:'导出',
            iconType:'uf-search',
            onClick:this.export
        },{
            value:'上传',
            iconType:'uf-cloud-up',
        },{
            value:'批量操作',
            onClick:this.dispatchOpt,
            children:[
                {
                    value:'修改',
                    onClick:this.dispatchUpdate
                },{
                    value:'删除',
                    onClick:this.dispatchDel
                }
            ]
        },{
            iconType:'uf-copy',
        }]
        inputValue['scroll.x'] ? scroll.x = +inputValue['scroll.x'] : null;
        inputValue['scroll.y'] ? scroll.y = +inputValue['scroll.y'] : null;
        if (inputValue['columns[2].fixed']) {
            columns[2].fixed = inputValue['columns[2].fixed']
        }
        const props = {
            ref: 'Table',
            className: inputValue.className,
            columns: columns.slice(),
            data: inputValue.data !== 'none' ? data : [],
            bordered: inputValue.bordered,
            loading: inputValue.loading,
            emptyText: inputValue.emptyText ? () => inputValue.emptyText : undefined,
            paginationObj: value.paginationObj && inputValue.paginationObj ? paginationObj : 'none',
            showHeaderMenu: value.showHeaderMenu ? inputValue.showHeaderMenu : false,
            showRowNum: value.showRowNum ? inputValue.showRowNum : false,
            multiSelect: value.multiSelect ? {type: inputValue.multiSelect} : {type: false},
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
            filterDelay: value.filterDelay ? inputValue.filterDelay : undefined,
            onFilterChange: value.filterable ? this.onFilterChange : undefined,
            onFilterClear: value.filterable ? this.onFilterClear : undefined,
            showHeader: value.showHeader,

            bodyDisplayInRow: value.bodyDisplayInRow,
            bodyStyle: value.bodyStyle ? {color: inputValue.bodyStyle} : undefined,
            size: value.size ? inputValue.size : undefined,
            height: value.height ? +inputValue.height : undefined,
            headerHeight: value.headerHeight ? +inputValue.headerHeight : undefined,
            title: value.title ? () => <span>{inputValue.title}</span> : undefined,
            scroll: scroll,
            headerScroll: value.headerScroll,
            footerScroll: value.footerScroll,
            resetScroll: value.resetScroll,
        }
        return (
            <div className="app-wrap" style={{background: '#ccc', height: '100%'}}>
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
                    <Col md={3} xs={3} sm={3} lg={3} style={{padding: 0}}>
                        <Panel header="功能选择" style={{height: clientHeight}}>
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
                                <Col md={6} xs={6} sm={6} lg={6} style={{ padding: '10px', height: clientHeight - 80, overflow: 'auto'}}>
                                    {
                                        treeData.map(item => {
                                            if (checkAttr[item.key]) {
                                                return <Panel header={item.title}>
                                                        {
                                                            item.children.map(it => {
                                                                return (
                                                                    <div style={{height: 30, lineHeight: '30px'}}>
                                                                        <Checkbox
                                                                            checked={value[it.attribute]}
                                                                            onChange={(value) => this.onSelect(value, it.attribute, it.set)}
                                                                        >
                                                                            {it.title}
                                                                        </Checkbox>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        </Panel>
                                            }
                                            return null;
                                        })
                                    }
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                    <Col md={6} xs={6} sm={6} lg={6}>
                        <Panel header="Grid预览" style={{height: clientHeight, overflow: 'auto'}}>
                            {
                                inputValue['<Grid.GridToolBar />'] ? <Grid.GridToolBar toolBtns={toolBtns} btnSize='sm' /> : null
                            }
                            {
                                display ?  <Grid {...props} /> : null
                            }
                        </Panel>
                    </Col>
                    <Col md={3} xs={3} sm={3} lg={3} style={{padding: 0}}>
                        <Panel header="属性配置" style={{height: clientHeight, overflow: 'auto'}}>
                            <div>
                                {
                                    Object.keys(setAll).length > 0
                                        ?
                                        Object.keys(setAll).map(item => setAll[item].map(it => {
                                            return <div style={{marginBottom: '15px'}}>
                                                <h4 style={{marginBottom: '5px'}}>{it.title}</h4>
                                                <div>{this.getItemInput(it)}</div>
                                            </div>
                                        }))
                                        :
                                        <div style={{textAlign: 'center'}}>暂无配置属性</div>
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
