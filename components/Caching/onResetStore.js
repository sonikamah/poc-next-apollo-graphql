import { withApollo } from "react-apollo";
import { Component } from "react";

class ResetStore extends Component {

  constructor(props) {
    super(props);

    this.state = { reset: false };
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  unsubscribe() {
    this.props.client && this.props.client.resetStore(this.setState({name: "SONIKA"}))
  }

  render() {
    return (
        <>
            <button
            onClick={this.unsubscribe}
            > client.onResetStore 
            </button>

            { this.state.name ? "Successful Reset" : " Click to reset"}
        </>
    )
  }
}

export default withApollo(ResetStore);