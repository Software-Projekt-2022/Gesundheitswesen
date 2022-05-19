import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render() {
        return(
            <nav className='navbar-blue'>
                <div className='container'>
                    <Link to="/" className='navbar-brand'>
                        {this.props.appname.toLowerCase()}
                    </Link>
                </div>
                <li>
                    <Link to={"/home"}></Link>
                </li>
                <li>
                    <Link to={"/categories"}></Link>
                </li>
                <li>
                    <Link to={"/emergency-contacts"}></Link>
                </li>
            </nav>
        );
    }
}