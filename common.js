/**
 * Created by liuchungui on 16/12/5.
 */

function serverBaseURL() {
    switch (ENV_MODE) {
        case "dev": return "http://localhost/api/";
        case "production": return "http://api.xxx.com/";
        default: return "http://localhost/api/";
    }
}

module.exports = serverBaseURL();
