/**
 * @type {import('next').NextConfig}
 */

const env = process.env.NODE_ENV
if(env == "development"){
   const pathImage = "/images/";
   const nextConfig = {
    env: {
        pathImage: pathImage
    }
}
 module.exports = nextConfig
}
else if (env == "production"){
    const pathImage = "./images/";
    const nextConfig = {
        output: 'export',
        env: {
            pathImage: pathImage
        }
    }
     module.exports = nextConfig
}

