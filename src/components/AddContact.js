import React from "react";

// Class component
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();

    // check if none of the fields are empty
    if (this.state.name === "" || this.state.email === "") {
      alert("Please fill both the fields.");
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="add-contact">
        <h3>Add Contact</h3>

        <form onSubmit={this.add}>
          <div className="field">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
