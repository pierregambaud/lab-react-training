import React, { Component } from "react";
import "./Greetings.scss";

class Greetings extends Component {
    render() {
        const traduction = {
            de: "Hallo",
            fr: "Bonjour"
        }

        let { lang, children } = this.props;

        let message;

        Object.keys(traduction).forEach(tradLine => {
            if(tradLine === lang) {
                message = traduction[tradLine] + ` ${children}`;
            }
        })

        return (
            <div className="greetings">
                { message }
            </div>
        );
    }
}

export default Greetings;