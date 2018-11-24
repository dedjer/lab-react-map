## This project was created to help me resolve the error: TypeError this.state.vehicle.map is not a function

This line of code would cause the TypeError

> this.setState({ vehicle: jsonVehicle });

This is the change made to resolve the error

> this.setState({ vehicle: [jsonVehicle] });
