import React, {Component} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0
    };
    this.ticking = this.ticking.bind(this);
  }

  ticking() {
    this.setState(
      { clock: Math.round((new Date() - this.props.start)/1000) }
    )
  }

  componentDidMount() {
    this.timer = setInterval(this.ticking, 1000);
  }

  render() {
    return(
      <div>
        <p className=""> You are here: </p>
        <span>{this.state.clock}</span>
        <p>seconds.</p>
      </div>
    );
  }
}

export default Timer;
