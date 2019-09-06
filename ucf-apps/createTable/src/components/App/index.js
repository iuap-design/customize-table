/**
 * App模块
 */
import React, { Component } from 'react';
import moment from 'moment';
import { Col, Row, Collapse, Checkbox ,Select, Popover,Panel, Icon, Radio,Tree } from 'tinper-bee';
import Table from 'bee-table';
import singleSelect from "tinper-bee/lib/singleSelect.js";
import multiSelect from "tinper-bee/lib/multiSelect.js";
import sort from "tinper-bee/lib/sort.js";
import sum from "tinper-bee/lib/sum.js";
import dragColumn from "tinper-bee/lib/dragColumn.js";
import filterColumn from "tinper-bee/lib/filterColumn.js";
import bigData from "tinper-bee/lib/bigData.js";
import Grid from 'bee-complex-grid';
import {leftMenuData, treeData, GridData, MultiSelectData, SortData, SumData, FilterColumnData} from './menuList';
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
            propsList: [],
            matters: [],
            collapse: {},
            treeData: treeData.slice(),
            selectedKeys: ['0-0'],
            table: 'Table',
            value: {
                showHeader: true,
                showHeaderMenu: true,
                bodyDisplayInRow: false,
                autoCheckedByClickRows: true,
            },
            inputValue: {
                title: '自定义标题',
                multiSelect: 'checkbox',
            },
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
                { a: "ASVAL_20190312", time: '2019-09-07', b: "小红", c: "女", d: "财务一科", amount: 215, e: "T2", key: "6" }
            ],
        }
    }
    tableData = {
        GridData,
        MultiSelectData,
        SortData,
        SumData,
        FilterColumnData
    };
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
    onSelect = (selectedKeys, info) => {
        const { table, selectedKey } = info.node.props;
        if (selectedKey === this.state.selectedKeys[0]) {
            return
        }
        let stateTreeData  = treeData.slice();
        // if (table === 'Grid') {
        //     stateTreeData = treeData.concat(GridData)
        // }
        // if (table === 'multiSelectData') {
        //     stateTreeData = treeData.concat(multiSelectData)
        // }
        stateTreeData = treeData.concat(this.tableData[table.replace('Table', 'Data')] || []);
        this.setState({
            selectedKeys: [selectedKey],
            table,
            treeData: stateTreeData
        });
    };
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
            case 'input' : node = <input style={{width: '80px', height: '20px'}} value={this.state.inputValue[item.attribute]} onChange={(e)=>this.formChange(e, item.attribute, 'input')} />; break;
            case 'select' : node = (
                <Select
                    size='sm'
                    style={{width: '80px'}}
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
    renderTreeNode = data => data.map((item) => {
        let { selectedKeys } = this.state;
        let title = selectedKeys.indexOf(item.key) > -1 ? <span><span>{item.title}</span><Icon type="uf-correct-2"></Icon></span> : item.title;
        if (item.children) {
            return (
                <TreeNode key={item.key} title={item.title}>
                    {this.renderTreeNode(item.children)}
                </TreeNode>
            );
        }
        return (
            <TreeNode
                key={item.key}
                selectedKey={item.key}
                title={title}
                table={title}
            />
        )
    });
    tableRefresh() {
        this.setState({display: false}, () => setTimeout(() => this.setState({display: true}), 4))
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
        };
        const scroll = {};
        const value = this.state.value;
        this.state.value.scrollX ? scroll.x = 3200 : null;
        this.state.value.scrollY ? scroll.y = 200 : null;
        const props = {
            ref: 'Table',
            className: value.zebraCrossing ? 'zebra-table' : '',
            columns: this.state.columns.slice(),
            // columns: this.state.columns,
            data: value.emptyText ? [] : this.state.data,
            bordered: value.bordered,
            loading: value.loading,
            paginationObj: value.paginationObj ? paginationObj : 'none',
            autoCheckedByClickRows: value.autoCheckedByClickRows,
            sorterClick: value.sorterClick ? () => console.log(arguments) : null,
            sort: {mode: 'single'},
            afterFilter: value.showFilterPopover ? this.afterFilter : undefined,
            // draggable: draggable,
            // dragborder: dragborder,
            // rowDraggAble: rowDraggAble,
            showHeaderMenu: value.showHeaderMenu,
            // showFilterMenu: showFilterMenu,
            // columnFilterAble: columnFilterAble,
            getSelectedDataFunc: value.getSelectedDataFunc
                ?
                (selectedList, record, index) => window.alert('所有选中行:' + JSON.stringify(selectedList) + '\n当前操作行:' + JSON.stringify(record))
                :
                undefined,
            filterable: value.filterable,
            filterDelay: value.filterDelay ? this.state.inputValue.filterDelay : undefined,
            onFilterChange: this.onFilterChange,
            onFilterClear: this.onFilterClear,
            showHeader: value.showHeader,
            showRowNum: value.showRowNum,
            bodyDisplayInRow: value.bodyDisplayInRow,
            emptyText: this.state.inputValue.emptyText ? () => this.state.inputValue.emptyText : undefined,
            onRowClick: value.onRowClick ? (record, index) => window.alert(`index=>${index},record=>${JSON.stringify(record)},`) : undefined,
            onRowDoubleClick: value.onRowDoubleClick ? (record, index) => window.alert(`index=>${index},record=>${JSON.stringify(record)},`) : undefined,
            onRowHover: value.onRowHover ? (index, record) => window.alert(`index=>${index},record=>${JSON.stringify(record)},`) : undefined,
            bodyStyle: value.bodyStyle ? {color: this.state.inputValue.bodyStyle} : undefined,
            size: value.size ? this.state.inputValue.size : undefined,
            height: value.height ? +this.state.inputValue.height : undefined,
            headerHeight: value.headerHeight ? +this.state.inputValue.headerHeight : undefined,
            title: value.title ? () => <span>{this.state.inputValue.title}</span> : undefined,
            scroll: scroll,
            headerScroll: value.headerScroll,
            footerScroll: value.footerScroll,
            resetScroll: value.resetScroll,
            //Grid
            multiSelect: value.multiSelect ? {type: this.state.inputValue.multiSelect} : {type: 'checkbox'}
            // multiSelect: {type: 'radio'}
        }
        return (
            <div className="app-wrap">
                <Row style={{width: '1600px',margin: '20px auto'}}>
                    <Col md={2} xs={2} sm={2} lg={2}>
                        <Tree
                            multiple
                            defaultExpandAll
                            onSelect={this.onSelect}
                            selectedKeys={this.state.selectedKeys}
                        >
                            {this.renderTreeNode(leftMenuData)}
                        </Tree>
                    </Col>
                    <Col md={8} xs={8} sm={8} lg={8}>
                        {
                            this.getCollapse(this.state.treeData)
                        }
                        {
                            this.state.display ?  <div style={{marginTop: 20}}>
                                {
                                    (()=>{
                                        let node = null;
                                        switch (this.state.table) {
                                            case 'Table' : node = <Table {...props} />;break;
                                            // case 'SingleSelectTable' : node = <SingleSelectTable {...props} />;break;
                                            case 'MultiSelectTable' : node = <MultiSelectTable {...props} />;break;
                                            case 'SortTable' : node = <SortTable {...props} />;break;
                                            case 'SumTable' : node = <SumTable {...props} />;break;
                                            case 'DragColumnTable' : node = <DragColumnTable {...props} />;break;
                                            case 'FilterColumnTable' : node = <FilterColumnTable {...props} />;break;
                                            case 'BigDataTable' : node = <BigDataTable {...props} />;break;
                                            case 'Grid' : node = <Grid {...props} />;break;
                                        }
                                        return node;
                                    })()
                                }
                            </div> : null
                        }
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
                            <Panel header="表格注意事项">
                                <div>
                                    <p>1，部分属性（columns.fixed，columns.width）table可以动态修改，Grid不可以动态修改；</p>
                                    <p>2，height属性需bodyDisplayInRow属性为true，在Grid上才会生效；</p>
                                </div>
                            </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
