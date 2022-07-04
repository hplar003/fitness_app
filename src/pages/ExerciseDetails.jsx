import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

import { exerciseOptions,fetchData,youtubeOptions } from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscle, setTargetMuscle] = useState([])
  const [equipment, setEquipment] = useState([])
  const {id} = useParams()

  useEffect(() => {
    
    const fetchExerciseData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailsData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions)
      setexerciseDetail(exerciseDetailsData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExerciseData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions)
      setTargetMuscle(targetMuscleExerciseData)

      const equipmentExerciseData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,exerciseOptions)
      setEquipment(equipmentExerciseData)

    }
    fetchExerciseData()
 
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail} id={id} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle={targetMuscle} equipment={equipment} />
    </Box>
  )
}

export default ExerciseDetails