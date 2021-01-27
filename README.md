heroku website may be unavailable since heroku free trial expires
# TuneS (Back-End)

TuneS is a music search and social website powered by Spotify Web API. Major features are:

* Search track/album/artist and view details.
* Like subject or comment.
* Comment on the subject.
* Edit album/artist introduction and track lyric.
* Follow users.
* View user profile.

## Getting Started

### Prerequisites

For development, you will need Node.js and MongoDB installed on your environement.

### Configuration

In config/dev.js, you need to set the required environemnt variables manually for development purpose. For production, config/prod.js specifies the heroku process.env variables. Currently, the front-end is hosted on https://tunes-app.herokuapp.com.

### Available Scripts

Before running the server, run:

### `sudo mongod`

Opens the MongoDB server.

Then in the project directory, run:

### `npm install`

Installs the dependencies in the local node_modules folder.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Author

Zexi Han, Zhongheng Yang, Tao Ouyang
