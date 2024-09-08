import React from 'react';
import PropTypes from 'prop-types';
import { componentName, libraryName } from './const';
// import Hello from 'tcc/hello';

class View extends React.PureComponent {
	static displayName = componentName;

	static defaultProps = {
		name: '',
	};

	static PropTypes = {
		name: PropTypes.string,
	};

	render() {
		const {
			name,
		} = this.props;

		// return <Hello name={name} />;
		return <div>{name}</div>
	}
}
export default View;

if (process.env.NODE_ENV === 'development') {
	View.isDev = true;
	window[libraryName] = View;
}
