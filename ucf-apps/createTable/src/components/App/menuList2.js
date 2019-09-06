export const treeData = [
    {
        title: 'Table基础配置',
        key: '0-0',
        children: [
            {
                title: '隔行换色',
                attribute: 'zebraCrossing',
                set: [{type: 'select', key: 'className', options: [{title: 'zebra-table', value: 'zebra-table'}, {title: '无', value: undefined}]}],
            },
            {
                title: '显示边框',
                attribute: 'bordered',
                set: [{type: 'select', key: 'bordered', options: [{title: 'true', value: true}, {title: 'false', value: false}]}],
            },
            {
                title: 'Loading状态',
                attribute: 'loading',
                type: 'select',
                options: [
                    {title: '显示', value: true},
                    {title: '隐藏', value: false},
                ],
            },
            {
                title: '表格标题',
                attribute: 'title',
                key: '0-0-4',
                type: 'input',
                matters: 'title: 传入一个函数,该函数返回一个ReactNode.',
            },
            {
                title: '表格大小',
                key: '0-0-5',
                attribute: 'size',
                type: 'select',
                options: [
                    {title: 'sm', value: 'sm'},
                    {title: 'md', value: 'md'},
                    {title: 'lg', value: 'lg'},
                ],
                matters: 'size: 优先级低于height属性.',
            },
            {
                title: '自定义表格高度',
                key: '0-0-6',
                type: 'input',
                attribute: 'height',
            },
            {
                title: '自定义表头高度',
                key: '0-0-6-1',
                type: 'input',
                attribute: 'headerHeight',
            },
            {
                title: '显示表头',
                attribute: 'showHeader',
                key: '0-0-7',
                matters: 'showHeader: 默认为true',
            },
            {
                title: '显示序号列',
                attribute: 'showRowNum',
                key: '0-0-8',
                matters: 'showRowNum: Boolean|Object',
            },
            {
                title: '表格数据单行展示',
                attribute: 'bodyDisplayInRow',
                key: '0-0-9',
            },
            {
                title: '自定义数据显示',
                attribute: 'emptyText',
                key: '0-0-10',
                type: 'input',
            },
        ],
    },
    {
        title: '滚动条',
        key: '0-1',
        children: [
            {
                title: '横向滚动条配置',
                attribute: 'scrollX',
                key: '0-1-1',
                matters: 'scroll: {x: Number|Boolean|String(percent)} x小写',
            },
            {
                title: '纵向滚动条配置',
                attribute: 'scrollY',
                key: '0-1-2',
                matters: 'scroll: {y: Number|Boolean|String(percent)} y小写',
            },
            {
                title: '表头滚动条',
                attribute: 'headerScroll',
                key: '0-1-3',
            },
            {
                title: '表尾和body公用一个滚动条',
                attribute: 'footerScroll',
                key: '0-1-4',
                matters: ' 如果footer中也是一个table组件,并且也具有滚动条,那么也需要加入footerScroll参数,内层表格的footerScroll设置成false.'
            },
            {
                title: '横向滚动条还原',
                attribute: 'resetScroll',
                key: '0-1-5',
            },
        ],
    },
    {
        title: 'Table过滤',
        key: '0-2',
        children: [
            {
                title: '开启过滤',
                attribute: 'filterable',
                key: '0-2-1',
                matters: '对于columns配置的filterType=text，onFilterChange在选择右侧的筛选项后触发'
            },
            {
                title: '过滤输入的延迟时间',
                attribute: 'filterDelay',
                type: 'input',
                key: '0-2-2',
            },
        ],
    },
    {
        title: '行事件',
        key: '0-3',
        children: [
            {
                title: '行点击事件',
                attribute: 'onRowClick',
                key: '0-3-1',
                event: true,
                matters: 'onRowClick:单击事件有三个参数，分别是index，record，event'
            },
            {
                title: '行双击事件',
                attribute: 'onRowDoubleClick',
                key: '0-3-2',
                event: true,
                matters: 'onRowDoubleClick:双击事件有三个参数，分别是index，record，event'
            },
            {
                title: '行Hover事件',
                attribute: 'onRowHover',
                key: '0-3-4',
                event: true,
                matters: 'onRowHover:Hover事件和单击双击事件不同，只有两个参数，且第一个是record，第二个是index'
            },
        ],
    },
    {
        title: 'Columns基础配置',
        key: '0-4',
        children: [
            {
                title: '列宽度',
                attribute: 'columns[i].width',
                type: 'input',
                key: '0-4-1',
            },
            {
                title: '固定列',
                attribute: 'columns[i].fixed',
                key: '0-4-2',
                type: 'select',
                options: [
                    {title: '固定在左', value: 'left'},
                    {title: '固定在右', value: 'right'},
                ],
            },
            {
                title: '标题对齐方式',
                attribute: 'columns[i].titleAlign',
                key: '0-4-3',
                type: 'select',
                options: [
                    {title: '左对齐', value: 'left'},
                    {title: '居  中', value: 'center'},
                    {title: '右对齐', value: 'right'},
                ],
            },
            {
                title: '内容对齐方式',
                attribute: 'columns[i].contentAlign',
                key: '0-4-4',
                type: 'select',
                options: [
                    {title: '左对齐', value: 'left'},
                    {title: '居  中', value: 'center'},
                    {title: '右对齐', value: 'right'},
                ],
            },
            {
                title: '全部对齐方式',
                attribute: 'columns[i].textAlign',
                key: '0-4-5',
                type: 'select',
                options: [
                    {title: '左对齐', value: 'left'},
                    {title: '居  中', value: 'center'},
                    {title: '右对齐', value: 'right'},
                ],
                matters: 'textAlign: 优先级低于contentAlign和titleAlign'
            },
        ],
    }
];
export const GridData = [
    {
        title: 'Grid特殊配置',
        key: '0-last',
        children: [
            {
                title: '显示表头菜单',
                attribute: 'showHeaderMenu',
                key: '0-last-1',
            },
            {
                title: '分页',
                attribute: 'paginationObj',
                key: '0-last-2',
            },
            {
                title: '单选/多选/无',
                attribute: 'multiSelect',
                key: '0-last-3',
                type: 'select',
                options: [
                    {title: '单选', value: 'radio'},
                    {title: '多选', value: 'checkbox'},
                    {title: '无', value: 'none'},
                ],
                matters: 'multiSelect:只在初始化生效，无法动态修改'
            },
        ],
    }
];
export const MultiSelectData = [
    {
        title: 'MultiSelect特殊配置',
        key: '1-last',
        children: [
            {
                title: '操作选中回调函数',
                attribute: 'getSelectedDataFunc',
                key: '1-last-1',
                event: true,
            },
            {
                title: '点击行自动选中',
                attribute: 'autoCheckedByClickRows',
                key: '1-last-2',
                event: true,
            },
            {
                title: '某一行操作(演示第二行)',
                attribute: 'data[i]._checked',
                key: '1-last-3',
                event: true,
            },
            {
                title: '某一行不可操作(演示第三行)',
                attribute: 'data[i]._disabled',
                key: '1-last-4',
                event: true,
            },
        ],
    }
];
export const SortData = [
    {
        title: 'Sort特殊配置',
        key: '2-last',
        children: [
            {
                title: '排序函数',
                attribute: 'columns[i].sorter',
                key: '2-last-1',
            },
            {
                title: '排序钩子函数',
                attribute: 'columns[i].sorterClick',
                key: '2-last-2',
            },
        ],
    }
];
export const SumData = [
    {
        title: 'Sum特殊配置',
        key: '3-last',
        children: [
            {
                title: '需要合计的列（演示第二列）',
                attribute: 'columns[i].sumCol',
                key: '3-last-1',
            },
        ],
    }
];
export const FilterColumnData = [
    {
        title: 'FilterColumn特殊配置',
        key: '3-last',
        children: [
            {
                title: '列过滤后的回调函数',
                attribute: 'afterFilter',
                key: '3-last-1',
            },
            {
                title: '列是否显示',
                attribute: 'columns[i].ifshow',
                key: '3-last-2',
            },
        ],
    }
];
export const leftMenuData = [
    {
        title: 'Table',
        key: '0-0',
    },
    {
        title: 'SingleSelectTable',
        key: '0-1',
    },
    {
        title: 'MultiSelectTable',
        key: '0-2',
    },
    {
        title: 'SortTable',
        key: '0-3',
    },
    {
        title: 'SumTable',
        key: '0-4',
    },
    {
        title: 'DragColumnTable',
        key: '0-5',
    },
    {
        title: 'FilterColumnTable',
        key: '0-6',
    },
    {
        title: 'BigDataTable',
        key: '0-7',
    },
    {
        title: 'Grid',
        key: '0-8',
    },
];

