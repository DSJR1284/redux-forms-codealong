import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  // constructor(){
  //   super();
    state ={
      text: "",
    };
  // }

  handleChange = (event) =>{
    this.setState({
      text: event.target.value
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.addTodo(this.state)
  // }
  //Remember that, if not given any arguments, connect will automatically return dispatch as a prop to the component we're wrapping with connect. Therefore, rather than creating a mapDispatchToProps function, we could instead call dispatch directly from our handleSubmit function, explicitly passing in our action:
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  };

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add todo" onChange={this.handleChange} value={this.state.text} />
          <input type= "submit" />
        </form>
        {/* {this.state.text} */}
      </div>
    )
  }
}

// const mapDispacthToProps = (dispatch) => {
//   return {
//     addTodo: (formData) => dispatch({ type:"ADD_TODO", payload: formData}),
//   };
// }

export default connect()(CreateTodo);

// export default connect(null, mapDispacthToProps)(CreateTodo);
