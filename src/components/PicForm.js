import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPic } from '../actions/picActions'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const PicForm = () => {
  const [uploadPic, setUploadPic] = useState({ station_id: '', pic_url: '' });

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.currentUser);
  const error =  useSelector(state => state.pics.error);

  const handleChange = e => {
    setUploadPic({ ...uploadPic, [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault ();
    const pic = {
      user_id: currentUser.id,
      station_id: uploadPic.station_id,
      pic_url: uploadPic.pic_url,
      likes: 0,
    };
    dispatch(createPic(pic));
  };

  const stations = [
    {
      value: '1',
      label: 'Five Points'
    },
    {
      value: '2',
      label: 'Airport'
    },
    {
      value: '3',
      label: 'College Park'
    },
    {
      value: '4',
      label: 'Lindbergh Center'
    },
    {
      value: '5',
      label: 'Peachtree Center'
    },
    {
      value: '6',
      label: 'H. E. Holmes'
    },
    {
      value: '7',
      label: 'Kensington'
    },
    {
      value: '8',
      label: 'West End'
    },
    {
      value: '9',
      label: 'Arts Center'
    },
    {
      value: '10',
      label: 'North Springs'
    },
    {
      value: '11',
      label: 'North Avenue'
    },
    {
      value: '12',
      label: 'Indian Creek'
    },
    {
      value: '13',
      label: 'Midtown'
    },
    {
      value: '14',
      label: 'Avondale'
    },
    {
      value: '15',
      label: 'Doraville'
    },
    {
      value: '16',
      label: 'East Point'
    },
    {
      value: '17',
      label: 'Oakland City'
    },
    {
      value: '18',
      label: 'Georgia State'
    },
    {
      value: '19',
      label: 'Decatur'
    },
    {
      value: '20',
      label: 'Chamblee'
    },
    {
      value: '21',
      label: 'Lenox'
    },
    {
      value: '22',
      label: 'Dunwoody'
    },
    {
      value: '23',
      label: 'Inman Park/Reynoldstown'
    },
    {
      value: '24',
      label: 'Civic Center'
    },
    {
      value: '25',
      label: 'Brookhaven/Oglethorpe University'
    },
    {
      value: '26',
      label: 'Sandy Springs'
    },
    {
      value: '27',
      label: 'West Lake'
    },
    {
      value: '28',
      label: 'Buckhead'
    },
    {
      value: '29',
      label: 'Dome/GWCC/Philips/CNN'
    },
    {
      value: '30',
      label: 'Ashby'
    },
    {
      value: '31',
      label: 'Lakewood/Ft. McPherson'
    },
    {
      value: '32',
      label: 'Bankhead'
    },
    {
      value: '33',
      label: 'King Memorial'
    },
    {
      value: '34',
      label: 'Garnett'
    },
    {
      value: '35',
      label: 'Medical Center'
    },
    {
      value: '36',
      label: 'Vine City'
    },
    {
      value: '37',
      label: 'Edgewood/Candler Park'
    },
    {
      value: '38',
      label: 'East Lake'
    }
  ]


  return (
    <div className="pic-form">
      <form onSubmit={onSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TextField label="Pic URL"
               error={error}
               helperText={error ? error : null}
               name='pic_url'
               value={uploadPic.pic_url}
               onChange={handleChange}
               fullWidth
               margin="normal"
            />
          </Grid>
          {/* <Grid item xs={12} md={4} align="center"> */}
          {/*  <input */}
          {/*    accept="image/*" */}
          {/*    name='pic_url' */}
          {/*    onChange={handleChange} */}
          {/*    type="file" */}
          {/*  /> */}
          {/* </Grid> */}
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Station"
              name="station_id"
              value={uploadPic.station_id}
              onChange={handleChange}
              fullWidth
              margin="normal">
              {stations.map (option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container justify="center">
            <button type="submit" className="ui blue basic button">
              <i className="iconify icon:emojione-monotone:up-right-arrow icon-inline:false"/> Add Pic
            </button>
          </Grid>
        </Grid>
      </form>
      <br/>
    </div>
  )
}

export default PicForm;
