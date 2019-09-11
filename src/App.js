import React from "react";
import { fetchDog } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>
          Show Dog
        </button>
        {this.props.loading ? (
          <p>Loading...</p>
        ) : this.props.error ? (
          <p>Error, try again</p>
        ) : (
          this.props.url && (
            <p>
              <img src={this.props.url} alt="anjing" />
            </p>
          )
        )}
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(App);
