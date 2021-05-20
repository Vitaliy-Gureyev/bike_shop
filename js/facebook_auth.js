function statusChangeCallback(response) {
    sessionStorage.setItem('received token from facebook', response.authResponse.accessToken);
    if (response.status === 'connected') {
        testAPI();
    }
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '921825628615767',
        cookie: true,
        xfbml: false,
        version: 'v10.0'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

function testAPI() {
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
    });
}

console.log('Session storage:')
console.log(sessionStorage)