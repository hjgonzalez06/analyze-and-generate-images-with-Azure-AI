import { VISION_ENDPOINT, VISION_KEY } from '../../constants/computer_vision'

async function analyzeImage (imageUrl) {
  const params = new URLSearchParams({
    features: 'tags,people',
    language: 'en'
  })
  params.append('api-version', '2023-04-01-preview')
  const url = new URL(`?${params}`, VISION_ENDPOINT)
  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': VISION_KEY
  }
  const body = JSON.stringify({
    url: imageUrl
  })

  try {
    const response = await fetch(url, { method: 'POST', headers, body })

    if (response.status >= 400) {
      throw new Error(`Request to Image Analysis API has failed with status code ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export default analyzeImage
