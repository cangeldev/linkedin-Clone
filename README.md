# Linkedin Clone

This is a Linkedin clone built with React Native and TypeScript. The app uses Firebase for authentication, Firestore Database for storing user information, and Firebase Storage for profile pictures. It also utilizes Redux Toolkit for state management, AsyncStorage for local data persistence, and i18next for internationalization.

(Deficiencies, errors and internal pages of the application will continue to be added in the future.)

## Features

- E-mail authentication using Firebase Authentication
- Real-time messaging
- Add or delete people I want to my network
- Share posts among friends
- Like users' posts
- Profile picture upload and update
- User information storage in Firestore
- Local data persistence with AsyncStorage
- State management with Redux Toolkit
- Internationalization with i18next
- ...

## Technologies Used

- **React Native**
- **TypeScript**
- **Redux Toolkit**
- **AsyncStorage**
- **i18next**
- **Firebase Authentication**
- **Firestore Database**
- **Firebase Storage**
- **...**

## Screen Recorder

https://github.com/user-attachments/assets/d3fe581c-cd2e-4238-93fb-ad58dacf5766

## Some screenshots from the app
 <img height="550" src="https://github.com/user-attachments/assets/b442d9eb-0e51-4f62-9c2a-890656e9e7ac"> 
 <img height="550" src="https://github.com/user-attachments/assets/40f91091-8ae3-42b1-9f3f-f938a9465e0f"> 
 <img height="550" src="https://github.com/user-attachments/assets/1c0ef680-b9f8-45e3-8199-d195e4a551ff"> 
 <img height="550" src="https://github.com/user-attachments/assets/84837ef0-99ef-4257-8406-c3db9c6a5d46"> 
 <img height="550" src="https://github.com/user-attachments/assets/a00b54ac-f827-4d84-aaf2-dea69a7802f2">
 <img height="550" src="https://github.com/user-attachments/assets/b47d0378-dae3-41eb-b164-65e047369d87"> 
 
## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
   ```sh
   https://github.com/cangeldev/linkedin-Clone.git
   cd linkedin-Clone
2. Clone the repository:
   ```sh
   npm install
   # or
   yarn install
3. Configure Firebase:

- **Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).**
- **Enable phone authentication.**
- **Set up Firestore Database and Firebase Storage.**
- **Download the `google-services.json` file and place it in your `android/app` directory.**
- **Download the `GoogleService-Info.plist` file and place it in your `ios/` directory.**

4. Clone the repository:
    ```sh
   npm run android
   # or
   npm run ios

## Usage

1. Open the application on your device or emulator.
2. Register with your email.
3. Enter your name and surname.
4. Enter your profession and education information.
5. Finish setting up your profile by adding a profile picture.
6. Add friends to interact with other users registered in the application.
7. You can share within the application, like and comment on other users' shares if you want.
8. You can do real-time messaging with other users.
9. ...

## Project Structure

- `src/`: Contains all the source code.
  - `assets/`: İcons and images.
  - `components/`: Reusable components.
  - `container/`: It is used to combine and display navigation operations.
  - `screens/`: Application screens.
  - `hooks/`: Hooks I wrote myself that I use in the application.
  - `locales/`: Used for localization.
  - `services/firebase`: Firebase configuration and functions.
  - `services/redux/`: Redux setup and slices.
  - `services/asyncstorage/`: AsyncStorage configuration and functions.
  - `utils/`: Used for auxiliary functions and settings.
  - `utils/i18n/`: Internationalization setup and translations.
