/**
 * The withCounter function is a higher-order component that takes in a component and an increment
 * number and returns a new component with a count state and an incrementCount method.
 * @param WrappedComponent - This is a component that will be passed as a parameter to the higher-order
 * component "withCounter". It will be wrapped by the "WithCounter" component and will receive
 * additional props from it.
 * @param incrementNumber - incrementNumber is a number that determines how much the count should be
 * incremented by when the incrementCount function is called. It is passed as a parameter to the
 * withCounter higher-order component.
 * @returns The `withCounter` function returns a new component called `WithCounter`, which is a
 * higher-order component (HOC) that wraps around another component (`WrappedComponent`). The
 * `WithCounter` component has its own state that includes a `count` property, and a method called
 * `incrementCount` that updates the `count` property.
 */
import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
