import { actions } from 'mirrorx';
import { Select } from 'tinper-bee';
const Option = Select.Option;
const treeData = [
    {
        title: 'Table基础配置',
        key: '0-0',
        children: [
            {
                title: '隔行换色',
                attribute: 'zebraCrossing',
                key: '0-0-1',
                matters: 'zebraCrossing: 通过给table添加className "zebra-table" 实现, 并非zebraCrossing=true实现',
            },
            {
                title: '显示边框',
                attribute: 'bordered',
                key: '0-0-2',
            },
            {
                title: 'Loading状态',
                attribute: 'loading',
                key: '0-0-3',
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
                matters: 'size: 通过改变行高height来渲染不同大小的表格,优先级低于height属性.',
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
                title: '无数据显示',
                attribute: 'emptyText',
                key: '0-0-10',
                type: 'input',
                matters: 'emptyText: 接受一个函数,返回一个ReactNode.',
            },
            {
                title: 'tablebody上的style',
                attribute: 'bodyStyle',
                key: '0-0-11',
                type: 'select',
                options: [
                    {title: '字体红色', value: 'red'},
                    {title: '字体绿色', value: 'green'},
                ],
                matters: 'emptyText: 接受一个函数,返回一个ReactNode.',
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

export default treeData;