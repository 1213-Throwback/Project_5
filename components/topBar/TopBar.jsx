import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@mui/material';
import './TopBar.css';

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {content} = this.props;

    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              Ryan Dooley
          </Typography>
            <Typography variant="h6" color="inherit" style = {{marginLeft: 'auto' }}>
                {content ? content : 'Photo App'}
            </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
