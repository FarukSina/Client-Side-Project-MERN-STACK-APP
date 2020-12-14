/*
Principal author: Tomoaki Morita
*/
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import EditMovie from './EditMovie';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

const MovieListItem = ({id, item, editMovie, removeMovie}) => {
  const classes = useStyles();

    const handleEditClick = () => {
    };
    
    useEffect(() => {
        console.log("hello here");
        //console.log(item);
    })

  return (
      
    <ListItem className="list-group-item">
      <div className="titleBox">
        <ListItemText
          primary={item.name}
            secondary={
              <React.Fragment>
              <Typography component="span" className={classes.inline}>
                  {item.year}
                </Typography>
              </React.Fragment>
            }
          />
      </div>
      <ListItemSecondaryAction>
        <Grid container spacing={1}>
          <Grid item>
            <Button onClick={()=> removeMovie(id)}>Delete</Button>
          </Grid>
          <Grid item>
              <EditMovie item={item} editMovie={editMovie} />
          </Grid>
        </Grid>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MovieListItem;