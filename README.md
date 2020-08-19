 <img width='200px' src="https://lh3.googleusercontent.com/pw/ACtC-3eL9FsncUFUdmAWA6DrkjUXHkAZyWIZMWWogORhN5bXjMLH6DJq0ICrvkqoHFFvwpTEWi2XIoPBm7-H5fev3W_HyNuG2e2iWmlZNNsNMB23T3CeVVKtfAoSRisBfpH7AMLPvW2CNykBS7lszVKz-OtJMQ=s1680-no?authuser=0"/>

# LGBTQ+ Meetups
### My Flatiron School Final Project
 
 ### This repository includes *both* the frontend, and backend (in their respective directories). For the functional Heroku hosted version, visit: [LGBTQ-Meet Link](https://lgbtq-meetups.herokuapp.com/) 
### [See Heroku-Hosted Frontend Repository](https://github.com/boostinwrx/lgtbtq-meetups-frontend)

 ---
 #### This branch will soon become obsolete and the old front-end repo (which is no longer current, see above link for frontend) will be removed. [**See updated *`refactor`* branch in progress.**](https://github.com/boostinwrx/LGBTQ-meetup-app/tree/refactor)
 ---
 <img width='300px' src="https://lh3.googleusercontent.com/pw/ACtC-3eL9FsncUFUdmAWA6DrkjUXHkAZyWIZMWWogORhN5bXjMLH6DJq0ICrvkqoHFFvwpTEWi2XIoPBm7-H5fev3W_HyNuG2e2iWmlZNNsNMB23T3CeVVKtfAoSRisBfpH7AMLPvW2CNykBS7lszVKz-OtJMQ=s1680-no?authuser=0"/>



# LGBTQ+ Meetups

> Finally, a safe space for the LGBTQ+ community to create and find social meetups with gender affirming, supportive people near you!

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) 
[![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 


---



## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Sources](#sources)
- [License](#license)
- [Contribution]

---


## About:
Concept for a safe space for the LGBTQ+ community to create and find social meetups with gender affirming, supportive people near them.


---


### Repository Status (updated):
 
* This repository includes the backend (I've removed the old front-end repository in this branch). For the functional Heroku hosted version, visit: [LGBTQ-Meet Link](https://lgbtq-meetups.herokuapp.com/) 
  
* See Heroku-Hosted [Frontend Repository](https://github.com/boostinwrx/lgtbtq-meetups-frontend)
 

---


## Features:
Everyone, no matter their sexual preference or gender identity, are welcome. sers can find meetups near them to hang out with like-minded people.
Creating a meetup is effortless. 
Simply create an account, and create a custom meetup with a title, description, map location (just start tying an address, we'll take it from there), date/time, and a category of meetup (ex.transgender/lesbian/non-binary, etc.).


---



## Technologies: 
### Front-end:
#### JavaScript Frameworks:
* React
* Redux
#### CSS Frameworks:
* Material UI
* Bootstrap
  * React-Bootstrap
* [Material Design Bootstrap React (MDB Rect)](https://react.mdbootstrap.com/)
#### Node Packages and Dependencies Installed:
* redux Thunk
* [react-mapbox-autocomplete](https://www.npmjs.com/package/react-mapbox-autocomplete)
   * Well-done component that uses MapBox API to autocomplete cities and states on search
   * Also useful for getting latitude and longitude after autocomplete, you can then store lat/long in Redux store to use later
* [react-Moment](https://github.com/headzoo/react-moment)
* [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js)
* [axios](https://www.npmjs.com/package/axios)
* [react-mapbox-gl](https://alex3165.github.io/react-mapbox-gl/)
    * Fantastic React binding of mapbox-gl-js
    * Best/easiest experience I've encountered using Mapbox in React/Redux (as opposed to: standard mapbox-gl-js and react-map-gl)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [Material UI](https://material-ui.com/)
* [MDB React](https://react.mdbootstrap.com/)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
#### JavaScript Dependencies:
*  material-ui/core: ^4.8.3
*    @material-ui/styles: ^4.8.2
*    @testing-library/jest-dom: ^4.2.4
*    @testing-library/react: ^9.3.2
*    @testing-library/user-event: ^7.1.2
*    axios: ^0.19.1
*    bootstrap: ^4.4.1
*    bower: ^1.8.8
*    expect: latest
*    history: latest
*    mapbox-gl: ^1.7.0
*    material-kit-react: ^1.8.0
*    mdbreact: ^4.25.1
*    mocha: ^7.0.0
*    moment: ^2.24.0
*    prop-types: latest
*    rc-datetime-picker: ^1.6.1
*    react: ^16.12.0
*    react-bootstrap: ^1.0.0-beta.16
*    react-datetime: ^2.16.3
*    react-dom: ^16.12.0
*    react-map-gl: ^5.2.2
*    react-mapbox-autocomplete: ^0.2.3
*    react-mapbox-gl: ^4.8.2
*    react-router: latest
*    react-router-bootstrap: ^0.25.0
*    react-router-redux: ^4.0.8
*    react-scripts: 3.3.0
*    react-time: ^4.3.0
*    redux: ^4.0.5
*    redux-thunk: ^2.3.0
*    redux-time: 0.0.29
*    semantic: 0.0.1
  

---

### Backend:
* Rails (6.0.2.1)
* PostgreSQL
* [MapBox-SDK-Ruby](https://github.com/mapbox/mapbox-sdk-rb)


#### Gem Dependencies:
  * mapbox-sdk
  * bcrypt
  * JWT
  * bootsnap (>= 1.4.2)
 * byebug
  * listen (>= 3.0.5 < 3.2)
 *  pg
 *  puma (~> 4.1)
  * rails (~> 6.0.2 >= 6.0.2.1)
 *  spring
  * spring-watcher-listen (~> 2.0.0)
  * tzinfo-data
  
  *  ruby version (2.6.1p33)


---


## Contribution: 

Contribution is welcome and stronly encouraged.
I truly believe this concept, with some polishing and additional features, can really help the LGBTQ+ community connect.


---

## Installation

- This installation assumes you have a local development environment already setup (Ruby, Rails, npm, bundler, etc.)
- This also assumes you've already setup a local PostgreSQL server that is currently active ([here's a tutorial that can help otherwise](https://www.robinwieruch.de/postgres-sql-macos-setup))


### Clone Both Repos

- Create a directory to hold both the front-end repository, and back-end repository (for convinience)

- Fork, then clone the back-end repo to your local machine `https://github.com/boostinwrx/LGBTQ-meetup-app.git`

- Fork, then clone the back-end repository to your local machine `https://github.com/boostinwrx/lgtbtq-meetups-fronten.git`


### Back-end Setup

> Install dependencies

```shell
$ bundle install
```

> Create, migrate, and seed PostgreSQL database

```shell
$ rails db:create
$ rails db:migrate
$ rails db:seed
```



### Front-end Setup

> now install npm dependencies

```shell
$ npm install
```


---

## Sources


[Gatsby Starter: Mate](https://github.com/EmaSuriano/gatsby-starter-mate) starter

*Special-thanks: Huge thanks to [Ema Suriano](https://github.com/EmaSuriano), the creator of the beautifully made SPA Gatsby starter this portolio was built upon, check out [gatsby-starter-mate on GitHub](https://github.com/EmaSuriano/gatsby-starter-mate).*

Refer to Gatsby Starter: Mate for installation instructions:
* [Mate Starter README](https://github.com/EmaSuriano/gatsby-starter-mate/blob/master/README.md) 

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
