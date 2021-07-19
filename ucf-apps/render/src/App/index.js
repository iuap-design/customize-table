/**
 * App模块
 */
import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Col, Row, ColorPicker, Checkbox ,Select, Popover, Panel, Icon, Tabs } from 'tinper-bee';
import { Input } from '@tinper/next-ui';
import Radio from 'bee-radio';
import {treeData as TimelineTreeData, APIData as TimelineAPIData, renderComponent as TimelineRenderComponent, getProps as TimelineGetProps} from '../components/Timeline';
import {treeData as StepsTreeData, APIData as StepsAPIData, renderComponent as StepsRenderComponent, getProps as StepsGetProps} from '../components/Steps';
import 'bee-complex-grid/build/Grid.css';
import './index.less';
const Option = Select.Option;
const {TabPane} = Tabs;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
			treeData: [],
			APIData : [],
			renderComponent : ()=>{},
			getProps  : ()=>{},


            display: true,
            setAll: {},
            API: {
                "props.data": true,
                "columns.dataIndex": true,
                "props.columns": true,
                "columns.title": true
            },
            apiAll: {
                props: {},
                itemProps: {},
                event: {},
                data: {},
                methods: {},
            },
            selectedKeys: ['0-0'],
            demoActive: 'demo',
            value: {},
            activeKey: '1',
            checkAttr: {},
            inputValue: {},
        }
    }
	componentDidMount() {
		const search = window.location.search.split('?')[1]
		const component = search.split('=')[1];
		let obj = {
			Timeline: {
				treeData: TimelineTreeData,
				APIData: TimelineAPIData,
				renderComponent: TimelineRenderComponent,
				getProps: TimelineGetProps,
			},
			Steps: {
				treeData: StepsTreeData,
				APIData: StepsAPIData,
				renderComponent: StepsRenderComponent,
				getProps: StepsGetProps,
			},

		}

		const treeData = obj[component].treeData
		const APIData = obj[component].APIData
		const renderComponent = obj[component].renderComponent
		const getProps = obj[component].getProps

		this.setState({
			treeData,APIData,renderComponent, getProps
		})
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
                    <Input
                        style={{width: '120px', height: '20px'}}
                        value={this.state.inputValue[item.key]}
                        onChange={(e)=>this.formChange({target:{value: e}}, item.key, 'input')} />
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
        const {inputValue, value} = this.state;
        if (active === 'demo') {
			const data =  this.state.getProps({inputValue, value}) || {}
			console.log(data)
			return data
        //     props = {
		// 		pending: value.pending ? inputValue.pending : undefined
		// 	}
		// 	itemProps = {
        //     	color: value.color ? inputValue.color : undefined,
        //     	dot: value.dot ? inputValue.dot : undefined,
		// 	}
        }
        // return {props, itemProps}
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
            return Object.keys(apiAll[item]).length > 0 ?<div>
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
                                        apiAll[item][it].value && <div>默认值：{typeof apiAll[item][it].value === 'object' ? JSON.stringify(apiAll[item][it].value) : "" + apiAll[item][it].value}</div>
                                    }
                                </div>
                            ))
                        }
                    </div> : null
        })
        return node;
    }
    render() {
        const clientHeight = document.body.clientHeight - 120;
        const {checkAttr = {}, inputValue, value, setAll = {}, display, activeKey, checkAPI = {}, API, demoActive} = this.state;
        const {props, itemProps} = this.getProps(demoActive);
        return (
            <div className="app-wrap">
                <header style={{
                    background: '#fff',
                    height: '50px'
                }}>
                    <div className='gridTitle'>
						tinper-next 功能演示
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
                                            this.state.treeData.map(item => {
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
                                            this.state.APIData.map(item => {
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
                                    {/*{*/}
                                    {/*    inputValue['ToolBar'] ? <Grid.GridToolBar toolBtns={toolBtns} btnSize='sm' /> : null*/}
                                    {/*}*/}
                                    {/*{*/}
                                    {/*    props.exportData ? <Grid.GridToolBar toolBtns={exportBtn} btnSize='sm' /> : null*/}
                                    {/*}*/}
                                    {/*{*/}
                                    {/*    display ?  <Grid ref={'grid'} {...props} /> : null*/}
                                    {/*}*/}
									{    display ?
										this.state.renderComponent({props, itemProps})
										: null}
                                </TabPane>
                                {/*<TabPane tab='源码' key='2' className="source-code">*/}
                                {/*    {*/}
                                {/*        (() => {*/}
                                {/*            const gridProps = Object.keys(codeProps).map(item => <p style={{margin : '3px', padding: '0 20px'}}>{item}={'{' + codeProps[item] + '}'}</p>);*/}
                                {/*            const gridData = data.slice().map(item => <p style={{margin : '3px', padding: '0 20px'}}>{JSON.stringify(item)},</p>);*/}
                                {/*            const gridCol= columns.slice().map(item => <p style={{margin : '3px', padding: '0 20px'}}>{*/}
                                {/*                (() => {*/}
                                {/*                    const obj = Object.assign({}, item);*/}
                                {/*                    Object.keys(obj).map(it => {*/}
                                {/*                        if( typeof obj[it] === 'function') {*/}
                                {/*                            obj[it] = '' + obj[it];*/}
                                {/*                        }*/}
                                {/*                    });*/}
                                {/*                    return JSON.stringify(obj)*/}
                                {/*                })()*/}
                                {/*            },</p>);*/}
                                {/*            return (<div style={{padding: '20px'}}>*/}
                                {/*                <div>*/}
                                {/*                    <p style={{margin : '3px'}}>const data = [</p>*/}
                                {/*                    {gridData}*/}
                                {/*                    <p style={{margin : '3px'}}>];</p>*/}
                                {/*                    <p style={{margin : '3px'}}>const columns = [</p>*/}
                                {/*                    {gridCol}*/}
                                {/*                    <p style={{margin : '3px'}}>];</p>*/}
                                {/*                    {'<' + 'Grid'}*/}
                                {/*                    {gridProps}*/}
                                {/*                    {'/>'}*/}
                                {/*                </div>*/}
                                {/*            </div>)*/}
                                {/*        })()*/}
                                {/*    }*/}
                                {/*</TabPane>*/}
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
