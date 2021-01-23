import React from "react";
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: "all .25s linear",
    background: "var(--black)",
    backgroundImage: `url("https://www.transparenttextures.com/patterns/otis-redding.png")`,
    boxShadow: "0px 2px 2px 0px var(--white)",
    '&:hover': {
      boxShadow: "-1px 10px 29px 0px var(--white)"
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    flexGrow: 1,
    backgroundColor: "var(--black)",
  },
  cardContent: {
    flexGrow: 1,
    color: "var(--white)",
    fontSize: ".6rem"
  },
  cardText: {
    fontSize: ".75rem"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function Album(props) {
  // const albumInfoClass = classnames("album__info", {
  //   "album__info--explicit": props.collectionExplicitness === "explicit"
  // });
  const { setSong, songData } = props;

  const handleClick = () => {
    setSong(songData)
  }

  const classes = useStyles();
  return (
    <Grid item key={props.key} xs={6} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
        <CardMedia
          className={classes.cardMedia}
          image={props.artworkUrl100}
          title={props.trackName}
          style={useStyles.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h7" component="h2">
            {props.trackName}
          </Typography>
          <Typography className={classes.cardText}>
            {props.artistName}
          </Typography>
          <Typography className={classes.cardText}>
            {props.collectionName}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
