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

    let photosList = window.models.photoOfUserModel(userId);
    let photos = photosList.map((photo, index) => (
        <div>
          <img key={`${photo._id}`} src={"images/" + photo.file_name} alt={`${user.first_name}#${index}`} />
          <p className={"Date"}>{photo.date_time}</p>
        </div>
    ));


    return (
        <div>
          <Button href={detailLink}>User Details</Button>
          {photos.map((photo, index) => (
              <div key={index}>{photo}</div>
          ))}
        </div>
    );
  }
}

export default UserPhotos;
