# Github Users

Github Users is a responsive website which will allow you to search any Github user and will show all their repositories details upon selecting the user. This website is made using [Ionic (With Angular)](https://ionicframework.com/docs/angular/overview)

Check out the live version [here](https://github-users-preetiw.vercel.app/)

# What do you need for the Environment?
* Firstly download [Node](https://nodejs.org/) (supports Node 10.3+, but the latest Node LTS is always recommended). Use [this](https://www.youtube.com/playlist?list=PLBBog2r6uMCQN4X3Aa_jM9qVjgMCHMWx6) for step by step installation guide 
* Install Ionic globally: `npm install -g @ionic/cli`
* Install Angular globally: `npm install -g @angular/cli`
* Any editor or your choice

# How to Run the Project?
* Clone the repo on your machine: `git clone 'GITHUB_PROJECT_URL'`
* Go to the root of the project folder execute either `npm install` to install all the dependencies modules for the project
* run `npm start`
* you will see `open your browser on http://localhost:4200/` message in the console
* Open the mentioned URL in the browser to access the website

__Note__:
### API limit

The Github API has a fairly strict limit. When running the app locally you can export a [personal
access token](https://github.com/blog/1509-personal-api-tokens) and put it in `connect.service.ts` and uncomment the code. This will be
sent along in any API calls to increase the limit.


# How to Run the unit tests?

* Open terminal inside the project folder
* Navigate inside the GithubUsers: `cd GithubUsers`
* Run `npm test`

# Deployment

Using Vercel for automatic deployment of website, for more information click [here](https://vercel.com/) 

# Documentation & Useful links
- [User Search API](https://docs.github.com/en/rest/reference/search#search-users)
- [Repo search API](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)
- [Crash Course](https://www.youtube.com/watch?v=r2ga-iXS5i4)
- [Getting Started](https://ionicframework.com/getting-started#cli)
- [Docs](https://ionicframework.com/docs)
- [UI components](https://ionicframework.com/docs/components/)
- [Testing with Ionic](https://ionicframework.com/docs/building/testing)
- [CSS utilities](https://ionicframework.com/docs/layout/css-utilities)
- [Theming your app](https://ionicframework.com/docs/theming/basics)
