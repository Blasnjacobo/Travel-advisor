/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import photo from './food404.png'

import useStyles from './styles'

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles()
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <Card>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : `${photo}`}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box className={classes.spacing}>
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews}</Typography>
        </Box>
        <Box className={classes.spacing}>
          <Typography variant='subtittle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box className={classes.spacing}>
          <Typography variant='subtittle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award, index) => (
          //* We are using just parenthesis and not cursly braces because we just want to return a value
          <Box my={1} className={classes.spacing} key={index}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, 'blank')}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website, 'blank')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
