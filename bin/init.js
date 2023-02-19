const app = require('..\\app');

app.listen(app.get('port'),() => {
    console.log('Server listen at port: ',app.get('port'))
});