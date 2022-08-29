/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {Button, CssBaseline} from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import React, {Component} from "react";

import Topbar from "./Topbar";
import Footer from "./Footer";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 1000,
    background: "url(background.jpg) no-repeat",
    backgroundSize: "cover",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 450,
    textAlign: "left",
    color: theme.palette.secondary.dark,
    padding: 10,
    backgroundColor: "rgb(0, 0, 0, .7)",
    overflow: "scroll",
    // backgroundColor: theme.palette.secondary.dark,
  },
  title: {
    color: theme.palette.primary.dark,
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  actionButton: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginBottom: 40,
    margin: "auto",
    width: "80%",
  },
  buttonBar: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

class Cocktails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDialog: false,
    };
  }

  componentDidMount() {}

  render() {
    const {classes} = this.props;
    return (
      <>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <div className={classes.box}>
              <Typography variant="subtitle1" gutterBottom color="primary">
                <Typography variant="h4" color="primary">
                  Homer&apos;s Old Fashioned
                </Typography>
                <ul>
                  <li>2 parts Rye Whiskey</li>
                  <li>1 part Tentura</li>
                  <li>Splash Cointreau</li>
                  <li>Angostura Bitters</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Homer&apos;s Daquiri
                </Typography>
                <ul>
                  <li>1 part White Rum</li>
                  <li>1 part Mastika</li>
                  <li>1 part Lime Juice</li>
                  <li>Splash of Sugar/Simple Syrup</li>
                  <li>Garnish with a lime wheel</li>
                </ul>
                <Typography variant="h4" color="primary">
                  Alitalia
                </Typography>
                <ul>
                  <li>1.5oz gin</li>
                  <li>1 oz Bergamot Liqueur (Italicus / Rosolio Di Bergamotto)</li>
                  <li>.5oz Maraschino Liqueur</li>
                  <li>Half squeezed lemon</li>
                  <li>Dash of sugar / simple syrup</li>
                </ul>
                <Typography variant="h4" color="primary">
                  Oil Slick
                </Typography>
                <ul>
                  <li>2 parts Gold Rum</li>
                  <li>1 part Falernum</li>
                  <li>1 part Lime Juice</li>
                  <li>Spiced rum floater</li>
                  <li>Garnish with a lime wheel</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Tamarindo
                </Typography>
                <ul>
                  <li>2 parts Tequila</li>
                  <li>2 parts Mezcal</li>
                  <li>1 part Tamarind syrup / paste</li>
                  <li>1 part Lime Juice</li>
                  <li>1 part Cointreau</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Planter&apos;s Punch
                </Typography>
                <ul>
                  <li>2 parts Gold Rum</li>
                  <li>2 parts Spiced Rum</li>
                  <li>1 part Luxardo</li>
                  <li>4 parts Pineapple Juice</li>
                  <li>Splash of sugar / simple syrup</li>
                  <li>Angostura Bitters</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Hurricane (variant)
                </Typography>
                <ul>
                  <li>2 parts Light Rum</li>
                  <li>2 parts Dark Rum</li>
                  <li>1 part Cointreau</li>
                  <li>1 part Lime Juice</li>
                  <li>4 parts Passion Fruit Juice</li>
                  <li>1 splash Grenadine</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Mango Piña Colada
                </Typography>
                <ul>
                  <li>1 part Mango Juice</li>
                  <li>1 part Pineapple Juice</li>
                  <li>1 part Light Rum</li>
                  <li>1 part Malibu</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Isla Bonita
                </Typography>

                <ul>
                  <li>2 parts Bacardi Dragonberry</li>
                  <li>1 part Midori</li>
                  <li>1 part Triple Sec</li>
                  <li>2 parts Pineapple Juice</li>
                  <li>1 part Coconut Cream</li>
                  <li>Splash of Grenadine</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Summer Sangria
                </Typography>
                <ul>
                  <li>1 Bottle Lini Lambrusco</li>
                  <li>3 parts Canton</li>
                  <li>3 parts Myer&apos;s Rum</li>
                  <li>2 parts St Germain</li>
                  <li>2 Tablespoons sugar</li>
                  <li>1/2 large orange</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Fisherman&apos;s Cup
                </Typography>
                <ul>
                  <li>2 parts Rum</li>
                  <li>1 part Tentura</li>
                  <li>1 part Grapefruit juice</li>
                  <li>2 parts Ginger Beer</li>
                  <li>1 splash Cinnamon Syrup</li>
                  <li>1 part Mint</li>
                  <li>Angostura Bitters</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Tropical Itch
                </Typography>
                <ul>
                  <li>2 parts Dark Rum</li>
                  <li>2 parts Bourbon</li>
                  <li>1 part Curaçao</li>
                  <li>1 part Passion Fruit Juice</li>
                </ul>

                <Typography variant="h4" color="primary">
                  Chit Cha Toddy
                </Typography>
                <ul>
                  <li>3 parts Rye whiskey</li>
                  <li>1 part Benedictine Liqueur</li>
                  <li>2 parts Lemon Juice</li>
                  <li>2 parts Ginger Syrup</li>
                  <li>Splash Honey</li>
                  <li>5 part Oolong Tea, hot-brewed</li>
                  <li>Garnish with lemon half-wheels studded with cloves, mint leaves, and cinnamon sugar</li>
                </ul>
              </Typography>
              <div className={classes.buttonBar}>
                <a href="/">
                  <Button color="primary" variant="outlined" className={classes.actionButton}>
                    Home
                  </Button>
                </a>
              </div>
            </div>
          </Paper>
        </div>
        <Footer />
      </>
    );
  }
}

Cocktails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Cocktails));
