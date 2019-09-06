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
        this.setState({ checkedKeys });
    };

    onSelect = (selectedKeys, info) => {
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
            />
        )
    });

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
