import React from 'react';
import {
  Button,
  Typography
} from '@mui/material';
import './userPhotos.css';
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      userPhotos:null
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;

    // Fetch user details
    fetchModel(`/user/${userId}`)
        .then(response => {
          this.setState({
            user: response.data
          });
        })
        .catch(error => console.error(error));

    // Fetch user photos
    fetchModel(`/photosOfUser/${userId}`)
        .then(response => {
          this.setState({
            userPhotos: response.data
          });
        })
        .catch(error => console.error(error));
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
