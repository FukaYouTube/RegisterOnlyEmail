const os = require('os')

let port = process.env.PORT || 3000

module.exports = {
    ipconfig(){
        let ip = os.networkInterfaces().en0
        if(ip){
            return `https://${ip[1].address}:${port}/`
        }else{ return `https://localhost:${port}/` }
    }
}