import React from 'react';

// Class component
class AddContact extends React.Component {
    render() {
        return (
            <div>
                <h2>Add Contact</h2>

                <form>
                    <div className="field">
                        <label>Name: </label>
                        <input type="text" name="name" />
                    </div>

                    <div className="field">
                        <label>Email: </label>
                        <input type="text" name="email" />
                    </div>

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;