import React from "react";
import jsonVehicle from "./vehicle.json";

class VehicleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: []
    };
  }
  componentWillMount() {
    //the below would cause a TypeError
    //this.setState({ vehicle: jsonVehicle });

    //adding brackets around jsonVehicle solved the problem
    this.setState({ vehicle: [jsonVehicle] });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.vehicle.map(v => (
          <div key={v.vin}>
            {v.vin} {v.year} {v.make} {v.model} {v.trim}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default VehicleDetail;
