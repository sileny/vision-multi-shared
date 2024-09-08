import React from "react";
import clx from 'classnames';
import { componentName, libraryName } from "./const";
import Card from './card';
import './index.scss';

class View extends React.PureComponent {
	static displayName = componentName;

	static propTypes = {};

	static defaultProps = {
		dataSource: [], // [{"titleInfo": {"title": "签收总量", "toolTip": "取T-1首条有签收记录的单量"}, "valueInfo": {"value": "2,336,813", "unit": ""}}]
		withBorder: true, // 中间间隔的竖线
		className: '',
		cardClassName: '',
	};

	getProps = () => {
		return {
			...this.props,
		};
	};

	render() {
		const { dataSource = [], withBorder, className = '', cardClassName = '' } = this.props;

		if (!dataSource?.length) {
			return <div>没有数据</div>;
		}

		return (
			<div className={clx('card-list', { withBorder }, className)}>
				{dataSource.map((value, index) => {
					return (
						<div className="card-item" key={index}>
							<Card valueSize={26} {...value} className={cardClassName} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default View;

if (process.env.NODE_ENV === "development") {
	View.isDev = true;
	window[libraryName] = View;
}
