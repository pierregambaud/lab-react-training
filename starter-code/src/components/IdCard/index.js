import React, { Component } from "react";
import moment from "moment";
import "./IdCard.scss";

moment.defaultFormat = "ddd[,] DD MMM YYYY";

class IdCard extends Component {
    render () {
        const { picture, firstName, lastName, gender, height, birth } = this.props;

        return (
            <div className="id-card">
                <div className="avatar">
                    <img src={picture} alt={firstName} />
                </div>
                <div className="user-info">
                    <span><strong>Firstname:</strong> {firstName}</span>
                    <span><strong>Lastname:</strong> {lastName}</span>
                    <span><strong>Gender:</strong> {gender}</span>
                    <span><strong>Height:</strong> {height}</span>
                    <span><strong>Birth:</strong> {moment(birth).format()}</span>
                </div>
            </div>
        )
    }
}

export default IdCard;