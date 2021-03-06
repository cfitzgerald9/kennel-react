const remoteURL = "http://localhost:5002"

export default {
  getOne(id) {
    return fetch(`${remoteURL}/employees/${id}`)
    .then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`)
    .then(e => e.json())
  },
  post(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  },
  put(editedEmployee) {
    return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployee)
    }).then(data => data.json());
  }
}