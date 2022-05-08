const gulp = require('gulp')
const rename = require("gulp-rename")
const webpack = require('webpack-stream')
const sass = require('gulp-sass')(require('sass'));
const foreach = require('gulp-foreach');
const jsonMinify = require('gulp-json-minify')
const path = require('path');

const THEME_DIR = 'public/wp-content/themes/factory/'

/**
 * WordPress dependencies
 */
 const dependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

const webpackOptions = {
  context: __dirname,
	devtool: false,
	mode: 'production',
	target: 'browserslist',
	output: {
    filename: 'block.js'
  },
	plugins: [
		new dependencyExtractionWebpackPlugin({
			injectPolyfill: false
		})
	],
	module: {
		 rules: [
				{
					 test: /\.jsx?$/,
					 exclude: [
						 /node_modules/,
						 /\.json?$/
					 ],
					 use: [{
							loader: 'babel-loader',
							options: {
								 presets: [
									'@wordpress/babel-preset-default'
								]
							}
					 }]
				}
		 ]
	}
};

function buildScripts () {
	return gulp.src('src/**/*.jsx')
		.pipe(foreach(function(stream, file) {
			var parentDir = path.basename(path.resolve(file.path, '..'))
			return stream
				.pipe(webpack(webpackOptions))
				.pipe(gulp.dest(`${THEME_DIR}/blocks/${parentDir}`));
		}));
};

function buildJson () {
	return gulp.src(['src/**/*.json', '!src/@config.json'])
		.pipe(jsonMinify())
		.pipe(rename(function (path) {
			var [ dirname, basename ] = path.dirname.split('/')
			path.dirname = `${dirname}/${basename}`
		}))
		.pipe(gulp.dest(`${THEME_DIR}`));
};

function buildStyles () {
	return gulp.src('src/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(rename(function (path) {
			var [ dirname, basename ] = path.dirname.split('/')
			path.dirname = `${dirname}/${basename}`
		}))
		.pipe(gulp.dest(`${THEME_DIR}`));
};

function watchScripts () {
	return gulp.watch(['src/**/*.jsx'], buildScripts)
}

function watchJson () {
	return gulp.watch(['src/**/*.json', '!src/@config.json'], buildJson)
}

function watchStyles () {
	return gulp.watch(['src/**/*.scss'], buildStyles)
}

exports.default = gulp.series(
	gulp.parallel(buildScripts, buildJson, buildStyles),
	gulp.parallel(
		watchScripts,
		watchJson,
		watchStyles
	)
)