import nightmare from 'nightmare'

export const visit = path => {
  const config = {
    show: false,
    gotoTimeout: 4000
  }

  return nightmare(config).goto('http://localhost:3000/' + path)
}
