import {Icon, Pagination } from '@tinper/next-ui'
export const treeData = [
    {
        title: 'Pagination',
        key: '0-0',
        children: [
            // {
            //     title: '总页数',
            //     attribute: 'items',
            //     set: [{type: 'input', title: '设置最后一个虚线节点', key: 'pending'}],
            // },
			{
				title: '当前页码',
				attribute: 'current',
				set: [{type: 'input', title: '设置当前页码current(activePage)', key: 'current'}],
			},
			{
				title: '设置默认页码',
				attribute: 'defaultCurrent',
				set: [{type: 'input', title: '设置默认页码', key: 'defaultCurrent'}],
			},
			{
				title: '显示最多页数按钮',
				attribute: 'maxButtons',
				set: [{type: 'input', title: '显示最多页数按钮', key: 'maxButtons'}],
			},
			{
				title: '显示上一页按钮',
				attribute: 'prev',
				set: [{type: 'radio', title: '显示上一页按钮', key: 'prev', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '显示下一页按钮',
				attribute: 'next',
				set: [{type: 'radio', title: '显示下一页按钮', key: 'next', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '显示第一页按钮',
				attribute: 'first',
				set: [{type: 'radio', title: '显示第一页按钮', key: 'first', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '显示最后一页按钮',
				attribute: 'last',
				set: [{type: 'radio', title: '显示最后一页按钮', key: 'last', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '显示省略按钮',
				attribute: 'ellipsis',
				set: [{type: 'radio', title: '显示省略按钮', key: 'ellipsis', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '显示边界按钮',
				attribute: 'boundaryLinks',
				set: [{type: 'radio', title: '显示最后一页按钮', key: 'boundaryLinks', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '按钮之间有间隔',
				attribute: 'gap',
				set: [{type: 'radio', title: '按钮之间有间隔', key: 'gap', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '不显示按钮边框',
				attribute: 'noBorder',
				set: [{type: 'radio', title: '不显示按钮边框', key: 'noBorder', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '分页按钮大小',
				attribute: 'size',
				set: [{type: 'radio', title: '分页按钮大小', key: 'size', options: [{title: 'sm', value: 'sm'}, {title: 'md', value: 'md'}, {title: 'lg', value: 'lg'}]}],
			},
			{
				title: '是否显示跳页选择',
				attribute: 'showQuickJumper',
				set: [{type: 'radio', title: '是否显示跳页选择', key: 'showQuickJumper', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: 'dataNumSelect下标设置（原来pageSize方案）',
				attribute: 'dataNum',
				set: [{type: 'radio', title: '每页显示条数在 dataNumSelect 数组中的下标 index', key: 'dataNum', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '禁用状态',
				attribute: 'disabled',
				set: [{type: 'radio', title: '禁用状态', key: 'disabled', options: [{title: '是', value: true}, {title: '否', value: false}]}],
			},
			{
				title: '默认每页数量',
				attribute: 'defaultPageSize',
				set: [{type: 'input', title: '默认每页数量', key: 'total'}],
			},
			{
				title: '每页数量',
				attribute: 'pageSize',
				set: [{type: 'input', title: '每页数量', key: 'total'}],
			},
			{
				title: '设置一共多少条',
				attribute: 'total',
				set: [{type: 'input', title: '设置一共多少条', key: 'total'}],
			},
			{
				title: '设置一共多少条',
				attribute: 'total',
				set: [{type: 'input', title: '设置一共多少条', key: 'total'}],
			},
			{
				title: '分页的大小存储在cookie中',
				attribute: 'sizeWithCookie',
				set: [{type: 'input', title: '分页的大小存储在cookie中', key: 'sizeWithCookie'}],
			},
        ],
    },
];
export const renderComponent = ({props, itemProps}) => (<Pagination {...props} />)
export const PaginationProps = [
    {key: 'props.items', title: 'pending', type: 'number', value: 1},
    {key: 'props.current', title: 'pending', type: 'number', value: 1},
    {key: 'props.items', title: 'pending', type: 'number', value: 1},
    {key: 'props.items', title: 'pending', type: 'number', value: 1},
    {key: 'props.items', title: 'pending', type: 'number', value: 1},
    {key: 'props.items', title: 'pending', type: 'number', value: 1},
    {key: 'props.items', title: 'pending', type: 'number', value: 1},
]
export const APIData = [
    {title: 'Timeline', key: 'props', children: PaginationProps},
]

