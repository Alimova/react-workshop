const API_HOST = "https://api.instagram.com";
const CLIENT_ID = "770053a1c5514ee59178d9f0aadf79ab";

const REDIRECT_URI = `${window.location.origin}/oauth`;
// const imageUrl = 'https://www.instagram.com/p/BPsoK43AS5PPrRKJ4w3RrYTG2wmxbiEQa3sqwk0/'

const API = {
    login() {
        window.location.reaplace(
            `${API_HOST}/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
        );
    }
};

export default API;
