import router from "./router/index.js";
import ui from "./ui/index.js";
// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
bootstrap();
ui();
router();
