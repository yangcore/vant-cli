"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path = require('path')
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileCss = void 0;
const postcss_1 = __importDefault(require("postcss"));
const postcss_load_config_1 = __importDefault(require("postcss-load-config"));
const clean_css_1 = __importDefault(require("clean-css"));
const constant_1 = require("../common/constant");
const cleanCss = new clean_css_1.default();
async function compileCss(source,filePath) {
    const config = await postcss_load_config_1.default(require(constant_1.POSTCSS_CONFIG_FILE)(filePath),path.resolve(__dirname,'../../postcss.config.js'));
    const { css } = await postcss_1.default(config.plugins).process(source, {
        from: undefined,
    });
    return cleanCss.minify(css).styles;
}
exports.compileCss = compileCss;
