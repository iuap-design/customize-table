export const treeData = [
    {
        title: '基础 Basic',
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
                set: [{type: 'select', key: 'loading', options: [{title: 'true', value: true}, {title: 'false', value: false}]}],
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
                    {type: 'select', key: 'showRowNum', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            },
            {
                title: '自定义无数据显示',
                attribute: 'emptyText',
                set: [
                    {type: 'select', key: 'data', options: [{title: '[]', value: 'none'}, {title: 'data', value: 'data'}]},
                    {type: 'input', key: 'emptyText'}
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
                    {type: 'input', key: 'scroll.x'},
                    {type: 'input', key: 'scroll.y'}
                ],
            },
        ],
    },
    {
        title: '列渲染 Custom Render',
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
        title: '列操作-锁定 Fixed',
        key: '0-3',
        children: [
            {
                title: '列固定',
                attribute: 'columns[2].fixed',
                set: [
                    {type: 'select', key: 'columns[2].fixed', options: [{title: 'left', value: 'left'}, {title: 'right', value: 'right'}]},
                ],
            },
            {
                title: '动态设置列锁定、解除锁定',
                attribute: 'showHeaderMenu',
                set: [
                    {type: 'select', key: 'showHeaderMenu', options: [{title: 'true', value: true}, {title: 'false', value: false}]},
                ],
            },
        ],
    },
    // {
    //     title: '列操作-过滤 Filter',
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
    //     title: '列操作-隐藏 Hide',
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
    //     title: '列操作-排序 Sort',
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
    // {
    //     title: '行操作-选择',
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
        key: '0-4',
        attribute: 'paginationObj',
        children: [
            {
                title: '分页',
                attribute: 'paginationObj',
                set: [{type: 'select', key: 'paginationObj', options: [{title: 'paginationObj', value: 'paginationObj'}, {title: 'none', value: false}]}],
            },
        ],
    },
    // {
    //     title: '工具栏 Toobar',
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

