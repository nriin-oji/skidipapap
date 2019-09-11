import React from 'react'
import { connect } from 'react-redux'

class Dog extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        Dog
      </div>
    )
  }
}


export default connect(state => {
  return state;
})(Dog);

