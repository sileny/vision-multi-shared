import React from "react";
import PropTypes from 'prop-types';
import clx from 'classnames';
import { Balloon, Icon } from '@alifd/next';

class View extends React.PureComponent {
  static propTypes = {
    subtitleList: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOf(PropTypes.number, PropTypes.string),
        title: PropTypes.string,
        unit: PropTypes.string,
      }),
    ),
    compareList: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOf(PropTypes.number, PropTypes.string),
        arrowColor: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    titleInfo: PropTypes.shape({
      title: PropTypes.string,
      optionInfo: PropTypes.string,
      toolTip: PropTypes.string,
      onClick: PropTypes.func,
    }),
    valueInfo: PropTypes.shape({
      value: PropTypes.oneOf(PropTypes.number, PropTypes.string),
      unit: PropTypes.string,
    }),
    center: PropTypes.bool, // 是否居中
    compareSubtitleInline: PropTypes.bool, // 将compareList和subtitleList显示在一行
    valueSize: PropTypes.number, // 最大的文字的字体大小，就是valueInfo.value的字体大小
    remark: PropTypes.string, // 备注
  };

  static defaultProps = {};

  getProps = (props) => {
    return {
      ...props,
    };
  };

  renderSubtitles = () => {
    const { subtitleList } = this.props;
    if (!subtitleList) return null;
    return (
      <>
        {subtitleList.map((item, index) => {
          const { title, value, unit } = item;
          return (
            <div className="subtitleRow" key={index}>
              <div className="subtitle">{title}</div>
              <div className="subtitleValue">{value}</div>
              <div className="subtitleUnit">{unit}</div>
            </div>
          );
        })}
      </>
    );
  };

  renderCompareList = () => {
    const { compareList = [] } = this.props;
    if (!compareList?.length) return null;
    return (
      <div className="compareList">
        {compareList.map((item, index) => {
          const { value, arrowColor, title } = item;
          const number = parseFloat(value);
          const type = number >= 0 ? 'ascend' : 'descend';
          let color = arrowColor;
          if (!color) {
            if (number >= 0) {
              color = '#e33640';
            } else {
              color = '#58b665';
            }
          }
          return (
            <div key={index} className="compareItem">
              <div className="compareName">{title}</div>
              <div className="compareValue" style={{ color }}>
                <Icon type={type} size="xxs" className="compareIcon" />
                {value}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  getCardClass = () => {
    const { center, className } = this.props;
    if (center) {
      return clx('card', 'center', className);
    }
    return clx('card', className);
  };

  renderTitle = () => {
    const { titleInfo } = this.props;
    if (!titleInfo) return null;
    const { title, optionInfo, toolTip, onClick } = titleInfo;
    return (
      <div className={clx('head', 'spaceBetween')}>
        <div className="headLeft">
          <div className="title">{title || '-'}</div>
          {toolTip && (
            <Balloon.Tooltip align="tr" trigger={<Icon type="help" size="small" />}>
              {toolTip}
            </Balloon.Tooltip>
          )}
        </div>
        {optionInfo && <div onClick={onClick}>{optionInfo}</div>}
      </div>
    );
  };

  renderNumber = () => {
    const { valueInfo, valueSize, subtitleList = [], compareList = [] } = this.props;
    if (!valueInfo) return null;
    const { value, unit } = valueInfo;
    const style = valueSize ? { fontSize: `${parseInt(valueSize, 10)}px` } : null;
    const hasMargin = subtitleList?.length && compareList?.length;
    return (
      <div className={clx('number', hasMargin ? 'numberMargin' : '')}>
        <div className="numberValue" style={style}>
          {value}
        </div>
        <div className="numberUnit">{unit}</div>
      </div>
    );
  };

  renderRest = () => {
    const { compareSubtitleInline } = this.props;
    // 如果compareList和subtitleList需要显示在一行
    if (compareSubtitleInline) {
      return (
        <div className="spaceBetween">
          <div style={{ marginRight: '8px' }}>{this.renderCompareList()}</div>
          {this.renderSubtitles()}
        </div>
      );
    }
    return (
      <>
        {this.renderCompareList()}
        {this.renderSubtitles()}
      </>
    );
  };

  renderRemark = () => {
    const { remark } = this.props;
    if (!remark) return null;
    return <div className="remark">{remark}</div>;
  };

  render() {
    return (
      <div className={this.getCardClass()}>
        {this.renderTitle()}
        {this.renderNumber()}
        {this.renderRest()}
        {this.renderRemark()}
      </div>
    );
  }
}

export default View;
