// rollup.config.js
import { svelteSVG } from "rollup-plugin-svelte-svg";

export default {
    client: {
        plugins: [
            svelteSVG({
                // optional SVGO options
                // pass empty object to enable defaults
                svgo: {},
            }),
        ],
        
    },
    server: {
        plugins: [
            svelteSVG({
                // optional SVGO options
                // pass empty object to enable defaults
                svgo: {}
            }),
        ],
        
    },
}