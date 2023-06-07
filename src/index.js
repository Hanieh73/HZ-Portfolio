import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


const express = require('express');
const app = express();


// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 1234');
});
