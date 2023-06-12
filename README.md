# Developer Portfolio

## This is a fully responsive and awesome developer portlofio template

![Home](/public/homepageImage.jpg)

Edit `src/portfolio.ts` to get your personal data. Also in `src/portfolio.ts`, you can edit the visibility of some sections by simply changing the display to `false`. The default theme is `dark mode`. If you need `light mode` as your default theme, edit `src/ThemeContext.tsx`. 

The template is aimed to be open source. If you'd like to contribute, fork, create and after creating something awesome or solved an error, feel free to create a `Pull Request`.

# Getting started

```
# Clone the repo
git clone https://github.com/Leestan360/portfolio.git

# Navigate into the repo
cd portfolio

# Install dependencies
npm install

# Start the server
npm start
```

# Linking portfolio to GitHub
First, generate a classin GitHub personal access token by following the [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). The token is like a password. Ensure to use it only in environment variables.

Second, on your editor:

1. Create a new file named `.env` in the root of the project directory.
   
   ```
   Portfolio
     - node_modules
     - public
     - src
     - .env       <-- create it here
     - .gitignore
     - package-lock.json
     - package.json
     - README.md
     - tailwind.config.js
     - tsconfig.json
   ```

2. In the `.env` file, add your GITHUB_TOKEN and GITHUB_USERNAME.
   
   ```  
   // .env
   GITHUB_TOKEN = "YOUR GITHUB TOKEN"
   GITHUB_USERNAME = "YOUR GITHUB USERNAME"
   ```

Note: Open Source Projects section only show pinned items of your GitHub. Pin the projects you want to be displayed on your GitHub website account.

# Deployment

After you're done with setting up the website, you should host it online in a hosting platform of your choice starting with GitHub pages. 

There are many hosting platforms and you should choose one that suits you.

## Deploying to GitHub Pages
To deploy your site to gthub pages, read on [Deploy React App to GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for react.

Since your site needs to be updated often, you should configure GitHub Actions for your repo to use.

## Configuring GitHub Actions
The Profile and the Repository information from GitHub is only created at the time of deploy and the site needs to be redeployed if those information needs to be updated. So, a configurable [CRON Job](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#scheduled-events) is setup which deploys your site every week, so that once you update your profile on GitHub it is shown on your portfolio. You can also trigger it manually using ```workflow_dispatch``` event, see [this guide](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/) on how to do that.

   - When you are done with the configuration, we highly recommend to read through the  [GitHub Actions Configuring a workflow](https://docs.github.com/en/actions/using-workflows) docs.

## FInally, deploy to GitHub Pages
Guide to deploying to GitHub Pages
- Navigate to ```package.json``` and enter your domain name instead of ```https://Leestan360.github.io/portfolio/``` in homepage variable. For example, if you want your site to be ```https://<your-username>.github.io/portfolio```, add the same to the homepage section of ```package.json```.
- In short you can also add ```/portfolio``` to ```package.json``` as both are exactly same. Upon doing so, you tell ```create-react-app``` to add the path assets accordingly.
- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a ```CNAME``` file to the ```public/``` folder.
- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).
- Remember to create [secrets](https://docs.github.com/en/rest/actions/secrets?apiVersion=2022-11-28) in your repo where you'll store your secrets that'll be used to fetch your data from GitHub

# Technologies Used
1. [React](https://react.dev/)
2. [TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app)
3. [Typescript](https://www.typescriptlang.org/)


# Project Maintainers
1. Stanley Mayore [GitHub](https://github.com/Leestan360), [Twitter](https://twitter.com/MayoreStanley), [LinkedIn](https://www.linkedin.com/in/stanley-mayore/)
2. Bebeto Nyamwamu [GitHub](https://github.com/realonbebeto), [Twitter](https://twitter.com/realonbebeto), [LinkedIn](https://www.linkedin.com/in/realonbebeto/), [Portfolio](https://realonbebeto.github.io)