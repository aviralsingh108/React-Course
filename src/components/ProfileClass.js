import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Similar to using useState() as in functional Component
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDid Mount called");
    setInterval(() => {
      console.log("called");
    }, 1000);
  }
  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <h1>Profile Class component</h1>;<h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2>
        <h3>Couting: {count}</h3>
        {/* Equivalent of setCount in fuctional components */}
        <button
          onClick={() => {
            {
              // We never mutate state directly as we  do in functional components in the case of Class based Components, rather,
              // we are going to pass a whole new object inside the setState. Mutate, here refers to setCount(1), in Class based Components we setState({key:value})
              this.setState({
                count: 1,
              });
            }
          }}
        >
          Click
        </button>
      </React.Fragment>
    );
  }
}

export default Profile;
