import axios from 'axios'

export default axios.create({
  baseURL: 'https://quizapp-57505.firebaseio.com/'
})
