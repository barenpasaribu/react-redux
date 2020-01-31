import React, { Component } from "react"
import { connect } from "react-redux"

class Clothes extends Component {
  render() {
    const sportsWearCollection = this.props.sportsWear.map(product => {
      return <li key={product.productName}>{ product.productName } | { product.price }</li>
    })
    return (
      <div>
        <h1>Sportwear</h1>
        <div>
          <ul>
            {sportsWearCollection}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({sportsWear}) => {
  return {
    sportsWear
  }
}

export default connect(mapStateToProps)(Clothes)