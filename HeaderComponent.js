import React, { Component } from "react";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    LOGO
                </a>
                </nav>
                </header>
            </div>
            
        )
    }
}

export default HeaderComponent