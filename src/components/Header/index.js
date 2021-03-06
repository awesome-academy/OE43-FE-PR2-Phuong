import React from "react";
import './styles.scss';
import logo from './../../assets/logo.png';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className='wrap'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='Dannang logo' />
                    </Link>
                </div>
                <div className='callToActions'>
                    <ul>
                        <li>
                            <Link to='/registration'>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;