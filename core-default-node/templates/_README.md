# <%= optAppName %>

## Demo
NOTE: replace all 'http' with 'https' if using 'https' (set in `config.json`)
- [Website](http://198.199.118.44:3000/)
- [Continuous Integration](http://198.199.118.44:3010/)
	- This automatically deploys and tests the yeoman generated mean-seed website on each Github push (from local development)
- Test Coverage Reports (currently ~90% frontend coverage, ~60% backend coverage)
	- [Node API/Integration Test Coverage](http://198.199.118.44:3000/src/coverage-node/lcov-report/)
	- [Angular Karma Unit Test Coverage](http://198.199.118.44:3000/src/coverage-angular/PhantomJS%201.9.7%20%28Linux%29/)
- [Backend API Interactive Docs](http://198.199.118.44:3000/api/help)
	- i.e. [Auth API](http://198.199.118.44:3000/api/auth/help)
- [Github Repo with Generated Code](https://github.com/jackrabbitsgroup/mean-seed-gen)

## Quick Start

**NOTE: If you want to CLONE this EXISTING repository, see [cloning.md](docs/setup-running/cloning.md) instead.** Otherwise, if you want to build a NEW mean-seed from scratch using the Yeoman Generator, follow these steps below.

1. machine (global / program) installs (if you don't have them already)
	<%
	if(optCssPreprocessor =='less') {
	print("1. install git, nodejs, mongodb, phantomjs\n");
	print("\t2. `sudo npm install -g grunt-cli yo bower generator-mean-seed karma yuidocjs forever less`");
	}
	else if(optCssPreprocessor =='scss') {
	print("1. install git, nodejs, mongodb, phantomjs, ruby, sass\n");
	print("\t2. `sudo npm install -g grunt-cli yo bower generator-mean-seed karma yuidocjs forever`");
	}
	%>
2. `yo mean-seed` (from the NEW directory you want to create the app in)
	1. `npm install && bower install` (if not already run successfully by Yeoman or any time `package.json` or `bower.json` change)
		1. If any bower issues (sometimes 1 or more packages will timeout), just re-run `bower update && bower install`
		2. If any npm issues, run `npm cache clean` (and optionally delete the troublesome package folders from the `node_modules` folder) then re-run `npm install`
	2. `./node_modules/protractor/bin/webdriver-manager update` (if not already run successfully by Yeoman)
	3. `grunt q` to build assets (if not already run successfully by Yeoman and any time a `*.less` (or `*.scss`) or `*.html` file changes)
3. start server and view app
	1. `node run.js` to start node server (make sure MongoDB is already running first)
	2. open a browser to `http://localhost:3000/` (or `https://localhost:3000/` if using https) to view the site/app
4. run tests
	1. `grunt`
5. (optional) Git remote (should have already been init'ed and commit'ed automatically)
	1. (optional) add a remote: `git remote add origin [url to repository]`



## Setup + Running (Longer Version)
- see [setup-detailed.md](docs/setup-running/setup-detailed.md) and [running.md](docs/setup-running/running.md) in the `docs` folder


## Generators
Make sure to leverage the available (sub)generators - i.e. for creating new pages/routes/controllers, directives, and services!
Run generators with `yo mean-seed` and then select the sub-generator you want to use!

https://github.com/jackrabbitsgroup/generator-mean-seed/blob/master/docs/generators/modules.md



## Updating
You CAN and SHOULD keep your project up to date with the core (seed) generator you used as it goes through version upgrades. Just re-run:

Ensure the generator is up to date:
```
npm install -g generator-mean-seed
```

Pull in updates to your project (core/seed - make sure to select the same core you used originally):
```
yo mean-seed
```
	
	
## More Info
- see the [docs](docs) folder for more documentation. Each (sub)folder typically has an `overview.md` file - start there. Some key docs (roughly in order of priority) listed below:
	- [overview.md](docs/overview.md)
	- [setup-running folder](docs/setup-running)
		- [overview.md](docs/setup-running/overview.md)
	- [tools-dependencies folder](docs/tools-dependencies)
	- [files folder](docs/files)
	- [testing-automation folder](docs/testing-automation)
	- [frontend-angular/common-actions.md](docs/frontend-angular/common-actions.md)
	- [backend-node/common-actions.md](docs/backend-node/common-actions.md)

	

## MEAN (Mongo Express Angular Node) seed
- Built using Mean-Seed: https://github.com/jackrabbitsgroup/generator-mean-seed
	- see here for more details - technology used, dependencies, limitations/compatibility, code standards, directory/file structure, workflow, etc.
- *MongoDB, Express.js, AngularJS, Node.js + Yeoman (Grunt, Bower, Yo) + Jasmine, Karma, Protractor*
