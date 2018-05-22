// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey				: 'AIzaSyDD5WQS0UGLZ0oNJBI11Rwlrx2QO3Ai9uA',
		authDomain			: 'zendtube.firebaseapp.com',
		databaseURL			: 'https://zendtube.firebaseio.com',
		projectId			: 'zendtube',
		storageBucket		: 'zendtube.appspot.com',
		messagingSenderId	: '317137471700'
	}
};

