import React from "react";
import { Bundle } from "@ali/visualengine";
import VisualEngineUtils from "@ali/visualengine-utils";
import VisionUtilsProperty from "@alife/vision-utils-property";
import Icon from "./logo";
import { componentName } from "./const";
import "./prototype.scss";

const {
	// ChoiceSetter,
	TextSetter,
	BoolSetter,
	ActionSetter,
	JsonSetter,
} = VisualEngineUtils;
const { uuid } = VisionUtilsProperty;

// 原型配置请参考：https://lark.alipay.com/vision/docs/prototype
export default Bundle.createPrototype({
	title: "卡片",
	componentName,
	category: "通用组件",
	icon: Icon,
	docUrl: "",
	configure: [
		{
			title: "基础配置",
			type: "group",
			display: "block",
			items: [
				// 组件唯一标志
				uuid(componentName),
			],
		},
		{
			name: "dataSource",
			title: "数据源",
			display: 'block',
			supportVariable: true,
			initialValue: [],
			setter: <JsonSetter />,
		},
		{
			name: "withBorder",
			title: "是否使用线条间隔",
			supportVariable: true,
			initialValue: true,
			setter: <BoolSetter />,
		},
		{
			name: "className",
			title: "样式名",
			supportVariable: true,
			initialValue: '',
			setter: <TextSetter />,
		},
		{
			name: "cardClassName",
			title: "卡片样式名",
			supportVariable: true,
			initialValue: '',
			setter: <TextSetter />,
		},
		{
			name: 'onDataTransfer',
			title: '数据转换方法',
			display: 'block',
			tip: '返回一个 Object',
			setter: <ActionSetter
				defaultActionName="onDataTransfer"
				defaultCode={`/**
* 数据转换
* @param result 返回的数据
* @param props 当前props
*/
function onDataTransfer(result, props){
  console.log("onDataTransfer::", result, props);
  return result;
}`}
			/>,
		},
	],
});
