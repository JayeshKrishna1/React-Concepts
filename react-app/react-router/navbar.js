import React from 'react'
import {Link} from 'react-router-dom';
//when reacts reads link it goes to the router element and goes to the route element which matches the to props of link tag with path props of route tag
export const Navbar = () => {
  return (
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/people'>People</Link>
        </li>
    </ul>
  )
}

export default Navbar;
