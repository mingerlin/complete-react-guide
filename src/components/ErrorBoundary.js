import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  //this can be add to any coponent(which you want that to be error boundary compoent)
  //this will be trigger whenever its child component generate error
  componentDidCatch(error) {
    console.log(error);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
