/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/styles/withStyles";
import {Button} from "@material-ui/core";

const styles = (theme) => ({
  primary: {
    marginRight: theme.spacing(2),
  },
  secondary: {
    background: theme.palette.secondary["100"],
    color: "white",
  },
  spaceTop: {
    marginTop: 20,
  },
});

function ButtonBar(props) {
  const {classes} = props;

  return (
    <div className={classes.spaceTop}>
      <Button className={classes.primary}>Delete</Button>
      <Button variant="contained" color="primary" className={classes.secondary}>
        Edit
      </Button>
    </div>
  );
}

ButtonBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBar);
