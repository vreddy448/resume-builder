import React from 'react';
import '../css/header.scss';

export default class Header extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-light shadow bg-white">
                <div className="navbar-brand">
                    {/* <img className="d-inline person-img" src={person} height={25} width={25}/> */}
                   Resume Builder
                </div>
            </nav>
        )
    }
}