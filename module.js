const log = {
    info: function (info){
        console.log('info');
    },
    warn: function (warn){
        console.log('warn');
        console.log('Thsi is testing branch')
    },
    error: function (error){
        console.log('error');
    }
}
module.exports = log