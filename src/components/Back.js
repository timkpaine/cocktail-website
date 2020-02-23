/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

// const styles = (theme) => ({
const styles = () => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
  },
});

const Back = (props) => {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        <Link className={classes.link} to={{ pathname: '/' }}>
          <KeyboardArrowLeft />
          <span className={classes.text}>Back</span>
        </Link>
      </Typography>
    </div>
  );
};

Back.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Back));
