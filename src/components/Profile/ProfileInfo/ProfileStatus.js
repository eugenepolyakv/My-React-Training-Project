import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        temporaryStatus: this.props.status,
    };

    onStatusChange = (e) => {
        this.setState({ temporaryStatus: e.currentTarget.value });
        console.log(this.state.temporaryStatus);
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({ temporaryStatus: this.props.status });
        }
    };

    changeEditMode = () => {
        this.setState({
            editMode: this.state.editMode ? false : true,
        });
        this.props.updateUserStatus(this.state.temporaryStatus);
    };

    render() {
        console.log('Render of profile status');
        return (
            <div>
                {this.state.editMode && (
                    <div>
                        <input
                            onBlur={this.changeEditMode}
                            autoFocus={true}
                            value={this.state.temporaryStatus}
                            onChange={this.onStatusChange}
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
