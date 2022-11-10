# QNA_maker_knowledge_base_web_app

<hr>

This is basically frontend part of the knowlege-base of alternative to QNA maker chat bot.
- To create a front-end application, where user would be able to insert QnA pairs for the knowledge base

## Technologies used (till now..)

``` React, HTML, CSS, JavaScript, MUI ```

<hr>

## Functionality added till now ..

- User will be able to ```view qna pairs``` -[*p1]
- User will be able to ```add qna pair``` -[*p2]
- User will be able to ```on screen edit editable data``` -[*p2]  
- User Will be able to delete ```pair data``` -[*p2]
- ```Pagination``` is added
- User can ```set rows per page```
- Data can be ```sorted``` in 
  - 1. lexographical order
  - 2. order of activity status
- Data columns can be made ```hide-show``` that is, can be made hidden or shown based on user preferences
- Data can be ```filtered``` by user in a column in differnt forms
  - 1. containing keywords - contains
  - 2. starting with
  - 3. ending with
  - 4. having same as search words
- User Will be able to test query from the ``` /test `` page
- Added loaders for UI improvement
- Added error and success message alerts
- Customized app for better responsiveness depending on viewport resolution 

### terms 

- p1: as of now only dummy data ([update] ``` Now using server data ```)
- p2: as of now only in user-view only

<hr>

## Getting Started

### To run in local host

``` 
    npm install 
    npm run start

```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The screen will automatically render in localhost:3000 provided that some other process is not blocking that port.


<hr>

### To run in deplopyed services 

click [https://app-qnamaker-custom-test-001.azurewebsites.net/](https://app-qnamaker-custom-test-001.azurewebsites.net/)


### For Deployment 

``` 
    npm run build 

```
- Right click on build folder and select on ``` Deploy to WebApp ```
- Select ``` app-qnamaker-custom-test-001 ``` Azure web service for webapp deployment
-  Click deploy

### Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<hr>

## Working

### Main view

![Screenshot (1330)](https://user-images.githubusercontent.com/54171759/187070469-e6c4cb52-f2e0-46c4-971f-5389a58ffbfc.png)

![Screenshot (1331)](https://user-images.githubusercontent.com/54171759/187070484-bcda2010-4262-4fdf-b87e-87f3dba1e836.png)


### Adding pairs

![add](https://user-images.githubusercontent.com/54171759/187071310-7d5b13ac-d006-4780-b727-6086e09ad6b1.png)


### Deleting pairs

![delete](https://user-images.githubusercontent.com/54171759/187071582-11666129-ff3c-4316-b21f-7c8707f1898c.png)


### On-Screen Edit

Just double click on qna pair cell to edit 

![Edit](https://user-images.githubusercontent.com/54171759/187071767-0ff5af1e-7b43-4992-9095-8ae3974222a9.png)


### Offscreen-Edit 

![edit2](https://user-images.githubusercontent.com/54171759/187072088-4516aa08-e9bf-46f9-8929-0c1192bafcf2.png)


### Pagination

![pagination](https://user-images.githubusercontent.com/54171759/187072545-b0635164-7d55-44f7-a164-4d420225d3f0.png)



<!-- #### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
