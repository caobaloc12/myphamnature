import React, { PropTypes } from 'react';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMobile;

    return (
      <div
        className={`${props.className}-wrapper`}
        key="text"
        id={`${props.id}-wrapper`}
      />
    )
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
