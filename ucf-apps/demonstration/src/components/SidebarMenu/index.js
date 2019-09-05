import React, { Component } from 'react';
import { Tree, Icon } from 'tinper-bee';
import treeData from './menuList';
import {actions, connect} from 'mirrorx';
import './index.less';
import App from "../App";

const TreeNode = Tree.TreeNode;

class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedKeys: [],
            selectedKeys: []
        }
    }

    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    };

    onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        const { attribute } = info.node.props.ext;
        const { selected } = info;
        this.setState({
            selectedKeys
        });
        this.updateTableProps(attribute, selected);
    };

    renderTreeNode = data => data.map((item) => {
        let { selectedKeys } = this.state;
        let title = selectedKeys.indexOf(item.key) > -1 ? <span><span>{item.title}</span><Icon type="uf-correct-2"></Icon></span> : item.title;
        if (item.children) {
          return (
            <TreeNode key={item.key} title={item.title}>
              {this.renderTreeNode(item.children)}
            </TreeNode>
          );
        }
        return (
            <TreeNode
            key={item.key}
            title={title}
            isLeaf={true}
            ext={{attribute: item.attribute}}
            />
        )
    });

    updateTableProps = (attribute, selected) => {
        let {
            bordered,
            nodata,
            zebraCrossing,
            loading,
            draggable,
            dragborder,
            rowDraggAble,
            showFilterMenu,
            columnFilterAble,
            showHeader,
            showHeaderMenu,
            bodyDisplayInRow,
            headerDisplayInRow,
            heightTakeEffect,
            sizeTakeEffect,
            titleTakeEffect,
            scroll,
            columns,
            textAlign,
        } = this.props;
        const arr = columns.slice();
        switch(attribute){
            case 'nodata':
                actions.app.updateState({ nodata: !nodata });
                break;
            case 'zebraCrossing':
                actions.app.updateState({ zebraCrossing: !zebraCrossing });
                break;
            case 'loading':
                actions.app.updateState({ loading: !loading });
                break;
            case 'bordered':
                actions.app.updateState({ bordered: !bordered });
                break;
            case 'draggable':
                actions.app.updateState({ draggable: !draggable });
                break;
            case 'dragborder':
                actions.app.updateState({ dragborder: !dragborder });
                break;
            case 'rowDraggAble':
                actions.app.updateState({ rowDraggAble: !rowDraggAble });
                break;
            case 'showHeaderMenu':
                actions.app.updateState({ showHeaderMenu: !showHeaderMenu });
                break;
            case 'showFilterMenu':
                actions.app.updateState({ showFilterMenu: !showFilterMenu });
                break;
            case 'columnFilterAble':
                actions.app.updateState({ columnFilterAble: !columnFilterAble });
                break;
            case 'showHeader':
                actions.app.updateState({ showHeader: !showHeader });
                break;
            case 'bodyDisplayInRow':
                actions.app.updateState({ bodyDisplayInRow: !bodyDisplayInRow });
                break;
            case 'headerDisplayInRow':
                actions.app.updateState({ headerDisplayInRow: !headerDisplayInRow });
                break;
            case 'heightTakeEffect':
                actions.app.updateState({ heightTakeEffect: !heightTakeEffect });
                break;
            case 'sizeTakeEffect':
                actions.app.updateState({ sizeTakeEffect: !sizeTakeEffect });
                break;
            case 'titleTakeEffect':
                actions.app.updateState({ titleTakeEffect: !titleTakeEffect });
                break;
            case 'scrollX':
                selected ? actions.app.updateState({ scroll: {...scroll, x: 3200} }) : actions.app.updateState({ scroll: {...scroll, x: undefined} });
                break;
            case 'scrollY':
                selected ? actions.app.updateState({ scroll: {...scroll, y: 150} }) : actions.app.updateState({ scroll: {...scroll, y: undefined} });
                break;
            case 'showRowNum':
                selected ? arr.unshift({title: '序号', dataIndex: 'key'}) : arr.splice(0, 1);
                actions.app.updateState({ columns: arr });
                break;
            case 'contentAlign':
                selected ? arr.forEach(item => item.textAlign = textAlign) : arr.forEach(item => item.textAlign = 'left');
                actions.app.updateState({ columns: arr });
                break;
            case '':
                actions.app.updateState({ showFilterMenu: !showFilterMenu });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="sidebar-wrap">
                <Tree
                    multiple
                    defaultExpandAll
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                >
                {this.renderTreeNode(treeData)}
                </Tree>
            </div>
        );
    }
}
export default connect(state => state.app)(SidebarMenu);
