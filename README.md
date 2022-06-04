# 5stars

## Setup
### Setup Firebase configuration. 
Create /core/Firebase.js as below.
```JavaScript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Paste our web app's Firebase configuration
const firebaseConfig = {
  //...
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
```
Next, go to firebase > 5stars > Project Settings (click on gear icon at Project Overview) and paste the app config details into core/Firebase.js.

### Install Required Dependencies
#### Expo CLI command line utility

With Node 14 LTS or greater installed, use npm to install the Expo CLI command line utility:
```
npm install -g expo-cli
```
Or on Yarn:
```
yarn global add expo-cli
```
#### Project Dependecies 
Get project dependecies by running yarn:
```yarn```

## Start up and run
In 5stars root directory, run
```
expo start
```


