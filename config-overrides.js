const { override, useBabelRc } = require("customize-cra");
module.exports = override(
    useBabelRc()
);
//Thêm customize-cra vào webpack
