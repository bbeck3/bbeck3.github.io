let projectData = []

projectData[0] = {
  id: 1,
  title: ' Book Assignment 1: Web Map Creation',
  hasThumbnail: true
  url: 'http://arcg.is/2DMo71c'
  description: 'View a small tour of Philadelphia'
}
projectData[1] = {
  id: 2,
  title: 'Book Assignment 2',
  hasThumbnail: true
  url:'https://arcg.is/0445am'
  description:'Click here to see a web application that is a world Map of significant earthquakes in the past 30 days'
}

for (let i = 0; i < projects.length; i++) {
  if(projectData[i].thumb === true){
    console.log('images/ss-project' + projectData[i].id + '.PNG')
  } else {
    console.log('images/no-preview.png')
  }
}
