import React, { Component } from 'react';
import { Tree, Icon } from 'tinper-bee';
import treeData from './menuList';
import { actions } from 'mirrorx';
import './index.less';

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
        let { attribute } = info.node.props.ext;
        this.setState({ 
            selectedKeys
        });
        this.updateTableProps(attribute);
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

    updateTableProps = (attribute) => {
        let { 
            bordered, 
            nodata, 
            zebraCrossing, 
            loading,
            draggable, 
            dragborder,
            rowDraggAble,
            showFilterMenu,
            columnFilterAble
        } = this.props;
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
export default SidebarMenu;