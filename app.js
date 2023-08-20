// It's better to check for this event in app.js, because it's the first thing that loads in the browser.

import { loadData } from "./services/Menu.js";
import Store from "./services/Store.js";
import API from "./services/API.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
