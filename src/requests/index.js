import {API} from '../constants/Global';

const headers = {
  'Content-type': 'application/json',
  'Accept': 'application/json'
}

export const getSecretsRequest = () => fetch(`${API}/secrets`, {
  method: 'POST',
  mode: 'cors',
  headers
})
