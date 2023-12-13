/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Typography, Paper, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import photo from './food404.png'

import useStyles from './styles'
import { PlaceSharp } from '@material-ui/icons'

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  // console.log(coordinates, bounds)
  const classes = useStyles()
  // console.log(places)
  //* This isDesktop variable is going to set false if the width of the device is larger than 600px
  const isDesktop = useMediaQuery('(min-width: 600px)')
  console.log(coordinates)
  return (
    <div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        //* https://console.cloud.google.com/projectcreate
        bootstrapURLKeys={{ key: 'AIzaSyAqf_7nphSyEMrfmcwn4yzwaFrrKMADR4M' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          // console.log(coordinates, bounds)
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              isDesktop
                ? (
                  <LocationOnOutlinedIcon color='primary' fontSize='large' />
                  )
                : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : `${photo}`}
                      alt={place.name}
                    />
                    <Rating size='small' value={Number(place.rating)} readOnly />
                  </Paper>
                  )
        }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
