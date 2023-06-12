const fs = require('fs');
// const { process } = require('process');
require('dotenv').config()
const { graphql, GraphqlResponseError } = require("@octokit/graphql");

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  graphqlError: "Graphql Response Error"
};

//process.env.
if (process.env.GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  };

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`   //
  },
});

// Define your GraphQL query and execute the request
async function fetchProfileRequest(query: any) {
  try {
    const response = await graphqlWithAuth(query);
    return response;
  } catch (error: any) {
    // Handle the error, such as logging or displaying a friendly message
    if (error instanceof GraphqlResponseError) {
    console.error(`${ERR.graphqlError}: ${error.message}`);
    throw error;
    } else {
      console.error(`${ERR.requestFailed}: ${error.message}`);
      throw error
    }
  }
}

var query = `
{
  user(login:"${process.env.GITHUB_USERNAME}") { 
    name
    bio
    isHireable
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`;

console.log(`Fetching profile data for ${process.env.GITHUB_USERNAME}`);

fetchProfileRequest(query).then((response: any)=> {
  var response_data = JSON.stringify(response)
  fs.writeFile("./public/profile.json", response_data, 'utf8', (err: any) => {
      if (err) return console.log(err);
      console.log("saved file to public/profile.json");
  });
})