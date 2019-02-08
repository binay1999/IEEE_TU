const   config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'HEY123USER',
        DATABASE: "mongodb://localhost:27017/ieee"
    }
}



exports.get  = function get(env){
    return config[env] || config.default
}