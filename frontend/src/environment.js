let IS_PROD = false;
if (import.meta.env.MODE === "production") {
    IS_PROD = true
}
const server = IS_PROD ?
    "http://localhost:8000" :
    "https://video-callbackend-hfoy.onrender.com"




export default server;