import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    changeEditMode = () => {
        this.setState({
            editMode: this.state.editMode ? false : true,
        });
    };

    render() {
        return (
            <div>
                {this.state.editMode && (
                    <div>
                        <input
                            onBlur={this.changeEditMode}
                            autoFocus={true}
                            value={this.props.status}
                        ></input>
                    </div>
                )}
                {!this.state.editMode && (
                    <div>
                        <span onClick={this.changeEditMode}>
                            {this.props.status}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
