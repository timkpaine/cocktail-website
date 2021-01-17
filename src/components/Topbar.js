/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';

const styles = (theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.light,
  },
  inline: {
    display: 'inline',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'inherit',
    height: '100%',
  },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey.A100}`,
    marginLeft: 32,
    paddingLeft: 24,
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
  },
  iconContainer: {
    display: 'block',
    marginLeft: 'auto',
  },
  iconButton: {
    float: 'right',
  },
});

class Topbar extends Component {
  constructor() {
    super();
    this.state = {
      // value: 0,
      // menuDrawer: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // }

  // mobileMenuOpen = () => {
  //   this.setState({ menuDrawer: true });
  // }

  // mobileMenuClose = () => {
  //   this.setState({ menuDrawer: false });
  // }

  current = () => {
    const { currentPath } = this.props;
    if (currentPath === '/home') {
      return 0;
    }
    return 0;
  }

  render() {
    const { classes, noTabs } = this.props;

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to="/" className={classes.link}>
                    <img width={140} height={30} src="logo.png" alt="" />
                  </Link>
                </Typography>
              </div>
              { !noTabs && (
                <>
                  <div className={classes.productLogo}>
                    <Typography>
                      Barrel Cocktail Co.
                    </Typography>
                  </div>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPath: PropTypes.string,
  noTabs: PropTypes.bool,
  // location: PropTypes.object.isRequired,
};

Topbar.defaultProps = {
  currentPath: '/',
  noTabs: false,
};

export default withRouter(withStyles(styles)(Topbar));
