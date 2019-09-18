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
                set: [{type: 'radio', title: '工具栏组件', key: 'ToolBar', options: [{title: 'true', value: true}, {title: 'false', value: false}]}],
            },
        ],
    },
];

