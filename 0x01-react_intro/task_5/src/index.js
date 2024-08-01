// src/index.js
import './styles.css';
import myImage from './my-image.png';

const img = document.createElement('img');
img.src = myImage;
document.body.appendChild(img);

console.log("Hello, Webpack!");
