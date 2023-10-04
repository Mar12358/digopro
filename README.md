<a name="readme-top"></a>

<div align="center">
  <br/>
  <br/>
  <br/>
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <br/>
  <h1><b>Book An Appointment</b></h1><a name="about-project"></a>
</div>







<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->


<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Book An Appointment ](#-book-an-appointment-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites ](#prerequisites-)
    - [Setup ](#setup-)
    - [Install ](#install-)
    - [Usage ](#usage-)
    - [API Documentation ](#api-documentation-)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Book An Appointment <a name="about-project"></a>

> This is a 2 apps in 1 web app built connecting React/Redux (Front-End) with Ruby on Rails API (Back-End). You can Add/Remove Lectures and make Reservations.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> The site was built with React and Redux, Ruby on Rails and PSQL

 <details>
  <summary>Client Front</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Client Back</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **API Endpoints**
- **Lecture**
- **Reservation**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- - Not available -->

## 🚀 Live Demo <a name="live-demo"></a> 



[Live Demo Link](https://reserve-lectures.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.


### Prerequisites <a name="prerequisites"></a>

In order to run this project you need to have:

- Ruby
- Node
- Postgres
- Text editor

### Setup <a name="setup"></a>

- Clone this repository to your desired folder:


```sh
  cd my-folder
  git clone https://github.com/Mar12358/book-an-appointment.git book-an-appointment
  cd book-an-appointment
```

- Ensure you set your current ruby version on Gemfile.
- Set your postgres username and password, do so on `config/database.yml`.

### Install <a name="install"></a>

- Now, you need to install node dependencies, run:
```sh
  npm install
```
- We built a script for you to build the whole project at once (including db setup and seeds), run:

```sh
  npm run project:build
```


### Usage <a name="usage"></a>

- On file `config\puma.rb`, comment the setup for deployment, line 28 ( # workers ENV.fetch("WEB_CONCURRENCY") { 4 }) **to make it work locally**.

- Once you completed the Install section succesfully, run:
```sh
  rails server
```

- If you want to watch React and Tailwind changes run:

```sh
  npm run watch
```

- You could also run both the server and watch changes by running only:

```sh
 npm start
```
### API Documentation <a name="api-documentation"></a>

Once you ran the server, navigate to `http://127.0.0.1:3000/api-docs`.
<!-- ### Run tests

To run tests, run the following command:

```
rspec
``` -->

<!-- ### Deployment

You can deploy this project using:

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Martín Ezequiel González**

- GitHub: [@Mar12358](https://github.com/Mar12358)
- Twitter: [@MarezegonZ](https://twitter.com/MarezegonZ)
- LinkedIn: [Martin Ezequiel Gonzalez](https://www.linkedin.com/in/martin-ezequiel/)


👤 **Abraham Christopher**

- GitHub: [@cabraham1](https://github.com/cabraham1)
- Twitter: [@cabrahama](https://twitter.com/_cabraham)
- LinkedIn: [Abraham Christopher](https://www.linkedin.com/in/abrahamchristopher)


👤 **Edahi Gutiérrez**

- GitHub: [@edahigure](https://github.com/edahigure)
- Twitter: [@edahigure](https://twitter.com/edahigure)
- LinkedIn: [edahigure](https://linkedin.com/in/edahigure)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Improve Style**
- [ ] **Add Admin priviledges**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>


Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Mar12358/hello-rails-react/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please give it a ⭐️!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for this opportunity to learn and grow as a developer.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **Do I need to install any program before running this project?**

  - [ ] **Yes, you need to install PostgreSQL and Ruby** 
  
  <br>

- **Can I use this project for my own purposes?**

  - [ ] **Yes, you can.**



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.

This project is [MIT](./LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>