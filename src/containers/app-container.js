import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../components/header";
import '../css/app-container.scss';
import Navigation from '../components/navigation';

export class AppContainer extends Component {

    render() {

        return (
            <div className="app-body">
                <Header />
                <Navigation />
            </div>
        )
    }
}

AppContainer.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);