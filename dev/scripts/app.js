import React from 'react';
import ReactDOM from 'react-dom';

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      'clientId': 'YOUR_CLIENT_ID',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}

class App extends React.Component {
    render() {
      return (
        <div>
          Hello
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
