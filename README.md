# Dynamic Form Builder

[![CircleCI](https://circleci.com/gh/davilima6/form-builder.svg?style=svg&circle-token=886a826989210ae84dcef4b759e297756508f88a)](https://circleci.com/gh/davilima6/form-builder)

You can see it running in:

- https://form-builder-exercise.now.sh/

Google LightHouse report in:

- https://lighthouse.zeit.sh/reports/form-builder-jhnivlnc2.now.sh

<a href="https://lighthouse.zeit.sh/reports/form-builder-jhnivlnc2.now.sh" rel="external">![Google LightHouse score](lighthouse-score.png)

## Configure options

Edit `./src/config.js` to configure default options related to:

- API details, for now, only mocked response
- vocabularies (enumerators), e.g. for gender
- form validation rules, e.g. min and max values, character limits, patterns etc

## Deploy on Now.sh

1. Deploy frontend app to Now.sh:

```bash
npm install -g now # Only for the first time
now # Verify credentials and deploy
```

2. Go to https://form-builder.{YOUR_USER}.now.sh/ and see the app.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
