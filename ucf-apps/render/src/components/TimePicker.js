import {Icon, Timeline } from '@tinper/next-ui'
export const treeData = [
    {
        title: 'Timeline',
        key: '0-0',
        children: [
            {
                title: '最后一个虚线节点',
                attribute: 'pending',
                set: [{type: 'input', title: '设置最后一个虚线节点', key: 'pending'}],
            }
        ],
    },
	{
		title: 'Timeline.item',
		key: '0-1',
		children: [
			{
				title: '设置圆环的颜色',
				attribute: 'color',
				set: [{type: 'radio', title: '设置圆环的颜色', key: 'color', options: [
						{title: 'green/success', value: 'green'},
						{title: 'blue/info', value: 'blue'},
						{title: 'red/danger', value: 'red'},
					]}],
			},
			{
				title: '自定义的时间节点',
				attribute: 'dot',
				set: [{type: 'radio', title: '自定义的时间节点', key: 'dot', options: [
						{title: '默认', value: undefined},
						{title: '自定义Icon', value: <Icon type="uf-exc-c-o" />},
					]}],
			}
		],
	},
];
export const renderComponent = ({props, itemProps}) =>
	(<Timeline {...props}>
		<Timeline.Item {...itemProps}>Create a services site 2015-09-01</Timeline.Item>
		<Timeline.Item {...itemProps}>Solve initial network problems 2015-09-01</Timeline.Item>
		<Timeline.Item {...itemProps}>Technical testing 2015-09-01</Timeline.Item>
		<Timeline.Item {...itemProps}>Network problems being solved 2015-09-01</Timeline.Item>
	</Timeline>)
export const TimelineProps = [
    {key: 'props.pending', title: 'pending', type: 'string,boolen,ReactNode', value: '-',},
]
export const TimelineItemProps = [
	{key: 'props.color', title: 'color', type: 'string,boolen,ReactNode', value: '-',},
	{key: 'props.dot', title: 'dot', type: 'string,boolen,ReactNode', value: '-',},
]
export const APIData = [
    {title: 'Timeline', key: 'props', children: TimelineProps},
    {title: 'Timeline.Item', key: 'itemProps', children: TimelineItemProps},
]

