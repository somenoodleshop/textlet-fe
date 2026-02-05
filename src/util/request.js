const onSuccess = response =>
  !response.ok ? Promise.reject(response) : response.json()

const get = url => fetch(url).then(onSuccess)
const post = url => data =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(onSuccess)
