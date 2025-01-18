import { RANDOM_USERS_ENDPOINT } from '../resources/randomUser'
import { RandomUsers } from '../types/apiResponses/randomUsersType'

export function getUsers(): Promise<RandomUsers> {
  
  const queryParams = new URLSearchParams({
    results: '10',
    seed: 'fixedSeedValue' 
  })

  return fetch(`${RANDOM_USERS_ENDPOINT}?${queryParams.toString()}`)
    .then((res) => {
      if (!res.ok) {
        if (res.status === 400) {
          throw new Error('Error en el fetching de datos')
        }
        throw new Error(`Error en el servidor: ${res.status}`)
      }
      return res.json()
    })
}
