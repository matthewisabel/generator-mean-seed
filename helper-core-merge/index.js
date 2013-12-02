/**
@todo
- remove the need to check this.optSubGenerators in EVERY function (i.e. find a way to NOT call this generator AT ALL if sub generator is wrong, but hookFor doesn't seem to be able to be conditionally called based on prompts..?)

@toc
2.01. commandsAdd
2.02. commandsCommit
2. commandsBranch
2.1. commandsCheckout
2.2. commandsMerge

NOTE: uses Yeoman this.spawnCommand call to run commands (since need to handle Windows/different operating systems and can't use 'exec' since that doesn't show (live) output)
*/

'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CommandsMod =require('../common/commands/commands.js');

var HelperCoreMergeGenerator = module.exports = function HelperCoreMergeGenerator(args, options, config) {
	// By calling `NamedBase` here, we get the argument to the subgenerator call
	// as `this.name`.
	yeoman.generators.NamedBase.apply(this, arguments);

	//copy over prompt options to 'this' scope for templating
	var xx;
	for(xx in this.options.props) {
		this[xx] =this.options.props[xx];
	}
};

util.inherits(HelperCoreMergeGenerator, yeoman.generators.NamedBase);


//have to break async / promise commands into SEPARATE Yeoman functions since chaining isn't working... wtf?
/**
@toc 2.01
@method commandsAdd
*/
HelperCoreMergeGenerator.prototype.commandsAdd = function commandsAdd() {
if(this.optSubGenerators.indexOf('helper-core-merge') >-1) {
if(1) {		//do NOT want to add/commit automatically
// if(this.optUseGitSeparateBranch) {
	var cb = this.async();
	// var yoBranch ='yo-'+this.optSubGenerators[0];		//use the name of the first (sub)generator, which is the main one being called
	CommandsMod.run('git', ['add', '-A'], {yoThis: this})		//must first create (if doesn't already exist) the branch - need to do this in a separate command since it will fail if it already exists
	.then(function(ret1) {
		// console.log('cb called');
		cb();
	}, function(retErr) {
		// console.log('cb called ERROR');
		cb();
	});
}
}
};

/**
@toc 2.02
@method commandsCommit
*/
HelperCoreMergeGenerator.prototype.commandsCommit = function commandsCommit() {
if(this.optSubGenerators.indexOf('helper-core-merge') >-1) {
if(1) {		//do NOT want to add/commit automatically
// if(this.optUseGitSeparateBranch) {
	var cb = this.async();
	// var yoBranch ='yo-'+this.optSubGenerators[0];		//use the name of the first (sub)generator, which is the main one being called
	CommandsMod.run('git', ['commit', '-am', '"yo mean-seed update"'], {yoThis: this})		//must first create (if doesn't already exist) the branch - need to do this in a separate command since it will fail if it already exists
	.then(function(ret1) {
		// console.log('cb called');
		cb();
	}, function(retErr) {
		// console.log('cb called ERROR');
		cb();
	});
}
}
};

/**
@toc 2.
@method commandsBranch
*/
HelperCoreMergeGenerator.prototype.commandsBranch = function commandsBranch() {
if(this.optSubGenerators.indexOf('helper-core-merge') >-1) {
// if(this.optUseGitSeparateBranch) {
if(1) {
	var cb = this.async();
	var yoBranch ='yo-'+this.optSubGenerators[0];		//use the name of the first (sub)generator, which is the main one being called
	CommandsMod.run('git', ['branch', this.optGitBranch], {yoThis: this})		//must first create (if doesn't already exist) the branch - need to do this in a separate command since it will fail if it already exists
	.then(function(ret1) {
		// console.log('cb called');
		cb();
	}, function(retErr) {
		// console.log('cb called ERROR');
		cb();
	});
}
}
};

/**
@toc 2.1.
@method commandsCheckout
*/
HelperCoreMergeGenerator.prototype.commandsCheckout = function commandsCheckout() {
if(this.optSubGenerators.indexOf('helper-core-merge') >-1) {
// if(this.optUseGitSeparateBranch) {
if(1) {
	var cb = this.async();
	CommandsMod.run('git', ['checkout', this.optGitBranch], {yoThis: this})
	.then(function(ret1) {
		// console.log('cb called');
		cb();
	}, function(retErr) {
		// console.log('cb called ERROR');
		cb();
	});
}
}
};

/**
@toc 2.2.
@method commandsMerge
*/
HelperCoreMergeGenerator.prototype.commandsMerge = function commandsMerge() {
if(this.optSubGenerators.indexOf('helper-core-merge') >-1) {
// if(this.optUseGitSeparateBranch) {
if(0) {		//do NOT want to automatically merge since it could mess things up..
	var self =this;
	
	var cb = this.async();
	var yoBranch ='yo-'+this.optSubGenerators[0];		//use the name of the first (sub)generator, which is the main one being called
	CommandsMod.run('git', ['merge', yoBranch], {yoThis: this})
	.then(function(ret1) {
		// console.log('cb called');
		//non-zero code means failure (merge conflicts) so need to NOT run grunt since it's not ready yet. Also update output message accordingly.
		if(ret1.code !==0) {
			//SKIP grunt q on merge conflict (rest of commands should still work)
			self.options.props.optGruntQ =self.optGruntQ =0;
			var logNextStepsMsg ='\n\nMERGE FAILED:\nfix merge conflicts then commit then run `grunt q` and follow the next steps:\n1. IF on Windows or you skipped the auto install, run `./node_modules/protractor/bin/install_selenium_standalone`\n2. IF skipped any of the auto installs, run the install/build scripts - npm, bower, grunt\n3. Run `node run.js`\n4. Open a browser to `http://localhost:3000` to view the app!\n5. (optional) Git init and commit - `git init . && git add -A && git commit -m \'init\'`\nSee the README.md file for more info.';
			self.options.props.optLogNextStepsMsg =self.optLogNextStepsMsg =logNextStepsMsg;
			
			//just in case, console.log it
			// console.log(logNextStepsMsg);
			
		}
		cb();
	}, function(retErr) {
		// console.log('cb called ERROR');
		cb();
	});
	
}
}
};