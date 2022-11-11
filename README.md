# social-media-client - Workflow CA

## The following workflows/hooks are required:

Project is configured to run Prettier on commit<br>
Project is configured to run ESLint on commit<br>
Project is configured to run Jest on commit<br>
Project is configured to deploy to pages on merge to default<br>

## The following file changes are required:

Project readme file is updated to include new configuration information and status badges<br>
Project is configured for hosting (e.g. CDN links or a Bundler)<br>

## The following features must be automatically tested with unit tests:

The login function returns a valid token when provided with valid credentials<br>
The logout function clears the token from browser storage<br>
The create item function creates a new item on the API<br>

## The following features must be automatically tested with end-to-end tests:

The login form validates user inputs correctly based on API restrictions<br>
The create item form validates user inputs correctly based on API restrictions<br>
The logout button logs the user out when clicked<br>

## badges

[![pages-build-deployment](https://github.com/gitAji/social-media-client/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/gitAji/social-media-client/actions/workflows/pages/pages-build-deployment)
