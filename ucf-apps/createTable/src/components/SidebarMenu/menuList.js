import { actions } from 'mirrorx';
import { Select } from 'tinper-bee';
const Option = Select.Option;
const treeData = [
    {
        title: '基础 Basic',
        key: '0-0',
        children: [
            {
                title: '无数据展示',
                attribute: 'nodata',
                key: '0-0-0'
            },

            {
                title: '隔行换色',
                attribute: 'zebraCrossing',
                key: '0-0-1'
            },
            {
                title: '表格数据加载 Loading',
                attribute: 'loading',
                key: '0-0-2',
            },
            {
                title: '显示边框',
                attribute: 'bordered',
                key: '0-0-3',
            },
            {
                title: '设置横向滚动条',
                key: '0-0-4',
                attribute: 'scrollX',
            },
            {
                title: '设置纵向滚动条(固定表头)',
                key: '0-0-5',
                attribute: 'scrollY',
            },
            {
                title: <span>表格标题<input onClick={(e) => {e.stopPropagation()}} value={undefined} onChange={(e) => {actions.app.updateState({ title: e.target.value })}} style={{width: 50, height: 25, marginLeft: 5}} /></span>,
                key: '0-0-6',
                attribute: 'titleTakeEffect',
            },
        ],
    },
    {
        title: '列渲染',
        key: '0-1',
        children: [
            {
                title: '多列表头',
                key: '0-1-0',
                attribute: 'columnGroup',
            },
            {
                title: '数据关联',
                key: '0-1-1',
                attribute: 'showFilterMenu',
            },
            {
                title: '列合计',
                key: '0-1-2',
                attribute: 'canSum',
            },
            {
                title: '显示序号列',
                key: '0-1-3',
                attribute: 'showRowNum',
            },
            {
                title: '列字段类型',
                key: '0-1-4',
                attribute: 'fieldType',
            },
            {
                title: '列文本颜色',
                key: '0-1-5',
                attribute: 'fontColor',
            },
            {
                title: '列背景颜色',
                key: '0-1-6',
                attribute: 'bgColor',
            },
            {
                title: '标题对齐方式',
                key: '0-1-7',
                attribute: 'titleAlign',
            },
            {
                title: <span>
                            内容对齐方式
                            <span onClick={(e) => {e.stopPropagation()}}>
                                <Select
                                    size='sm'
                                    defaultValue={'left'}
                                    // value={actions.app ? actions.app.getState().size : undefined}
                                    onChange={(e) => {
                                        console.log(actions.app.updateState)
                                        actions.app.updateState({ textAlign: e })
                                    }}
                                    style={{width: 50, marginLeft: 5}}>
                                        <Option value={'left'}>left</Option>
                                        <Option value={'center'}>center</Option>
                                        <Option value={'right'}>right</Option>
                                    </Select>
                            </span>
                        </span>,
                key: '0-1-8',
                attribute: 'contentAlign',
            },
            {
                title: '必填项,列标题展示红色星号',
                key: '0-1-9',
                attribute: 'required',
            },
            {
                title: '表体的内容显示一行',
                key: '0-1-10',
                attribute: 'bodyDisplayInRow',
            },
            {
                title: '表头的内容显示一行',
                key: '0-1-11',
                attribute: 'headerDisplayInRow',
            },
            {
                title: <span>自定义表格行高<input onClick={(e) => {e.stopPropagation()}} value={actions.app ? actions.app.getState().height : undefined} onChange={(e) => {actions.app.updateState({ height: +e.target.value })}} style={{width: 50, height: 25, marginLeft: 5}} /></span>,
                key: '0-1-12',
                attribute: 'heightTakeEffect',
            },
            {
                title: <span>
                            表格大小
                            <span onClick={(e) => {e.stopPropagation()}}>
                                <Select
                                    size='sm'
                                    defaultValue={'md'}
                                    // value={actions.app ? actions.app.getState().size : undefined}
                                    onChange={(e) => {actions.app.updateState({ size: e })}}
                                    style={{width: 50, marginLeft: 5}}>
                                        <Option value={'sm'}>sm</Option>
                                        <Option value={'md'}>md</Option>
                                        <Option value={'lg'}>lg</Option>
                                    </Select>
                            </span>
                        </span>,
                key: '0-1-13',
                attribute: 'sizeTakeEffect',
            },
        ],
    },
    {
        title: '列操作',
        key: '0-2',
        children: [
            {
                title: '隐藏表头',
                key: '0-2-0',
                attribute: 'showHeader',
            },
            {
                title: '显示表头菜单',
                key: '0-2-1',
                attribute: 'showHeaderMenu',
            },
            {
                title: '显示行过滤菜单',
                key: '0-2-2',
                attribute: 'showFilterMenu',
            },
            {
                title: '显示列过滤功能',
                key: '0-2-3',
                attribute: 'columnFilterAble',
            },
            {
                title: '列排序',
                key: '0-2-4',
                attribute: 'sort',
            }
        ],
    },
    {
        title: '拖拽',
        key: '0-3',
        children: [
            {
                title: '列拖拽',
                key: '0-3-0',
                children: [
                    {
                        title: '拖拽改变列顺序',
                        key: '0-3-0-0',
                        attribute: 'draggable',
                    },
                    {
                        title: '拖拽改变列宽度',
                        key: '0-3-0-1',
                        attribute: 'dragborder',
                    }
                ],
            },
            {
                title: '行拖拽',
                key: '0-3-1',
                children: [
                    {
                        title: '拖拽改变行顺序',
                        key: '0-3-1-0',
                        attribute: 'rowDraggAble',
                    }
                ],
            }
        ],

    },
    {
        title: '分页 Pagination',
        key: '0-9',
        children: [
            {
                title: '显示分页',
                key: '0-9-0',
                attribute: 'paginationObj',
            }
        ],
    }
];

export default treeData;
