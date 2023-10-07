/**
 * @type {import('next').NextConfig}
 */

const env = process.env.NODE_ENV
let pathImage = "";
if(env == "development"){
   pathImage = "/images/";
}
else if (env == "production"){
    pathImage = "./images/";
}

const nextConfig = {
    // output: 'export',
    env: {
        pathImage: pathImage
    }
}
module.exports = nextConfig