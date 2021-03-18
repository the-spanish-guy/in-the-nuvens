module.exports = {
  formatUrl: (path1, path2) => {
    let url = `${path1}/` || ''
    url += path2 || ''
    return url
  }
}