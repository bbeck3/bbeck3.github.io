let project1 = {
  id: 1,
  title: ' Book Assignment 1: Web Map Creation',
  hasThumbnail: true
  url: 'http://arcg.is/2DMo71c'
  description: 'View a small tour of Philadelphia'
}
let project2 = {
  id: 2,
  title: 'Book Assignment 2',
  hasThumbnail: true
  url:'https://arcg.is/0445am'
  description:'Click here to see a web application that is a world Map of significant earthquakes in the past 30 days'
}
let projects = [
  project1,
  project2
]
for (let i = 0; i < projects.length; i++) {
  if (projects[i].hasThumbnail === true) {
  console.log('images/ss-project-' + projects[i].id + '.png') // build and log an image file name based on the project ID
}
}
console.log('Element ' + i + ' title: ' + projects[i].title) // log the current project's title
console.log('images/ss-project-' + projects[i].id + '.png') // build and log an image file name based on the project ID
