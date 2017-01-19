import React from 'react';
import { Link, IndexLink } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }
}

export default AboutPage;
