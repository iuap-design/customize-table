import {Icon} from 'tinper-bee'
export const treeData = [
    {
        title: '基础 Basic',
        key: '0-0',
        children: [
            {
                title: '隔行换色',
                attribute: 'zebraCrossing',
                set: [{type: 'radio', title: '隔行换色', key: 'className', options: [{title: 'zebra-table', value: 'zebra-table'}, {title: '无', value: undefined}]}],
            },
            {
                title: '显示边框',
                attribute: 'bordered',
                set: [{type: 'radio', title: '显示边框', key: 'bordered', options: [{title: 'true', value: true}, {title: 'false', value: false}]}],
            },
            {
                title: 'Loading状态',
                attribute: 'loading',
                set: [{type: 'radio', title: 'Loading状态', key: 'loading', options: [{title: 'true', value: true}, {title: 'false', value: false}]}],
            },
            // {
            //     title: '表格标题',
            //     attribute: 'title',
            //     key: '0-0-4',
            //     type: 'input',
            //     matters: 'title: 传入一个函数,该函数返回一个ReactNode.',
            // },
            // {
            //     title: '表格大小',
            //     key: '0-0-5',
            //     attribute: 'size',
            //     type: 'select',
            //     options: [
            //         {title: 'sm', value: 'sm'},
            //         {title: 'md', value: 'md'},
            //         {title: 'lg', value: 'lg'},
            //     ],
            //     matters: 'size: 优先级低于height属性.',
            // },
            // {
            //     title: '自定义表格高度',
            //     key: '0-0-6',
            //     type: 'input',
            //     attribute: 'height',
            // },
            // {
            //     title: '自定义表头高度',
            //     key: '0-0-6-1',
            //     type: 'input',
            //     attribute: 'headerHeight',
            // },
            // {
            //     title: '显示表头',
            //     attribute: 'showHeader',
            //     key: '0-0-7',
            //     matters: 'showHeader: 默认为true',
            // },
            {
                title: '显示序号列',
                attribute: 'showRowNum',
                key: '0-0-8',
                set: [
                    {type: 'radio', title: '显示序号列', key: 'showRowNum', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            },
            {
                title: '自定义无数据显示',
                attribute: 'emptyText',
                set: [
                    {type: 'radio', title: '表格数据', key: 'data', options: [{title: '[]', value: 'none'}, {title: 'data', value: 'data'}]},
                    {type: 'input', title: '自定义无数据显示', key: 'emptyText'}
                ],
            },
        ],
    },
    {
        title: '滚动 Scroll View',
        key: '0-1',
        children: [
            {
                title: '滚动条配置',
                attribute: 'scroll',
                key: '0-1-1',
                set: [
                    {type: 'input', title: '横向滚动条', key: 'scroll.x'},
                    {type: 'input',  title: '纵向滚动条',key: 'scroll.y'}
                ],
            },
        ],
    },
    {
        title: '列渲染 Custom Render',
        key: '0-2',
        children: [
            {
                title: '自定义列宽',
                attribute: 'columns[i].width',
                set: [
                    {
                        type: 'input', title: '自定义列宽', key: 'columns[i].width',
                    },
                ],
            },
            {
                title: '表头对齐方式',
                attribute: 'columns[i].titleAlign',
                set: [
                    {
                        type: 'radio', title: '表头对齐方式', key: 'columns[i].titleAlign',
                        options: [
                            {title: 'left', value: 'left'},
                            {title: 'center', value: 'center'},
                            {title: 'right', value: 'right'},
                        ]
                    },
                ],
            },
            {
                title: '内容对齐方式',
                attribute: 'columns[i].contentAlign',
                set: [
                    {
                        type: 'radio', title: '内容对齐方式', key: 'columns[i].contentAlign',
                        options: [
                            {title: 'left', value: 'left'},
                            {title: 'center', value: 'center'},
                            {title: 'right', value: 'right'},
                        ]
                    },
                ],
            },
            {
                title: '列文本颜色',
                attribute: 'columns[2].fontColor',
                set: [
                    {
                        type: 'colorPicker', title: '列文本颜色', key: 'columns[2].fontColor',
                    },
                ],
            },
            {
                title: '列背景颜色',
                attribute: 'columns[2].bgColor',
                set: [
                    {
                        type: 'colorPicker', title: '列背景颜色', key: 'columns[2].bgColor',
                    },
                ],
            },
        ],
    },
    {
        title: '列操作-锁定 Fixed / 隐藏 Hide',
        key: '0-3',
        children: [
            {
                title: '列固定',
                attribute: 'columns[2].fixed',
                set: [
                    {type: 'radio', title: '固定方向（第三列）', key: 'columns[2].fixed', options: [{title: 'left', value: 'left'}, {title: 'right', value: 'right'}]},
                ],
            },
            {
                title: '设置列锁定、解除、隐藏列',
                attribute: 'showHeaderMenu',
                set: [
                    {type: 'radio',title: '显示锁定/隐藏表头菜单', key: 'showHeaderMenu', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            },
        ],
    },
    // {
    //     title: '列操作-过滤 Filter',
    //     key: '0-4',
    //     children: [
    //         {
    //             title: '自定义无数据显示',
    //             attribute: 'emptyText',
    //             set: [
    //                 {type: 'radio', title: '表格数据', key: 'data', options: [{title: '[]', value: 'none'}, {title: 'data', value: 'data'}]},
    //                 {type: 'input', title: '自定义无数据显示', key: 'emptyText'}
    //             ],
    //         },
    //     ],
    // },
    {
        title: '列操作-排序 Sort',
        key: '0-4-1',
        children: [
            {
                title: '排序-单维排序',
                attribute: 'columns[i].sorter',
                set: [
                    {type: 'radio', title: '开启过滤-columns', key: 'columns[i].sorter', options: [{title: 'function', value: true}, {title: 'undefined', value: false}]},
                    {type: 'radio', title: '开启过滤-table', key: 'sort', options: [{title: '{mode: "single"}', value: "single"}, {title: '{mode: "multiple"}', value: 'multiple'}]},
                ],
            },
        ],
    },
    // {
    //     title: '列操作-拖拽 Drag',
    //     key: '0-4',
    //     children: [
    //         {
    //             title: '过滤值',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //
    //     ],
    // },
    // {
    //     title: '扩展行 Expanded Row',
    //     key: '0-4',
    //     children: [
    //         {
    //             title: '自定义表格嵌套的内容',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //         {
    //             title: '树型表格数据展示',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //         {
    //             title: '自定义表格标题',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //         {
    //             title: '自定义表格表尾',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //     ],
    // },
    {
        title: '行操作-选择',
        key: '0-4',
        children: [
            {
                title: '多选/单选',
                attribute: 'multiSelect',
                set: [
                    {
                        type: 'radio', title: '单选/多选/无', key: 'multiSelect', options:
                        [
                            {title: '{type: "checkbox"}', value: 'checkbox'},
                            {title: '{type: "radio"}', value: 'radio'},
                            {title: 'false', value: false},
                        ]
                    }
                ],
            },
            {
                title: '多选-某一行（第三行）禁用',
                attribute: 'data[2]._disabled',
                set: [
                    {type: 'radio', title: '选择禁用(第三行)', key: 'data[2]._disabled', options:
                            [
                                {title: 'true', value: true},
                                {title: 'false', value: false},
                            ]
                    }
                ],
            },
        ],
    },
    // {
    //     title: '无限滚动 Infinite-scroll（性能亮点）',
    //     key: '0-4',
    //     children: [
    //         {
    //             title: '过滤值',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //
    //     ],
    // },
    // {
    //     title: '导出 Export',
    //     key: '0-4',
    //     children: [
    //         {
    //             title: '过滤值',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //
    //     ],
    // },
    // {
    //     title: '分组聚合 Group',
    //     key: '0-4',
    //     children: [
    //         {
    //             title: '过滤值',
    //             attribute: 'columns[i].width',
    //             type: 'input',
    //             key: '0-4-1',
    //         },
    //
    //     ],
    // },
    {
        title: '分页 Pagination',
        key: '0-5',
        attribute: 'paginationObj',
        children: [
            {
                title: '分页',
                attribute: 'paginationObj',
                set: [{type: 'radio', title: '分页对象', key: 'paginationObj', options: [{title: 'paginationObj', value: 'paginationObj'}, {title: 'none', value: false}]}],
            },
        ],
    },
    {
        title: '工具栏 Toobar',
        key: '0-6',
        children: [
            {
                title: '顶部工具栏',
                attribute: 'GridToolBar',
                set: [{type: 'radio', title: '工具栏组件', key: '<Grid.GridToolBar />', options: [{title: 'true', value: true}, {title: 'false', value: false}]}],
            },
        ],
    },
];
export const tableProps = [
    {title: 'data', type: 'object[]', value: 'this.state.data', setValue: 'this.state.data', disable: true},
    {title: 'columns', type: 'object[]', value: 'this.state.columns', setValue: 'this.state.data', disable: true},
    {title: 'bordered', type: 'boolean', value: true, setValue: 'true'},
    {title: 'defaultExpandAllRows', type: 'boolean', value: true, setValue: 'true'},
    {title: 'defaultExpandedRowKeys', type: 'string[]', value: [1, 2, 3], setValue: "[1, 2, 3]"},
    {title: 'rowRef', type: '(record, index, indent) => string', value: (record) => "table", setValue: '(record) => "table"'},
    {title: 'rowKey', type: 'string|(record, index) => string', value: (record) => record.a, setValue: '(record) => record.a'},
    {title: 'expandedRowKeys', type: 'string[]', value: [3, 4, 5], setValue: "[3, 4, 5]"},
    {title: 'rowClassName', type: '() => string', value: () => "testRowClassName", setValue: '() => "testRowClassName"' },
    {title: 'expandedRowClassName', type: '() => string', value: () => "testExpandedRowClassName", setValue: '() => "testExpandedRowClassName"'},
    {title: 'indentSize', type: 'number', value: 15},
    {title: 'expandIconAsCell', type: 'boolean', value: true},
    {title: 'expandIconColumnIndex', type: 'number', value: 2},
    {title: 'expandedRowRender', type: '(record, index, indent) => ReactNode', value: (record) => <div>{record.a}</div>},
    {title: 'haveExpandIcon', type: '() => boolean', value: () => true},
    {title: 'expandedIcon', type: 'ReactNode', value: <Icon  />},
    {title: 'collapsedIcon', type: 'ReactNode', value: <Icon  />},
    {title: 'expandRowByClick', type: 'boolean', value: true},
    {title: 'rowDraggAble', type: 'boolean', value: true},
    {title: 'showHeader', type: 'boolean', value: true},
    {title: 'title', type: '() => ReactNode', value: (record) => <div>测试标题</div>},
    {title: 'footer', type: '() => ReactNode', value: (record) => <div>测试尾部</div>},
    {title: 'emptyText', type: '() => ReactNode', value: (record) => <div>无数据显示</div>},
    {title: 'loading', type: 'boolean', value: true},
    {title: 'getBodyWrapper', type: '(body) => ReactNode',value: (body) => <div>{body}</div>},
    {title: 'bodyStyle', type: 'object', value: {color: 'green'}},
    {title: 'style', type: 'object', value: {color: 'red'}},
    {title: 'scroll', type: '{x: number|string, y: number}', value: {x: 3200, y: 200}},
    {title: 'headerScroll', type: 'boolean', value: true},
    {title: 'footerScroll', type: 'boolean', value: true},
    {title: 'resetScroll', type: 'boolean', value: true},
    {title: 'filterable', type: 'boolean', value: true},
    {title: 'filterDelay', type: 'number', value: 500},
    {title: 'sort', type: 'object', value: {mode: 'single', backSource: false}},
    {title: 'syncHover', type: 'boolean', value: false},
    {title: 'loadBuffer', type: 'number',value: 20},
    {title: 'hoverContent', type: '() => ReactNode', value: () => <div>测试DOM</div>},
    {title: 'heightConsistent', type: 'boolean', value: true},
    {title: 'height', type: 'number', value: 265},
    {title: 'headerHeight', type: 'number', value: 355},
    {title: 'headerDisplayInRow', type: 'boolean', value: false},
    {title: 'bodyDisplayInRow', type: 'boolean', value: false},
    {title: 'size', type: '"sm"|"md"|"lg"', value: 'sm'},
    {title: 'hideHeaderScroll', type: 'boolean', value: true},
    {title: 'showRowNum', type: 'boolean', value: true},
    {title: 'autoCheckedByClickRows', type: 'boolean', value: false},
    {title: 'autoSelect', type: 'boolean', value: true},
]
export const tableEvent = [
    {title: 'onExpand', argunments: ['expanded', 'record'], value: (expanded, record) => console.log(expanded, record)},
    {title: 'onExpandedRowsChange', argunments: ['expandedRowKeys'], value: (expandedRowKeys) => console.log(expandedRowKeys)},
    {title: 'onRowClick', argunments: ['record', 'index', 'event'], value: (record, index, event) => console.log(record, index, event)},
    {title: 'onRowDoubleClick', argunments: ['record', 'index', 'event'], value: (record, index, event) => console.log(record, index, event)},
    {title: 'onFilterChange', argunments: ['field', 'value', 'condition'], value: (field, value, condition) => console.log(field, value, condition)},
    {title: 'onFilterClear', argunments: ['field'], value: (field) => console.log(field)},
    {title: 'onRowHover', argunments: ['index', 'record'], value: (index, record) => console.log(index, record)},
    {title: 'onDragRowStart', argunments: ['record', 'index'], value: (record, index) => console.log(record, index)},
    {title: 'onDropRow', argunments: ['data', 'record'], value: (data, record) => console.log(data, record)},
]
export const tableColumns = [
    {title: 'key', type: 'string'},
    {title: 'className', type: 'string'},
    {title: 'colSpan', type: 'number'},
    {title: 'title', type: 'string|ReactNode'},
    {title: 'dataIndex', type: 'string'},
    {title: 'width', type: 'string|number'},
    {title: 'sorter', type: '() => boolean'},
    {title: 'sorterClick', type: '() => void'},
    {title: 'render', type: '(text, record, index) => {children: ReactNode, props: {colSpan: number, rowSpan: number}}'},
    {title: 'onCellClick', type: '(row, event) => void'},
    {title: 'onHeadCellClick', type: '(row, event) => void'},
    {title: 'order', type: '"descend"|"ascend"'},
    {title: 'filterType', type: '"text"|"dropdown"|"date"|"daterange"|"number"'},
    {title: 'filterDropdown', type: '"show"|"hide"'},
    {title: 'format', type: 'string'},
    {title: 'filterDropdownAuto', type: '"auto"|"manual"|"filterDropdownData"'},
    {title: 'filterDropdownData', type: '{key: any, value: any}'},
    {title: 'filterDropdownFocus', type: '() => void'},
    {title: 'filterDropdownType', type: '"string"|"number"'},
    {title: 'filterDropdownIncludeKeys', type: 'string[]'},
    {title: 'filterInputNumberOptions', type: 'object'},
    {title: 'textAlign', type: '"left"|"center"|"right"'},
    {title: 'mergeEndIndex', type: 'number'},
    {title: 'sortEnable', type: 'boolean'},
    {title: 'fieldType', type: '"string"|"number"|"cruuency"|"bool"|"link"'},
    {title: 'fontColor', type: 'string'},
    {title: 'bgColor', type: 'string'},
    {title: 'titleAlign', type: '"left"|"center"|"right"'},
    {title: 'contentAlign', type: '"left"|"center"|"right"'},
    {title: 'required', type: 'boolean'},
    {title: 'isShow', type: 'boolean'},
    {title: 'cellMenu', type: 'object'},

];
export const tableData = [
    {title: '_disabled', type: 'boolean'},
    {title: '_checked', type: 'boolean'},
];
export const APIData = [
    {title: 'Grid.props', key: 'props', children: tableProps},
    {title: 'Grid.event', key: 'event', children: tableEvent},
    {title: 'Grid.columns', key: 'columns', children: tableColumns},
    {title: 'Grid.data', key: 'data', children: tableData},
]

