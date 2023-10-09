import React from 'react';
import {
  Typography
} from '@mui/material';
import './userDetail.css';


/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }
/*
        This should be the UserDetail view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the
        user from window.models.userModel(userId).
 */
  render() {
    const userId = this.props.match.params.userId;
    const user = window.models.userModel(userId);

    return (
        <div className = "user-detail">
            <Typography variant= = 'h5'>{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography variant= = 'body1'>{`Location: ${user.location}`}</Typography>
            <Typography variant= = 'body1'>{`Description: ${user.description}`}</Typography>
            <Typography variant= = 'body1'>{`Occupation: ${user.occupation}`}</Typography>
            <Typography variant= = 'body1'>{`User ID: ${userId}`}</Typography>
        </div>
    );
  }
}

export default UserDetail;
