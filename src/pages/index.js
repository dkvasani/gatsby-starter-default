import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your Dharmesh Vasani  site.</p>
        <p>I am fine what about you</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
