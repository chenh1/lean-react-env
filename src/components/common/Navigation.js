import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" "}
      <Link to="/about" activeClassName="active">About</Link>
    </div>
  );
};

export default Navigation;
