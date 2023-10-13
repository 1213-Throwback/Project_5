import React from 'react';
import {
    Button,
    Typography
} from '@mui/material';
import './userDetail.css';
import fetchModel from '../../lib/fetchModelData';


/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user:null
    };
  }
/*
        This should be the UserDetail view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the
        user from window.models.userModel(userId).
 */
    componentDidMount() {
        const userId = this.props.match.params.userId;
        const url = `/user/${userId}`;

        fetchModel(url)
            .then(response => {
                this.setState({
                    user: response.data
                });
            })
            .catch(error => console.error(error));
    }

  render() {
        const {user} = this.state;

        if(!user){
            return null;
        }

    const photosLink = "#/photos/" + user._id;

    return (
        <div className = "user-detail">
            <Button href={photosLink}>User Photos</Button>
            <Typography variant = 'h5'>{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography variant = 'body1'>{`Location: ${user.location}`}</Typography>
            <Typography variant = 'body1'>{`Description: ${user.description}`}</Typography>
            <Typography variant = 'body1'>{`Occupation: ${user.occupation}`}</Typography>
            <Typography variant = 'body1'>{`User ID: ${user.id}`}</Typography>
        </div>
    );
  }
}

export default UserDetail;
