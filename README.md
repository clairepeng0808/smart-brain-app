<img src="./src/assets/logo-h.png"/>

# <div align='center'>💡 Smart Brain App</div>

<div align='center'>
<p>
    <img src="https://www.herokucdn.com/deploy/button.svg"/><p>
    <a href="https://smart-brain-claire.herokuapp.com/"><img src="https://img.shields.io/website?down_color=grey&down_message=offline&style=flat-square&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fsmart-brain-claire.herokuapp.com%2F"/></a>
    <img src="https://img.shields.io/npm/v/react?label=react&style=flat-square&color=9cf"/>

</p>
<p>
A face recognition app that uses the Clarifai API to detect and locate a human face in the picture.

A full-fledged app with user registration and login system. Frontend built with React.js, backend server and APIs with Node.js & Express.js, and PostgresSQL as database to keep track of how many entries a user has made. Deployed on Heroku.

</p>
<p><strong><a href="https://smart-brain-claire.herokuapp.com/">
Click here for Live demo</a></strong>
</p>
<img src="./src/assets/demo.gif"/>
</div>

## 📕 How to Use the App

- Sign Up / Log In
- Input an image url and click detect button
- The app detects the face in the picture and highlight it with a blue bounding box.

## ✨ Features

- A complete user registration system
- Modern & Responsive UI, particle background effects created with Particle.js library
- Separate frontend and backend, easy modifications

## ⚙️ Installation

From your command line, first clone the project:

### Clone this repository

```zsh
$ git clone https://github.com/clairepeng0808/smart-brain-app

Go into the repository
$ cd smart-brain-app

# Remove current origin repository
$ git remote remove origin
```

### Install the dependencies

```zsh
# Install dependencies
$ npm install

# Start dev development server
$ npm run dev
```

After installation, open [http://localhost:3000](http://localhost:3000) to view it in the browser. You can clone the [backend repo here](https://github.com/clairepeng0808/smart-brain-api)

### Changed the API URLs

Original

```zsh
fetch("https://radiant-forest-01776.herokuapp.com/imageurl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
```

If your backend is running on port 3001, changed your code to:

```zsh
fetch("http://localhost:3001/imageurl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
```

### New Build

```zsh
$ npm run start
```

### Deploy to Heroku

Please Refer to the [official document](https://devcenter.heroku.com/articles/git#tracking-your-app-in-git)

## 🤟 Languages

<div>
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
</div>

## 🛠️ Technologies

### APIs

- [Clarifai API](https://www.clarifai.com/models/face-detection) - Predict api to tell what is in your images, videos or text. Capture data about the physical world through images.

- [Smart Brain API](https://github.com/clairepeng0808/smart-brain-api) - Smart Brain API endpoints.

### NPM Packages

- [Material UI](https://material-ui.com/getting-started/installation/) - React UI framework
- [particles.js](https://vincentgarreau.com/particles.js/) - Lightweight JS library for creating particles.
- [serve](https://www.npmjs.com/package/serve) - for serving a single page app or static files
- [jQuery](https://www.npmjs.com/package/jquery) - to include jQuery in the project

## 💎 Credits

This project is a clone of one of the projects [Smart Brain](https://github.com/aneagoie/smart-brain) in the course: **The Complete Web Developer in 2020**. Thanks for the support from the instructor [Andrei](https://github.com/aneagoie) and the [ZTM community](https://github.com/zero-to-mastery).

## 📚 License

<img src="https://img.shields.io/github/license/clairepeng0808/smart-brain-app?style=flat-square&color=9cf" />
