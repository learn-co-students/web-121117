

const fetchPaintings = () => {
  return fetch('http://localhost:3001/api/v1/paintings').then(r => r.json())
}

const sendPaintingUpvote = (paintingId) => {
  return fetch(`http://localhost:3001/api/v1/paintings/${paintingId}`, {
      method: "PATCH"
  }).then(r => r.json())

}

export default {
  fetchPaintings
}
