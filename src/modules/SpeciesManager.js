const remoteURL = "http://localhost:5002"

export default {
  getAll() {
    return fetch(`${remoteURL}/species`)
    .then(e => e.json())

  }

}