const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@': resolve("src"),
            '@assets': resolve("src/assets"),
            '@utils': resolve("src/utils"),
            '@views': resolve("src/views"),
        }
    }
}