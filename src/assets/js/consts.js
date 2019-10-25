let BASE_URL
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'https://test-api-chpp.log56.com'
    break
  case 'testing':
    BASE_URL = 'https://test-api-chpp.log56.com'
    break
  case 'production':
    BASE_URL = 'https://api-chpp.log56.com'
    break
  default:
    break
}

export {
  BASE_URL
}
