import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Lean React Environment</h1>
        <Link to="about">Go to AboutPage</Link>
      </div>
    );
  }
}

export default HomePage;
