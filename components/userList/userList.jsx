import React from 'react';
import {
    Divider, Link,
    List,
    ListItem,
    ListItemText,
    Typography,
}
    from '@mui/material';
import './userList.css';
import {Box} from "@mui/system";

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      return (
          <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
              {window.models.userListModel().map((item, index) => (
                  <React.Fragment key={item._id}>
                      <ListItem>
                          <ListItemText key={index} primary={<a href={"users/:" + item._id}>{item.first_name}</a>}/>
                      </ListItem>
                      <Divider />
                  </React.Fragment>
              ))}
          </Box>
      );
  }
}


/*
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
              {window.models.userListModel().map((item, index) => (
                  <React.Fragment key={item._id}>
                      <ListItem>
                        <ListItemText key={index} primary={<a href={"users/:" + item._id}>{item.first_name}</a>}/>
                      </ListItem>
                      <Divider />
                  </React.Fragment>
              ))}
          </Box>
 */



export default UserList;
