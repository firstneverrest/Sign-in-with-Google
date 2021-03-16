# MyArticle-WebApplication
![image](https://github.com/firstneverrest/
Sign-in-with-Google/blob/master/sign-in-with-google-thumbnail)

The web application integrates Google Sign-in project using OAuth 2.0 to access Google APIs.
### Technologies
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Description
- You can follow all steps in [Google Sign-In for Websites](https://developers.google.com/identity/sign-in/web/sign-in) to integrate Google Sign-in into your web app.
- Firstly, create authorization credentials to get OAuth client ID for accessing Google APIs.
- In HTML, include the Google Platform Library, specify client ID and google sign-in button.
- Include onSignIn() function in JavaScript file which enable you to access the user's google ID, name, profile image and email address.
- When you click sign-in button, it will automatically pop up a window to choose your Google account then the text in the button will change to signed in with Google instead of sign in with Google.
- Include signOut() function in JavaScript file to enable user to sign out
- I create the card to display user's image, name and email.
- When you click sign in with Google button, choose account and click refresh button, you will see your profile appear in the card.
- When you click sign out button and click refresh button, you will see the dummy profile waiting user to sign in again.
