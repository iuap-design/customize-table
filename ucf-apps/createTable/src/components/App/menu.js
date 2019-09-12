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
            {
                title: '自定义表格标题',
                attribute: 'title',
                set: [
                    {type: 'input', title: '自定义表格标题', key: 'title'},
                ],
            },
            {
                title: '自定义表格表尾',
                attribute: 'footer',
                set: [
                    {type: 'input', title: '表格表尾', key: 'footer'},
                ],
            },
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
                title: '排序-开启/关闭排序',
                attribute: 'columns[i].sorter',
                set: [
                    {type: 'radio', title: '开启排序-columns', key: 'columns[i].sorter', options: [{title: 'function', value: true}, {title: 'undefined', value: false}]},
                ],
            },
            {
                title: '排序-单维/多维',
                attribute: 'columns[i].sorter',
                set: [
                    {type: 'radio', title: '单维/多维', key: 'sort', options: [{title: '单维-{mode: "single"}', value: "single"}, {title: '多维-{mode: "multiple"}', value: 'multiple'}]},
                ],
            },
        ],
    },
    {
        title: '列操作-拖拽 Drag',
        key: '0-4-3',
        children: [
            {
                title: '拖拽交换列',
                attribute: 'draggable',
                set: [
                    {type: 'radio', title: '拖拽交换列', key: 'draggable', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            },
            {
                title: '拖拽调整列宽度',
                attribute: 'dragborder',
                set: [
                    {type: 'radio', title: '拖拽交换列', key: 'dragborder', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            },

        ],
    },
    {
        title: '扩展行 Expanded Row',
        key: '0-4-6',
        children: [
            {
                title: '自定义扩展行内容',
                attribute: 'expandedRowRender',
                set: [
                    {type: 'input', title: '自定义扩展行内容', key: 'expandedRowRender'},
                ],
            },
            {
                title: '展开行通过点击触发',
                attribute: 'expandRowByClick',
                set: [
                    {type: 'radio', title: '展开行通过点击触发', key: 'expandRowByClick', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            }
        ],
    },
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
            {
                title: '选择通过点击行触发',
                attribute: 'autoCheckedByClickRows',
                set: [
                    {type: 'radio', title: '选择通过点击行触发', key: 'autoCheckedByClickRows', options:
                            [
                                {title: 'true', value: true},
                                {title: 'false', value: false},
                            ]
                    }
                ],
            },
        ],
    },
    {
        title: '行操作-拖拽 Drag',
        key: '0-4-7',
        children: [
            {
                title: '拖拽交换顺序',
                attribute: 'rowDraggAble',
                set: [
                    {
                        type: 'radio', title: '单选/拖拽交换顺序/无', key: 'rowDraggAble', options:
                            [
                                {title: 'true', value: true},
                                {title: 'false', value: false},
                            ]
                    }
                ],
            },
        ],
    },
    {
        title: '导出 Export',
        key: '0-4-4',
        children: [
            {
                title: '导出Excel',
                attribute: 'export',
                set: [
                    {type: 'input', title: '导出文件名', key: 'exportFileName'},
                    {
                        type: 'radio', title: '导出数据', key: 'exportData', options:
                            [
                                {title: 'data', value: 'data'},
                                {title: '[1, 2, 3]', value: [1, 2, 3]},
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
export const tableMethods = [
    {key: 'props.resetColumns', title: 'resetColumns', value: "this.refs.grid.exportExcel()"},
    {key: 'props.exportExcel', title: 'exportExcel', value: "this.refs.grid.exportExcel()"},
]
export const tableProps = [
    {key: 'props.data', title: 'data', type: 'object[]', value: 'data',},
    {key: 'props.columns', title: 'columns', type: 'object[]', value: 'columns', disabled: true},
    {key: 'props.bordered', title: 'bordered', type: 'boolean', value: true},
    {key: 'props.defaultExpandAllRows', title: 'defaultExpandAllRows', type: 'boolean', value: true},
    {key: 'props.defaultExpandedRowKeys', title: 'defaultExpandedRowKeys', type: 'string[]', value: [1, 2, 3]},
    {key: 'props.rowRef', title: 'rowRef', type: '(record, index, indent) => string', value: (record) => "table"},
    {key: 'props.rowKey', title: 'rowKey', type: 'string|(record, index) => string', value: (record) => record.a},
    {key: 'props.expandedRowKeys', title: 'expandedRowKeys', type: 'string[]', value: [3, 4, 5]},
    {key: 'props.rowClassName', title: 'rowClassName', type: '() => string', value: () => "testRowClassName"},
    {key: 'props.expandedRowClassName', title: 'expandedRowClassName', type: '() => string', value: () => "testExpandedRowClassName"},
    {key: 'props.indentSize', title: 'indentSize', type: 'number', value: 15},
    {key: 'props.expandIconAsCell', title: 'expandIconAsCell', type: 'boolean', value: true},
    {key: 'props.expandIconColumnIndex', title: 'expandIconColumnIndex', type: 'number', value: 2},
    {key: 'props.expandedRowRender', title: 'expandedRowRender', type: '(record, index, indent) => ReactNode', value: (record) => <div>{record.a}</div>},
    {key: 'props.haveExpandIcon', title: 'haveExpandIcon', type: '() => boolean', value: () => true},
    {key: 'props.expandedIcon', title: 'expandedIcon', type: 'ReactNode', value: <Icon  />},
    {key: 'props.collapsedIcon', title: 'collapsedIcon', type: 'ReactNode', value: <Icon  />},
    {key: 'props.expandRowByClick', title: 'expandRowByClick', type: 'boolean', value: true},
    {key: 'props.rowDraggAble', title: 'rowDraggAble', type: 'boolean', value: true},
    {key: 'props.showHeader', title: 'showHeader', type: 'boolean', value: true},
    {key: 'props.title', title: 'title', type: '() => ReactNode', value: (record) => <div>测试标题</div>},
    {key: 'props.footer', title: 'footer', type: '() => ReactNode', value: (record) => <div>测试尾部</div>},
    {key: 'props.emptyText', title: 'emptyText', type: '() => ReactNode', value: (record) => <div>无数据显示</div>},
    {key: 'props.loading', title: 'loading', type: 'boolean', value: true},
    {key: 'props.getBodyWrapper', title: 'getBodyWrapper', type: '(body) => ReactNode',value: (body) => body},
    {key: 'props.bodyStyle', title: 'bodyStyle', type: 'object', value: {color: 'green'}},
    {key: 'props.style', title: 'style', type: 'object', value: {color: 'red'}},
    {key: 'props.scroll', title: 'scroll', type: '{x: number|string, y: number}', value: {x: 3200, y: 200}},
    {key: 'props.headerScroll', title: 'headerScroll', type: 'boolean', value: true},
    {key: 'props.footerScroll', title: 'footerScroll', type: 'boolean', value: true},
    {key: 'props.resetScroll', title: 'resetScroll', type: 'boolean', value: true},
    {key: 'props.filterable', title: 'filterable', type: 'boolean', value: true},
    {key: 'props.filterDelay', title: 'filterDelay', type: 'number', value: 500},
    {key: 'props.sort', title: 'sort', type: 'object', value: {mode: 'single', backSource: false}},
    {key: 'props.syncHover', title: 'syncHover', type: 'boolean', value: false},
    {key: 'props.loadBuffer', title: 'loadBuffer', type: 'number',value: 20},
    {key: 'props.hoverContent', title: 'hoverContent', type: '() => ReactNode', value: () => <div>测试DOM</div>},
    {key: 'props.heightConsistent', title: 'heightConsistent', type: 'boolean', value: true},
    {key: 'props.height', title: 'height', type: 'number', value: 265},
    {key: 'props.headerHeight', title: 'headerHeight', type: 'number', value: 355},
    {key: 'props.headerDisplayInRow', title: 'headerDisplayInRow', type: 'boolean', value: false},
    {key: 'props.bodyDisplayInRow', title: 'bodyDisplayInRow', type: 'boolean', value: false},
    {key: 'props.size', title: 'size', type: '"sm"|"md"|"lg"', value: 'sm'},
    {key: 'props.hideHeaderScroll', title: 'hideHeaderScroll', type: 'boolean', value: true},
    {key: 'props.showRowNum', title: 'showRowNum', type: 'boolean', value: true},
    {key: 'props.autoCheckedByClickRows', title: 'autoCheckedByClickRows', type: 'boolean', value: false},
    {key: 'props.autoSelect', title: 'autoSelect', type: 'boolean', value: true},
    {key: 'props.showFilterMenu', title: 'showFilterMenu', type: 'boolean', value: true},
    {key: 'props.columnFilterAble', title: 'columnFilterAble', type: 'boolean', value: false},
    {key: 'props.paginationObj', title: 'paginationObj', type: 'object', value: false},
    {key: 'props.showHeaderMenu', title: 'showHeaderMenu', type: 'boolean', value: false},
    {key: 'props.multiSelect', title: 'multiSelect', type: '{type: string}', value: {type: 'radio'}},
    {key: 'props.exportFileName', title: 'exportFileName', type: 'string', value: 'API_Eecel'},
    {key: 'props.sheetName', title: 'sheetName', type: 'boolean', value: false},
    {key: 'props.sheetHeader', title: 'sheetHeader', type: 'object', value: {height: 30}},
    {key: 'props.sheetIsRowFilter', title: 'sheetIsRowFilter', type: 'boolean', value: true},
    {key: 'props.exportData', title: 'exportData', type: 'array', value: ['1', '2', '3']},
    {key: 'props.canSum', title: 'canSum', type: 'boolean', value: true},
    {key: 'props.afterRowFilter', title: 'afterRowFilter', type: '() => void', value: (select, record) => console.log(select,record)},
    {key: 'props.getSelectedDataFunc', title: 'getSelectedDataFunc', type: '() => void', value: (select, record) => console.log(select,record)},
    {key: 'props.dragborder', title: 'dragborder', type: 'boolean', value: true},
    {key: 'props.selectedRow', title: 'selectedRow', type: '() => []', value: () => [3, 4]},
    {key: 'props.selectedRowIndex', title: 'selectedRowIndex', type: 'number', value: 3},
]
export const tableEvent = [
    {title: 'onExpand', arguments: ['expanded', 'record'], value: (expanded, record) => console.log(expanded, record)},
    {title: 'onExpandedRowsChange', arguments: ['expandedRowKeys'], value: (expandedRowKeys) => console.log(expandedRowKeys)},
    {title: 'onRowClick', arguments: ['record', 'index', 'event'], value: (record, index, event) => console.log(record, index, event)},
    {title: 'onRowDoubleClick', arguments: ['record', 'index', 'event'], value: (record, index, event) => console.log(record, index, event)},
    {title: 'onFilterChange', arguments: ['field', 'value', 'condition'], value: (field, value, condition) => console.log(field, value, condition)},
    {title: 'onFilterClear', arguments: ['field'], value: (field) => console.log(field)},
    {title: 'onRowHover', arguments: ['index', 'record'], value: (index, record) => console.log(index, record)},
    {title: 'onDragRowStart', arguments: ['record', 'index'], value: (record, index) => console.log(record, index)},
    {title: 'onDropRow', arguments: ['data', 'record'], value: (data, record) => console.log(data, record)},
]
export const tableColumns = [
    {
        key: 'columns.key', title: 'key', type: 'string',
        onSelect: (columns) => onColumnsSelect({columns, key: 'key', value: 'a', index: 1})
    },
    {
        key: 'columns.className', title: 'className', type: 'string',
        onSelect: (columns) => onColumnsSelect({key: 'className', value: 'testClassName', index: 1, columns})
    },
    {
        key: 'columns.colSpan', title: 'colSpan', type: 'number',
        onSelect: (columns) => onColumnsSelect({columns, key: 'colSpan', value: 2, index: 1})
    },
    {
        key: 'columns.title', title: 'title', type: 'string|ReactNode',
        onSelect: (columns) => onColumnsSelect({columns, key: 'title', value: '离职时间', initValue: '入职时间', index: 1})
    },
    {
        key: 'columns.dataIndex', title: 'dataIndex', type: 'string', disabled: true,
        onSelect: (columns) => onColumnsSelect({columns, key: 'dataIndex', value: 'a', initValue: 'time', index: 0})
    },
    {
        key: 'columns.width', title: 'width', type: 'string|number',
        onSelect: (columns) => onColumnsSelect({columns, key: 'width', value: '230px', index: 1})
    },
    {
        key: 'columns.sorter', title: 'sorter', type: '() => boolean',
        onSelect: (columns) => onColumnsSelect({columns, key: 'sorter', value: (a, b) =>a.time - b.time, index: '1'})
    },
    {
        key: 'columns.sorterClick', title: 'sorterClick', type: '() => void',
        onSelect: (columns) => onColumnsSelect({columns, key: 'sorterClick', value: () =>console.log(arguments), index: '1'})
    },
    {
        key: 'columns.render', title: 'render', type: '(text, record, index) => {children: ReactNode, props: {colSpan: number, rowSpan: number}}',
        onSelect: (columns) =>
            onColumnsSelect({columns, key: 'render', value: (text) => {
                return {
                    children: <div>{'入职时间' + text}</div>,
                    props: {colSpan: 2, rowSpan: 1}
                }
            }, index: 1})
    },
    {
        key: 'columns.onCellClick', title: 'onCellClick', type: '(row, event) => void',
        onSelect: (columns) => onColumnsSelect({columns, key: 'onCellClick', value: (row, event) =>console.log(row, event), index: '1'})
    },
    {
        key: 'columns.onHeadCellClick', title: 'onHeadCellClick', type: '(row, event) => void',
        onSelect: (columns) => onColumnsSelect({columns, key: 'onHeadCellClick', value: (row, event) =>console.log(row, event), index: '1'})
    },
    {
        key: 'columns.order', title: 'order', type: '"descend"|"ascend"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'order', value: 'ascend', index: 'i'})
    },
    {
        key: 'columns.filterType', title: 'filterType', type: '"text"|"dropdown"|"date"|"daterange"|"number"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'filterType', value: 'dropdown', index: 'i'})
    },
    {
        key: 'columns.filterDropdown', title: 'filterDropdown', type: '"show"|"hide"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'filterDropdown', value: 'show', index: 'i'})
    },
    {
        key: 'columns.format', title: 'format', type: 'string',
        onSelect: (columns) => onColumnsSelect({columns, key: 'format', value: '', index: 1})
    },
    {
        key: 'columns.filterDropdownAuto', title: 'filterDropdownAuto', type: '"auto"|"manual"|"filterDropdownData"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'filterDropdownAuto', value: 'filterDropdownData', index: 1})
    },
    {
        key: 'columns.filterDropdownData', title: 'filterDropdownData', type: '{key: any, value: any}'
    },
    {
        key: 'columns.filterDropdownFocus', title: 'filterDropdownFocus', type: '() => void',
        onSelect: (columns) => onColumnsSelect({columns, key: 'filterDropdownFocus', value: () => console.log('filterDropdownFocus'), index: 'i'})
    },
    {
        key: 'columns.filterDropdownType', title: 'filterDropdownType', type: '"string"|"number"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'filterDropdownType', value: 'number', index: 'i'})
    },
    {
        key: 'columns.filterDropdownIncludeKeys', title: 'filterDropdownIncludeKeys', type: 'string[]'
    },
    {
        key: 'columns.filterInputNumberOptions', title: 'filterInputNumberOptions', type: 'object'
    },
    {
        key: 'columns.textAlign', title: 'textAlign', type: '"left"|"center"|"right"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'textAlign', value: 'right', index: 'i'})
    },
    {
        key: 'columns.sortEnable', title: 'sortEnable', type: 'boolean',
        onSelect: (columns) => onColumnsSelect({columns, key: 'sortEnable', value: true, index: 1})
    },
    {
        key: 'columns.fieldType', title: 'fieldType', type: '"string"|"number"|"cruuency"|"bool"|"link"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'fieldType', value: 'link', index: 0})
    },
    {
        key: 'columns.fontColor', title: 'fontColor', type: 'string',
        onSelect: (columns) => onColumnsSelect({columns, key: 'fontColor', value: 'green', index: 2})
    },
    {
        key: 'columns.bgColor', title: 'bgColor', type: 'string',
        onSelect: (columns) => onColumnsSelect({columns, key: 'bgColor', value: 'red'})
    },
    {
        key: 'columns.titleAlign', title: 'titleAlign', type: '"left"|"center"|"right"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'titleAlign', value: 'center'})
    },
    {
        key: 'columns.contentAlign', title: 'contentAlign', type: '"left"|"center"|"right"',
        onSelect: (columns) => onColumnsSelect({columns, key: 'contentAlign', value: 'center'})
    },
    {
        key: 'columns.required', title: 'required', type: 'boolean',
        onSelect: (columns) => onColumnsSelect({columns, key: 'required', value: true})
    },
    {
        key: 'columns.isShow', title: 'isShow', type: 'boolean',
        onSelect: (columns) => onColumnsSelect({columns, key: 'isShow', value: false})
    },
    {
        key: 'columns.cellMenu', title: 'cellMenu', type: 'object'
    },
];
function onColumnsSelect({key, value, index = 1, columns}) {
    index === 'i' ? columns.map(item => item[key] = value) : columns[index][key] = value;
}
export const tableData = [
    {
        title: '_disabled', type: 'boolean', onSelect: (data) => {
            data[2]._disabled = true;
        }
    },
    {title: '_checked', type: 'boolean', onSelect: (data) => {
            data[2]._checked = true;
        }},
];
export const APIData = [
    {title: 'Grid.props', key: 'props', children: tableProps},
    {title: 'Grid.event', key: 'event', children: tableEvent},
    {title: 'Grid.columns', key: 'columns', children: tableColumns},
    {title: 'Grid.data', key: 'data', children: tableData},
    {title: 'Grid.methods', key: 'methods', children: tableMethods},
]

