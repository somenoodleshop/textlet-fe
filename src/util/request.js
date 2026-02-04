const onSuccess = response =>
  !response.ok ? Promise.reject(response) : response.json()
