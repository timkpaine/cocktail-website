/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  sectionContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: 'bold',
  },
});

const SectionHeader = (props) => {
  const { classes, title, subtitle } = props;
  return (
    <div className={classes.sectionContainer}>
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {subtitle}
      </Typography>
    </div>
  );
};

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles)(SectionHeader));
