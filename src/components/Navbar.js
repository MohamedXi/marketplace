import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand font-weight-bold" href=" ">S University</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                                <small className="text-muted">
                                    <span className="font-weight-bold text-dark">Your account: </span>
                                    <span id="account">{this.props.account}</span>
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;