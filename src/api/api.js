import axios from 'axios'

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat
      },
      headers: {
        'x-rapidapi-key': 'a0e8b054f2msha43bb77156ca5d5p11f289jsn93353116755b',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
