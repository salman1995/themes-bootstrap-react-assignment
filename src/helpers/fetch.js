
export const fetchAPIHelper = async ({
  url,
  body,
  method,
  headers,
  isFormData,
  isResponseTypeText,
  isResponseTypeContent,
}) => {
  let data, status = false, statusCode  = ''
  try {

    const res = await fetch(url, {
      method: method ? method:  'POST',
      headers: headers ? headers: {
        'Content-Type': 'application/json',
      },
      body: isFormData  ? body: JSON.stringify(body),
    })

    if(res.status === 204)  
      data  = ""
    else  if(isResponseTypeText)
      data  = await res.text()
    else  if(isResponseTypeContent)
      data  = await res.blob()
    else  
      data  = await res.json()

    status = res.ok
    statusCode  = res.status
    
    return  res.ok ? { data, status }: { data,  request:  body, status, statusCode, url  }

  } catch (e) {
    return  { e,  request:  body, status, statusCode, url  }
  } finally {
    return { data, status, request: body, statusCode, url }
  }
}


/**
* Requests helper that requests url based on given inputs
* @param  {string} url url to visit
* @param  {string} body body of request
* @param  {string} success success dispatch on request success
* @param  {string} failure failure dispatch on request failure
* @param  {string} dispatchData dispatch Data to dispatch on success along with fetch response data
* @param  {string} method request method
* @param  {string} headers request headers
* @param  {boolean} isFormData form data check
* @return {object} response data and status
*/
export const fetchAPIMiddleware = ({
  url,
  body,
  method,
  headers,
  isFormData,
  isResponseTypeText,
  isResponseTypeContent,
  success,
  failure,
  dispatchData,
  
}) => async (dispatch, getState) => {

  const response  = await fetchAPIHelper({
    url,
    body,
    method,
    headers,
    isFormData,
    isResponseTypeText,
    isResponseTypeContent,
  }),
    type  = response.status  ? success:  failure,
    data = dispatchData ? { ...response, ...dispatchData }: { ...response }

  dispatch({  type, data  })

  return  response
}