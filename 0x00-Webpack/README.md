### How to Set Up Webpack for a Basic Project

#### Prerequisites
- Node.js installed on your computer
- Basic knowledge of JavaScript and npm (Node Package Manager)

#### Step 1: Initialize Your Project
1. **Create a project directory:**
   ```bash
   mkdir my-webpack-project
   cd my-webpack-project
   ```

2. **Initialize npm:**
   ```bash
   npm init -y
   ```
   This will create a `package.json` file with default settings.

#### Step 2: Install Webpack and Webpack CLI
```bash
npm install webpack webpack-cli --save-dev
```

#### Step 3: Set Up the Project Structure
Create the following directory structure:
```
my-webpack-project
├── dist
│   └── index.html
├── src
│   ├── index.js
│   └── style.css
├── package.json
└── webpack.config.js
```

1. **Create `index.html` in the `dist` directory:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My Webpack Project</title>
   </head>
   <body>
       <div id="app"></div>
       <script src="bundle.js"></script>
   </body>
   </html>
   ```

2. **Create `index.js` in the `src` directory:**
   ```javascript
   import './style.css';

   const app = document.getElementById('app');
   app.innerHTML = '<h1>Hello, Webpack!</h1>';
   ```

3. **Create `style.css` in the `src` directory:**
   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f0f0f0;
       color: #333;
   }
   ```

#### Step 4: Configure Webpack
Create `webpack.config.js` in the root directory:
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
```

#### Step 5: Install Loaders and Plugins
1. **Install loaders for CSS and JavaScript:**
   ```bash
   npm install style-loader css-loader babel-loader @babel/core @babel/preset-env --save-dev
   ```

2. **Install plugins:**
   ```bash
   npm install html-webpack-plugin clean-webpack-plugin --save-dev
   ```

3. **Create a Babel configuration file (`.babelrc`):**
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

#### Step 6: Split Your Code into Chunks
Add code splitting to your `webpack.config.js`:
```javascript
module.exports = {
  // ... other configurations
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

#### Step 7: Setup a Development Server
Webpack Dev Server allows you to serve your project locally with live reloading. This has already been added to your `webpack.config.js`:
```javascript
devServer: {
  contentBase: path.resolve(__dirname, 'dist'),
  compress: true,
  port: 9000,
},
```

Install the dev server:
```bash
npm install webpack-dev-server --save-dev
```

#### Step 8: Add Scripts to `package.json`
Update the `scripts` section in `package.json` to add build and start commands:
```json
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack serve --mode development"
}
```

#### Step 9: Run Your Project
1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

Open your browser and navigate to `http://localhost:9000` to see your Webpack project in action.

#### Readme Notes

**README.md:**
```markdown
# My Webpack Project

This project is a basic setup of Webpack to bundle JavaScript and CSS files.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-webpack-project.git
   cd my-webpack-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Usage

- To build the project:
  ```bash
  npm run build
  ```

- To start the development server:
  ```bash
  npm start
  ```

### Project Structure

```
my-webpack-project
├── dist
│   └── index.html
├── src
│   ├── index.js
│   └── style.css
├── package.json
└── webpack.config.js
```

### Configuration

- `webpack.config.js`: Webpack configuration file.
- `package.json`: Project metadata and dependencies.

### Features

- Bundles JavaScript and CSS files.
- Uses Babel for JavaScript transpilation.
- Code splitting for optimized bundles.
- Development server with live reloading.

