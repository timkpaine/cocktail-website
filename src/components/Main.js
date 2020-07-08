/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import React, { Component } from 'react';

import Topbar from './Topbar';
import Footer from './Footer';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 1000,
    overflow: 'hidden',
    background: 'url(background.jpg) no-repeat',
    backgroundSize: 'cover',
  },
  grid: {
    marginTop: 10,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  paperMain: {
    minHeight: 500,
    width: '100%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    backgroundColor: 'rgb(0, 0, 0, .7)',
  },
  paper: {
    minHeight: 450,
    textAlign: 'left',
    color: theme.palette.secondary.dark,
    padding: 10,
    backgroundColor: 'rgb(0, 0, 0, .7)',
    // backgroundColor: theme.palette.secondary.dark,
  },
  mainTitle: {
    color: theme.palette.primary.main,
  },
  mainSubTitle: {
    color: theme.palette.primary.dark,
  },
  title: {
    color: theme.palette.primary.dark,
  },
  titleDark: {
    color: theme.palette.primary.dark,
  },
  titleLight: {
    color: theme.palette.primary.light,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  outlinedButton: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
  actionButton: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    margin: 'auto',
    width: '80%',
  },
  boxMain: {
    width: '100%',
    minHeight: 300,
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 1000,
  },
  drinkList: {
    display: "flex",
    flexDirection: "column",
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10,
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  noBorder: {
    borderBottomStyle: 'hidden',
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDialog: false,
    };
  }

  componentDidMount() {}

  openContactDialog = () => {
    this.setState({ contactDialog: true });
  }

  dialogClose = () => {
    this.setState({
      contactDialog: false,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Paper className={classes.paperMain}>
                <div className={classes.boxMain}>
                  <Typography style={{ fontWeight: 'bold' }} variant="h2" className={classes.mainTitle} gutterBottom>
                      Barrel Aged
                  </Typography>
                  <Typography variant="h4" color="secondary" className={classes.mainSubTitle} gutterBottom>
                    Small batch cocktails
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="h4" className={classes.title} gutterBottom>
                  Hand-crafted cocktails, aged in oak
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                  Cocktails are aged in small (1 to 5 liter) charred white American oak barrels. Our current lineup of cocktails includes:
                  <br />
                  <br />
                  <div className={classes.drinkList}>
                    <span style={{marginLeft: 20}}><strong>Old Fashioned</strong> - Rye Whiskey, Tiple Sec, Aromatic Bitters, Orange Bitters (Aged 1 year equivalent)</span>
                    <span style={{marginLeft: 20}}><strong>Manhattan</strong> - Bourbon, Sweet Vermouth, Tiple Sec, Aromatic Bitters, Orange Bitters (Aged 6 mo eq.)</span>
                    <span style={{marginLeft: 20}}><strong>Negroni</strong> - Gin, Campari, Sweet Vermouth (Aged 1 yr eq.)</span>
                    <span style={{marginLeft: 20}}><strong>Boulevardier</strong> - Bourbon, Campari, Sweet Vermouth (Aged 1 yr eq.)</span>
                  </div>
                  </Typography>

                </div>
                <div className={classes.box}>
                  <Typography variant="h4" className={classes.title} gutterBottom>
                  Launching in 2020
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                  Sign up to receive more information about our our first releases.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <a href="mailto:timothy.k.paine@gmail.com">
                  <Button color="primary" variant="outlined" className={classes.actionButton}>
                    More Information
                  </Button>
                  </a>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Main));
