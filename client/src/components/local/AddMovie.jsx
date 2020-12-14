/*
Principal author: Tomoaki Morita
*/
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddMovie({addMovie}) {
  const [open, setOpen] = React.useState(false);
  const [movie, setMovie] = React.useState({ name: '', year: '' });
  const [name, setName] = React.useState('');
  const [year, setYear] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen(false);
    addMovie({ name: name, year: year });
  }

  const handleChangeOnName = (e) => {
    setName(e.target.value);
  };

  const handleChangeOnYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add movie
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Movie name"
            type="text"
            fullWidth
            onChange={handleChangeOnName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Year"
            type="number"
            fullWidth
            onChange={handleChangeOnYear}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose2} color="primary">
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}