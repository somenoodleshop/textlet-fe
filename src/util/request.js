const onSuccess = response =>
  !response.ok ? Promise.reject(response) : response.json()

const get = url => fetch(url).then(onSuccess)
