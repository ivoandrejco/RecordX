import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const HTTP = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export function getPatient (id, resolve) {
  HTTP.get('patients/' + id)
    .then(response => {
      if (typeof resolve === 'function') {
        resolve(response.data)
      } else {
        console.log('Expected function, received: ' + typeof resolve)
      }
    })
    .catch(e => {
      console.log('ERROR: ' + e)
    })
}
