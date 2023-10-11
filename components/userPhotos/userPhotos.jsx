import React from 'react';
import {
  Button,
  Typography
} from '@mui/material';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const userId = this.props.match.params.userId;
    const user = window.models.userModel(userId);
    let detailLink = "#/users/" + userId;
    return (
        <div>
          <Button href={detailLink}>User Details</Button>
          <Typography variant="body1">
            This should be the UserPhotos view of the PhotoShare app. Since
            it is invoked from React Router the params from the route will be
            in property match. So this should show details of user:
            {this.props.match.params.userId}. You can fetch the model for the user from
            window.models.photoOfUserModel(userId):
            <Typography variant="caption">
              {JSON.stringify(window.models.photoOfUserModel(this.props.match.params.userId))}
            </Typography>
          </Typography>
        </div>


    );
  }
}

export default UserPhotos;
