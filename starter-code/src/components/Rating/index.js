import React, { Component } from "react";

class Rating extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                {[1,2,3,4,5].map((el, index) => {
                    let starUrl = "https://fonts.gstatic.com/s/i/materialicons/star_border/v4/24px.svg";

                    if(Math.round(Number(children)) > index) {
                        starUrl = "https://fonts.gstatic.com/s/i/materialicons/star/v5/24px.svg"
                    }

                    return <img src={starUrl} alt="" />
                })}
            </div>
        )
    }
}

export default Rating;