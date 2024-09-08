import React from "react";
import { Bundle } from "@ali/visualengine";
import VisualEngineUtils from "@ali/visualengine-utils";
import Icon from "./logo";
import { componentName } from "./const";
import "./prototype.scss";

const {
	// ChoiceSetter,
	TextSetter,
} = VisualEngineUtils;

// 原型配置请参考：https://lark.alipay.com/vision/docs/prototype
export default Bundle.createPrototype({
	title: "hello",
	componentName,
	category: "通用组件",
	icon: Icon,
	docUrl: "",
	configure: [
		{
			name: 'name',
			title: '名称',
			supportVariable: true,
			initialValue: '',
			setter: <TextSetter />,
		},
		{
			name: '_context',
			title: '隐含传入 this 供使用',
			display: 'none',
			initialValue: {
				type: 'JSExpression',
				value: 'this',
			},
		},
	],
});
