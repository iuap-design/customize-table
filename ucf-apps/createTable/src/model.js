/**
 * 数据模型类
 */

import { actions } from "mirrorx";
import * as api from "./service";

export default {
    // 确定 Store 中的数据模型作用域
    name: "app",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        columns: [
            { title: "员工编号", dataIndex: "a", key: "a", width: 150 },
            { title: "员工姓名", dataIndex: "b", key: "b", width:100},
            { title: "性别", dataIndex: "c", key: "c", width: 100},
            { title: "部门", dataIndex: "d", key: "d", width: 100 },
            { title: "职级", dataIndex: "e", key: "e", width: 100 }
        ],
        data: [
            { a: "ASVAL_20190328ASVAL_20190328ASVAL_20190328ASVAL_20190328", b: "小张", c: "男", d: "财务二科", e: "M1", key: "1" },
            { a: "ASVAL_20190320", b: "小明", c: "男", d: "财务一科", e: "T1", key: "2" },
            { a: "ASVAL_20190312", b: "小红", c: "女", d: "财务一科", e: "T2", key: "3" },
            { a: "ASVAL_20190328", b: "小张", c: "男", d: "财务二科", e: "M1", key: "4" },
            { a: "ASVAL_20190320", b: "小明", c: "男", d: "财务一科", e: "T1", key: "5" },
            { a: "ASVAL_20190312", b: "小红", c: "女", d: "财务一科", e: "T2", key: "6" }
        ],
        nodata: false,
        bordered: false,
        zebraCrossing: false, //隔行换色
        loading: false,
        rowDraggAble: false,
        dragborder: false,
        draggable: false,
        rowDraggAble: false,
        showHeaderMenu: false,
        showFilterMenu: false,
        columnFilterAble: false,
        showHeader: true
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        /**
         * 按钮测试数据
         * @param {*} param
         * @param {*} getState
         */
        async loadData(params, getState) {
            let result = await api.getList(params);
            return result;
        }
    }
};
