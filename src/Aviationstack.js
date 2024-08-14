import React, { Component } from "react";

class Aviationstack extends Component {

    componentDidMount() {
        // TRIANGLE REAL ESTATE LLC
        fetch(
            "http://api.aviationstack.com/v1/flights?access_key=6cfeea2c76148f28c31a7e3a6d30ac5&airline_name=TRIANGLEREALESTATELLC9"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    render() {
        return <h2>Hello World</h2>;
    }

}

export default Aviationstack;