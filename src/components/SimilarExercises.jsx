import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscle,equipment}) => {
  return (
    <Box sx={{ mt:{lg:'100px',xs:'0'} }}>
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p:'2',position:'relative' }}>
        {targetMuscle.length  ?  <HorizontalScrollbar data={targetMuscle} /> : <Loader />}
      </Stack>

      <Typography variant='h3' mb={5}>Exercises that use the same equipment </Typography>
      <Stack direction='row' sx={{ p:'2',position:'relative' }}>
        {equipment.length  ?  <HorizontalScrollbar data={equipment} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises