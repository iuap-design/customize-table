/**
 * App模块
 */
import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Col, Row, ColorPicker, Checkbox ,Select, Popover, Panel, Icon, Tabs } from 'tinper-bee';9
import Radio from 'bee-radio';
import Grid from 'bee-complex-grid';
import {treeData, tableColumns, tableData, tableProps, tableEvent, APIData} from './menu';
import 'bee-complex-grid/build/Grid.css';
import './index.less';
const Option = Select.Option;
const {TabPane} = Tabs;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            setAll: {},
            API: {
                "props.data": true,
                "columns.dataIndex": true,
                "props.columns": true,
                "columns.title": true
            },
            apiAll: {
                props: {
                    data: {title: 'data', type: "object[]", value: "this.state.data"},
                    columns: {title: 'columns', type: "object[]", value: "this.state.columns"}
                },
                event: {},
                columns: {
                    title: {title: "title", type: 'string|ReactNode'},
                    dataIndex: {title: "dataIndex", type: 'string'},
                },
                data: {},
                methods: {},
            },
            treeData: treeData.slice(),
            selectedKeys: ['0-0'],
            demoActive: 'demo',
            value: {},
            activeKey: '1',
            checkAttr: {},
            inputValue: {},
            columns: [
                { title: "员工编号", dataIndex: "a", key: "a"},
                { title: "入职时间", dataIndex: "time", key: "time"},
                { title: "员工姓名", dataIndex: "b", key: "b"},
                { title: "性别", dataIndex: "c", key: "c"},
                { title: "部门", dataIndex: "d", key: "d" },
                { title: "职级", dataIndex: "e", key: "e" },
                { title: "报销款", dataIndex: "amount", key: "amount" }
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
    data = {
        'data[2]._disabled':(checked, result) => {
            if (checked) {
                result[2]['_disabled'] = true
            } else {
                result[2]['_disabled'] = false
            }
        },
    };
    columns = {
        'columns[i].width': (value, result) => {
            result.map(item => {
                item.width =  isNaN(+value) ? '200px' : +value + 'px';
            })
        },
        'columns[2].fixed': (value, result) => {
            result[2].fixed =  value || undefined;
        },
        'columns[i].titleAlign': (value, result) => {
            result.map(item => {
                item.titleAlign =  value;
            })
        },
        'columns[i].contentAlign': (value, result) => {
            result.map(item => {
                item.contentAlign =  value;
            })
        },
        'columns[i].textAlign': (value, result) => {
            result.map(item => {
                item.textAlign =  value;
            })
        },
        'columns[2].fontColor': (value, result) => {
            result[2].fontColor = value
        },
        'columns[2].bgColor': (value, result) => {
            result[2].bgColor = value
        },
        'columns[i].sorter': (value, result) => {
            result[2].sorter = (a, b) => moment(a.time) - moment(b.time);
            result[6].sorter = (a, b) => a.amount - b.amount;
            result[2].sorterClick = result[6].sorterClick = (data, type) => {
                console.log("data",data);
            }
        },
        'columns[i].sumCol': (value, result) => {
            result[6].sumCol =  value;
        },
        'columns[i].ifshow': (value, result) => {
            result[1].ifshow = value;
        },
    };
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
        }, () => this.tableRefresh());
    };
    apiSelect = (selected, record, key) => {
        const {apiAll, API, columns, data} = this.state;
        if (selected) {
            apiAll[key][record.title] = record;
            API[record.key || record.title] = true;
        } else {
            apiAll[key][record.title] = undefined;
            API[record.key || record.title] = false;
        }
        this.setState({
            apiAll,
            API
        }, () => this.tableRefresh());
    };
    formChange(e, attribute, type) {
        let value;
        switch (type) {
            case 'input' : value = e.target.value;break;
            case 'select' : value = e;break;
            case 'radio' : value = e;break;
            case 'colorPicker' : value = e.hex;break;
        }
        this.setState({inputValue: {...this.state.inputValue, [attribute]: value}}, () => this.tableRefresh());
    }
    getItemInput(item) {
        let node = null;
        switch (item.type) {
            case 'input' : node = (
                <div className='rightInput'>
                    <span style={{marginRight: '12px'}}>{item.key}:</span>
                    <input
                        style={{width: '120px', height: '20px'}}
                        value={this.state.inputValue[item.key]}
                        onChange={(e)=>this.formChange(e, item.key, 'input')} />
                </div>
            );break;
            case 'select' : node = (
                <div className='rightInput'>
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
                <div className='rightInput'>
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
        return <div className={'rightLi'}>{node}</div>;
    }
    tableRefresh() {
        this.setState({display: false}, () => setTimeout(() => this.setState({display: true}), 4))
    }
    getProps(active) {
        let props = {};
        const {data = [], inputValue, value, apiAll, columns} = this.state;
        if (active === 'demo') {
            const scroll = {};
            const paginationObj = {
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

            const multiSelect = value.multiSelect ?  {type: inputValue.multiSelect} : value['data[2]._disabled'] ? {type: 'checkbox'} : {type: false};
            props = {
                className: inputValue.className,
                columns: columns.slice(),
                data: inputValue.data !== 'none' ? data : [],
                bordered: inputValue.bordered,
                loading: inputValue.loading,
                dragborder: inputValue.dragborder,
                draggable: inputValue.draggable,
                emptyText: inputValue.emptyText ? () => inputValue.emptyText : undefined,
                paginationObj: value.paginationObj && inputValue.paginationObj ? paginationObj : 'none',
                showHeaderMenu: value.showHeaderMenu ? inputValue.showHeaderMenu : false,
                showRowNum: value.showRowNum ? inputValue.showRowNum : undefined,
                sort: inputValue.sort ? {mode: inputValue.sort} : undefined,
                multiSelect,
                autoCheckedByClickRows: value.autoCheckedByClickRows ? inputValue.autoCheckedByClickRows : undefined,
                exportData: value.export ? inputValue.exportData === 'data' ? data : inputValue.exportData : undefined,
                exportFileName: value.export ? inputValue.exportFileName : undefined,
                title: value.title ? () => <span>{inputValue.title}</span> : undefined,
                footer: value.footer ? () => <span>{inputValue.footer}</span> : undefined,
                expandedRowRender: value.expandedRowRender ? () => <span>{inputValue.expandedRowRender}</span> : undefined,
                expandRowByClick: value.expandRowByClick ? inputValue.expandRowByClick : undefined,
                rowDraggAble: value.rowDraggAble ? inputValue.rowDraggAble : undefined,
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
                scroll: scroll,
                headerScroll: value.headerScroll,
                footerScroll: value.footerScroll,
                resetScroll: value.resetScroll,
            };
        } else {
            function propsAndEvent(object) {
                Object.keys(object).filter(item => object[item] !== undefined).map(item => {
                    props[object[item].title] = object[item].value;
                });
            }
            propsAndEvent(apiAll.props);
            propsAndEvent(apiAll.event);
            props.data = props.data ? data : [];
            props.columns = columns;
        }
        return props
    }
    export() {
        this.refs.grid.exportExcel();
    }
    getColumns() {
        const {inputValue,columns, value, apiAll, demoActive} = this.state;
        const column = _.cloneDeep(columns);
        if (demoActive === 'demo') {
            Object.keys(inputValue)
                .filter(item => inputValue[item] !== undefined)
                .map(item => this.columns[item] && this.columns[item](inputValue[item], column))
        } else {
            Object.keys(apiAll.columns)
                .filter(item => apiAll.columns[item] !== undefined)
                .map(item => apiAll.columns[item].onSelect && apiAll.columns[item].onSelect(column))
        }
        return column
    }
    getData() {
        const {data = [], inputValue, value, apiAll, columns, demoActive} = this.state;
        const result = _.cloneDeep(data);
        console.log(value);
        if (demoActive === 'demo') {
            Object.keys(inputValue)
                .filter(item => inputValue[item] !== undefined)
                .map(item => this.data[item] && this.data[item](inputValue[item], result))
        } else {
            Object.keys(apiAll.data)
                .filter(item => apiAll.data[item] !== undefined)
                .map(item => apiAll.data[item].onSelect && apiAll.data[item].onSelect(result))
        }
        return result
    }
    getDemo() {
        const {setAll} = this.state;
        if (Object.keys(setAll).length > 0) {
            return Object.keys(setAll).map(item => setAll[item].map(it => {
                return <div style={{marginBottom: '16px'}}>
                    <h6 style={{marginBottom: '4px'}}>{it.title}</h6>
                    <div>{this.getItemInput(it)}</div>
                </div>
            }))
        }
        return <div style={{textAlign: 'center'}}>暂无配置属性</div>
    }
    getApi() {
        const {apiAll} = this.state;
        const arr = Object.keys(apiAll).filter((item) => apiAll[item] !== undefined);
        const node = arr.map(item => {
            const nodeArr = Object.keys(apiAll[item]).filter(item => apiAll[item] !== undefined)
            return <div>
                        <h4>{item}</h4>
                        {
                            Object.keys(apiAll[item]).filter(Item => apiAll[item][Item] !== undefined).map(it => (
                                <div style={{marginBottom: '16px', marginLeft: '30px'}}>
                                    <h5 style={{marginBottom: '4px'}}>{apiAll[item][it].title}</h5>
                                    {
                                        apiAll[item][it].type && <div>type：{apiAll[item][it].type}</div>
                                    }
                                    {
                                        apiAll[item][it].arguments && <div>arguments：<b>{apiAll[item][it].arguments.join('，')}</b></div>
                                    }
                                    {
                                        apiAll[item][it].value && <div>value：{typeof apiAll[item][it].value === 'object' ? JSON.stringify(apiAll[item][it].value) : "" + apiAll[item][it].value}</div>
                                    }
                                </div>
                            ))
                        }
                    </div>
        })
        return node;
    }
    render() {
        const clientHeight = document.body.clientHeight - 120;
        const {checkAttr = {}, inputValue, value, setAll = {}, display, activeKey, checkAPI = {}, API, demoActive} = this.state;
        const exportBtn = [
            {
                value:'导出',
                colors:'primary',
                iconType:'uf-search',
                onClick: () => this.export()
            },
        ];
        const toolBtns = [
            {
                value:'新增',
                bordered:false,
                colors:'primary',
                onClick: () => console.log('新增')
            },
            {
                value:'导出',
                iconType:'uf-search',
                onClick: () => this.export()
            },
            {
                value:'上传',
                iconType:'uf-cloud-up',
                onClick: () => console.log('上传')
            },
            {
                value:'批量操作',
                children:[
                    {
                        value:'修改',
                        onClick: () => console.log('修改')
                    },{
                        value:'删除',
                        onClick: () => console.log('删除')
                    }
                ]
            },
            {
                iconType:'uf-copy',
                onClick: () => console.log('copy')
            }
        ];
        const props = this.getProps(demoActive);
        const columns = this.getColumns(this.state.columns);
        const data = this.getData(this.state.data);
        props.data && props.data.length > 0 ? props.data = data : props.data = [];
        props.columns = columns;
        const codeProps = {data: inputValue.data !== 'none' ? 'data' : '[]', columns: 'columns'};

        Object.keys(props).filter(item => {
            return props[item] !== undefined && item !== 'data' && item !== 'columns'
        }).map(item => codeProps[item] = typeof props[item] === 'function' ? '' + props[item] : JSON.stringify(props[item]));

        return (
            <div className="app-wrap">
                <header style={{
                    background: '#fff',
                    height: '50px'
                }}>
                    <div className='gridTitle'>
                        Grid 功能演示系统
                    </div>
                </header>
                <Row className='leftRow'>
                    <Col md={2} xs={2} sm={2} lg={2} style={{padding: 0}}>
                        <Panel header="功能选择" style={{height: clientHeight, marginBottom: '0px'}}>
                            <Tabs
                                className="Demo5-tabs"
                                defaultActiveKey="demo"
                                tabBarStyle="upborder"
                                activeKey={demoActive}
                                onChange={(value) => {this.setState({demoActive: value}); this.tableRefresh()}}
                            >
                                <TabPane tab='功能特性' key="demo">
                                    <div style={{padding: '10px 10%', marginBottom: '0px', height: clientHeight - 140, textAlign: 'left', overflow: 'auto'}}>
                                        {
                                            treeData.map(item => {
                                                return (
                                                    <div style={{minHeight: 40, lineHeight: '40px'}}>
                                                        <div
                                                            style={{cursor: 'pointer'}}
                                                            onClick={() => this.setState({checkAttr: {...checkAttr, [item.key] : !checkAttr[item.key]}})}
                                                        >
                                                            {
                                                                checkAttr[item.key]
                                                                    ?
                                                                    <Icon type="uf-treearrow-down"></Icon>
                                                                    :
                                                                    <Icon type="uf-anglearrowpointingtoright"></Icon>
                                                            }
                                                            {item.title}
                                                        </div>
                                                        {/*<Checkbox*/}
                                                        {/*    checked={checkAttr[item.key]}*/}
                                                        {/*    onChange={() => this.setState({checkAttr: {...checkAttr, [item.key] : !checkAttr[item.key]}})}*/}
                                                        {/*>*/}
                                                        {/*    {item.title}*/}
                                                        {/*</Checkbox>*/}
                                                        {
                                                            checkAttr[item.key]
                                                                ?
                                                                <Panel style={{marginTop: 10}}>
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
                                                                :
                                                                null
                                                        }
                                                    </div>);
                                            })
                                        }
                                    </div>
                                </TabPane>
                                <TabPane tab='API' key="API">
                                    <div style={{padding: '10px 10%', marginBottom: '0px', height: clientHeight - 140, textAlign: 'left', overflow: 'auto'}}>
                                        {
                                            APIData.map(item => {
                                                return (

                                                    <div style={{minHeight: 40, lineHeight: '40px'}}>
                                                        <div
                                                            style={{cursor: 'pointer'}}
                                                            onClick={() => this.setState({checkAPI: {...checkAPI, [item.title] : !checkAPI[item.title]}})}
                                                        >
                                                            {
                                                                checkAPI[item.key]
                                                                    ?
                                                                    <Icon type="uf-treearrow-down"></Icon>
                                                                    :
                                                                    <Icon type="uf-anglearrowpointingtoright"></Icon>
                                                            }
                                                            {item.title}
                                                        </div>
                                                        {/*<Checkbox*/}
                                                        {/*    checked={checkAPI[item.title]}*/}
                                                        {/*    onChange={() => this.setState({checkAPI: {...checkAPI, [item.title] : !checkAPI[item.title]}})}*/}
                                                        {/*>*/}
                                                        {/*    {item.title}*/}
                                                        {/*</Checkbox>*/}
                                                        {
                                                            checkAPI[item.title]
                                                                ?
                                                                <Panel style={{marginTop: 10}}>
                                                                    {
                                                                        item.children.map(it => {
                                                                            return (
                                                                                <div style={{height: 30, lineHeight: '30px'}}>
                                                                                    <Checkbox
                                                                                        checked={API[it.key || it.title]}
                                                                                        disabled={it.disabled}
                                                                                        onChange={(value) => this.apiSelect(value, it, item.key)}
                                                                                    >
                                                                                        {it.title}
                                                                                    </Checkbox>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </Panel>
                                                                :
                                                                null
                                                        }
                                                    </div>);
                                            })
                                        }
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Panel>
                    </Col>
                    <Col md={7} xs={7} sm={7} lg={7}>
                        <Panel header="Grid预览" style={{height: clientHeight, marginBottom: '0px', overflow: 'auto'}}>
                            <Tabs
                                activeKey={activeKey}
                                tabBarPosition={'top'}
                                tabBarStyle="upborder"
                                onChange={(value) => {this.setState({activeKey: value})}}
                                className="preview-tabs"
                                onTabClick={this.onTabClick}
                            >
                                <TabPane tab='预览' key='1'>
                                    {
                                        inputValue['ToolBar'] ? <Grid.GridToolBar toolBtns={toolBtns} btnSize='sm' /> : null
                                    }
                                    {
                                        props.exportData ? <Grid.GridToolBar toolBtns={exportBtn} btnSize='sm' /> : null
                                    }
                                    {
                                        display ?  <Grid ref={'grid'} {...props} /> : null
                                    }
                                </TabPane>
                                <TabPane tab='源码' key='2' className="source-code">
                                    {
                                        (() => {
                                            const gridProps = Object.keys(codeProps).map(item => <p style={{margin : '3px', padding: '0 20px'}}>{item}={'{' + codeProps[item] + '}'}</p>);
                                            const gridData = data.slice().map(item => <p style={{margin : '3px', padding: '0 20px'}}>{JSON.stringify(item)},</p>);
                                            const gridCol= columns.slice().map(item => <p style={{margin : '3px', padding: '0 20px'}}>{
                                                (() => {
                                                    const obj = Object.assign({}, item);
                                                    Object.keys(obj).map(it => {
                                                        if( typeof obj[it] === 'function') {
                                                            obj[it] = '' + obj[it];
                                                        }
                                                    });
                                                    return JSON.stringify(obj)
                                                })()
                                            },</p>);
                                            return (<div style={{padding: '20px'}}>
                                                <div>
                                                    <p style={{margin : '3px'}}>const data = [</p>
                                                    {gridData}
                                                    <p style={{margin : '3px'}}>];</p>
                                                    <p style={{margin : '3px'}}>const columns = [</p>
                                                    {gridCol}
                                                    <p style={{margin : '3px'}}>];</p>
                                                    {'<' + 'Grid'}
                                                    {gridProps}
                                                    {'/>'}
                                                </div>
                                            </div>)
                                        })()
                                    }
                                </TabPane>
                            </Tabs>
                        </Panel>
                    </Col>
                    <Col md={3} xs={3} sm={3} lg={3} style={{padding: 0}}>
                        <Panel header='属性配置' style={{height: clientHeight, marginBottom: '0px', overflow: 'auto'}}>
                            <div>
                                {
                                    demoActive === 'demo' ? this.getDemo() : this.getApi()
                                }
                            </div>
                        </Panel>
                    </Col>
                </Row>
                <footer>
                    <p>Copyright ©2019      用友网络科技股份有限公司版权所有   京ICP备05007539号
                        -21 京公网安备11010802021935号</p>
                </footer>
            </div>
        );
    }
}

export default App;
