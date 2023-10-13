import React from 'react';
import {
    Button,
    Typography,
    TextField,
    Box,
} from '@mui/material';
import './userDetail.css';
import fetchModel from '../../lib/fetchModelData';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        const new_user_id = this.props.match.params.userId;
        this.handleUserChange(new_user_id);
    }

    componentDidUpdate() {
        const new_user_id = this.props.match.params.userId;
        const current_user_id = this.state.user?._id;
        if (current_user_id !== new_user_id) {
            this.handleUserChange(new_user_id);
        }
    }

    handleUserChange(user_id) {
        fetchModel("/user/" + user_id)
            .then((response) => {
                const new_user = response.data;
                this.setState({
                    user: new_user,
                });
            });
    }

    render() {
        const { user } = this.state;

        if (!user) {
            return null;
        }

        const photosLink = "#/photos/" + user._id;

        return (
            <div className="user-detail">
                <Button href={photosLink}>User Photos</Button>
                <Typography variant='h5'>{`${user.first_name} ${user.last_name}`}</Typography>
                <Box>
                    <TextField
                        label="Location"
                        variant="outlined"
                        value={user.location}
                        fullWidth
                        disabled
                        style={{ marginBottom: '10px' }} // Add spacing
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        value={user.description}
                        fullWidth
                        disabled
                        style={{ marginBottom: '10px' }} // Add spacing
                    />
                    <TextField
                        label="Occupation"
                        variant="outlined"
                        value={user.occupation}
                        fullWidth
                        disabled
                        style={{ marginBottom: '10px' }} // Add spacing
                    />
                    <TextField
                        label="User ID"
                        variant="outlined"
                        value={user._id}
                        fullWidth
                        disabled
                        style={{ marginBottom: '10px' }} // Add spacing
                    />
                </Box>
            </div>
        );
    }
}

export default UserDetail;
