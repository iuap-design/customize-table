import {Icon, Steps } from '@tinper/next-ui'
const Step = Steps.Step
export const treeData = [
    {
        title: 'Steps',
        key: '0-0',
        children: [
            {
                title: '设置当前步骤',
                attribute: 'current',
                set: [{type: 'input', title: '设置当前步骤', key: 'current'}],
            },
			{
				title: '设置step bar的状态',
				attribute: 'status',
				set: [{type: 'radio', title: '设置step bar的状态', key: 'status', options: [
						{title: 'error', value: 'error'},
						{title: 'finish', value: 'finish'},
					]}
				],
			},
			{
				title: '设置step bar的大小',
				attribute: 'size',
				set: [{type: 'radio', title: '设置step bar的大小', key: 'size', options: [{title: 'default', value: 'default'}, {title: 'small', value: 'small'}]}],
			},
			{
				title: '设置step bar的方向',
				attribute: 'direction',
				set: [{type: 'radio', title: '设置step bar的方向', key: 'direction', options: [{title: 'horizontal', value: 'horizontal'}, {title: 'vertical', value: 'vertical'}]}],
			},
        ],
    },
	{
		title: 'Steps.Step',
		key: '0-1',
		children: [
			{
				title: '自动设置当前step的状态',
				attribute: 'step_status',
				set: [{type: 'radio', title: '自动设置当前step的状态', key: 'color', options: [
						{title: 'wait', value: 'wait'},
						{title: 'process', value: 'process'},
						{title: 'finish', value: 'finish'},
						{title: 'error', value: 'error'},
					]}],
			},
			{
				title: '设置step的标题',
				attribute: 'title',
				set: [{type: 'input', title: '设置step的标题', key: 'title'}],
			},
			{
				title: '设置step的细节描述',
				attribute: 'description',
				set: [{type: 'input', title: '设置step的细节描述', key: 'description'}],
			},
			{
				title: '设置step的图标',
				attribute: 'icon',
				set: [{type: 'radio', title: '设置step的图标', key: 'icon', options: [
						{title: '默认', value: ''},
						{title: '自定义Icon', value: <Icon type="uf-exc-c-o" />},
					]}],
			}
		],
	},
];
export const renderComponent = ({props, itemProps}) =>
	(<Steps {...props}>
		<Step title="已完成" description="这是一段描述" {...itemProps} />
		<Step title="进行中" description="这是一段描述" {...itemProps}/>
		<Step title="未开始" description="这是一段描述" {...itemProps}/>
	</Steps>)
export const getProps = ({inputValue, value}) => {
	let props = {};
	let itemProps = {};
	console.log(inputValue, 999)
	props = {
		current: value.current ? inputValue.current : undefined,
		status: value.status ? inputValue.status : undefined,
		size: value.size ? inputValue.size : undefined,
		direction: value.direction ? inputValue.direction : undefined,
	}
	itemProps = {
		status: value.step_status ? inputValue.step_status : undefined,
		title: value.title ? inputValue.title : undefined,
		description: value.description ? inputValue.description : undefined,
		icon: value.icon ? inputValue.icon : undefined,
	}
	return {props, itemProps}
}
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

