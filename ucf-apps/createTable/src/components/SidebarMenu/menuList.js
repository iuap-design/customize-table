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
                key: '0-0-4'
            },
            {
                title: '设置纵向滚动条(固定表头)',
                key: '0-0-5'
            }
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
                title: '内容对齐方式',
                key: '0-1-8',
                attribute: 'contentAlign',
            },
            {
                title: '必填项,列标题展示红色星号',
                key: '0-1-9',
                attribute: 'required',
            }
        ],
    },
    {
        title: '列操作',
        key: '0-2',
        children: [
            {
                title: '显示表头',
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