const setUrlParams = (params: Record<string, string | string[] | undefined | null | boolean>) => {
  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      params[key] = value.join(',')
    }
    if (!params[key]) {
      delete params[key]
    }
  }

  return params
}

export default setUrlParams
