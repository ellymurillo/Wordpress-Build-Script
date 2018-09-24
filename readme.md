## Custom Build Scripts

Compile SASS to CSS, minify javascript and optimize images.

### Installation

Install [NodeJS](https://nodejs.org/en/download).
Download files to your public working directory.
Then on the CLI, navigate to your public working directory folder and run the command below:

	npm install –g gulp
	npm install
	gulp

The default `gulp` command will build your sass files and javascripts.

SASS files under `/sass` folder will be compiled under `/css` folder with the name `main.css`.
For javascript it will be minified under `/dist` folder with the name `main.js`.

To optimize images. Place your images under `/images` folder and run the command below in the cli:

	gulp img 
