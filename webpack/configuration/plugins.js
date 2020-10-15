// Dependencies
//import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Analyzer
//const isAnalyzer = process.env.ANALYZER === 'true';

export default () => {
	const plugins = [
		//new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new ExtractTextPlugin({
			filename: '../../public/css/style.css'
		})
	];

	if (isDevelopment) {
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
		);
	}

	return plugins;
};
