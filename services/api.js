const axios = require("axios");
const { wrapper } = require("axios-cookiejar-support");
const { CookieJar } = require("tough-cookie");

const cookiejar = new CookieJar();

axios.defaults.withCredentials = true;
axios.defaults.jar = cookiejar;

const instance = wrapper(
    axios.create({
        baseURL: Process.env.JIRA_REST_API_URL,
    })
)

module.exports = instance;
