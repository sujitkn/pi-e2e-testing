# pi-e2e-testing

# Prerequisite Software:

Install Node

git clone https://github.com/qualityshepherd/protractor_example

# Setup & Run Protractor:


First, let us install Protractor, run 

npm i protractor --save-dev

We are going to set it up as local dev dependency. Once the setup is done, I recommend you checking out the installation at node_modules/protractor.

npm install to install the project dependancies

This folder consists of all the things you would need to run E2E tests. Do notice the protractor/bin folder, this consists of a webdriver-manager (– a simple wrapper to manage selenium) and the protractor task itself.


# Running protractor involves a 3 step process

Update & Start the Selenium server 

1-webdriver_manager update

2-webdriver-manager start (default port 4444)

if default port already in use or wanted start with different port--webdriver-manager start --seleniumPort 4443

Run tests:

Open a new terminal and run

3-protractor conf.js

# You can setup Selenium server in 2 ways:

Approach 1 : Referring to an existing Selenium server

// The address of a running selenium server.

 exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};

 Approach 2 : Running a standalone Selenium server

 // node_modules/protractor/selenium/selenium-server...

 exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.41.0.jar'
  specs: ['todo-spec.js']
};


# How to run Protractor script using gulp runner:

install gulp globally.

npm install --global gulp

Install gulp in our project locally (project devDependencies) by running following command.

npm install --save-dev gulp


npm install --save-dev gulp-protractor


run the protractor script using only gulp command and do not need to run selenium standalone server using manual command:

we have added two variables ‘webdriver_update’ and ‘webdriver_standalone’ as gulp.task() argument so that it runs first and then run the default task that means protractor script.


var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;

gulp.task('webdriver_update',webdriver_update);
gulp.task('webdriver_standalone',webdriver_standalone);

gulp.task('default',['webdriver_update','webdriver_standalone'], function() {

	gulp.src(["protractor_test/specs/example-spec.js"])
		.pipe(protractor({
			configfile: "protractor_test/conf.js",
			args: ['--baseUrl','http://127.0.0.1:8000']
		}))
		.on('error', function(e) {throw e});
});

Now run the protractor script using only gulp command and do not need to run selenium standalone server using manual command.


# Selenium & Protractor Vagrant configuration:

#Prerequisite Software

Vagrant - https://www.vagrantup.com/downloads.html

VirtualBox - https://www.virtualbox.org/wiki/Downloads

Install

$ cd {YourNodeJSProject}

$ npm install vagrant-e2etesting-protractor 

$ cd node_modules/vagrant-e2etesting-protractor

$ vagrant up


Run VM

$ cd {YourNodeJSProject}/node_modules/vagrant-e2etesting-protractor

$ vagrant up

Stop VM

$ cd {YourNodeJSProject}/node_modules/vagrant-e2etesting-protractor

$ vagrant halt

Reload VM

$ cd {YourNodeJSProject}/node_modules/vagrant-e2etesting-protractor

$ vagrant reload

Access VM using VagrantSSH (does not require password):

$ cd {YourNodeJSProject}/node_modules/vagrant-e2etesting-protractor

$ vagrant ssh


Running example

$ cd {YourNodeJSProject}/node_modules/vagrant-e2etesting-protractor

$ vagrant ssh

$ cd ~/GettingStarted/runProtractorInsideVM

$ protractor conf.js


Use headless browser

Go to edit Vagrantfile (vb.gui = false)

$ vagrant reload

Use real browser

Go to edit Vagrantfile (vb.gui = true)

$ vagrant reload
