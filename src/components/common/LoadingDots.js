import React from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      frame: 1,
    };
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        frame: this.state.frame + 1,
      });
    }, this.props.interval);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    let dotsCount = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dotsCount > 0) {
      text += '.';
      dotsCount--;
    }
    const { dots, interval } = this.props;
    return (
      <span {...dots}{...interval}>{text}&nbsp;</span>
    );
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3,
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number,
};

export default LoadingDots;
