# Summary
Quite often we are in need of certain basic utilities like json formatting or json diff or Base64 encoding. We tend to look for available options like Jsonlint, JsonDiff and others. However, sometimes we do have concerns around putting data on internet while using these utilities. Can we have something in-house?

# speedy!
It is a very specialized and relatively limited in capability application using angular 7, bootstrap 4 and node 11. It was created as part of lab exercise while exploring angular 7 basics. It uses existing libraries, functions and components to provide necessary utilities.

# Pre-requisites
1. You need Angular Cli. `sudo npm install -g @angular/cli`. To verify the version of angular cli installed on your machine, run `ng --version`.

2. You need node to be installed on your machine i.e. `brew install node`. If you already have node, you can upgrade it to latest version using `brew update && brew upgrade node`.

3. You need npm. Please use either `npm install -g npm` or `npm update` as required.

# How to use speedy?
1. Checkout this project.
2. Go to `<location>/speedy/`
3. Run `npm install`.
4. Run `npm start`.
5. Open your favourite browser and enter `http://localhost:4200`

# Ports used
Speedy uses two ports currently - 
1. 4200 - Used by angular cli.
2. 4201 - Node service

It will be later modified to use only one port.

# Have suggestions?
Please feel free to send pull requests or add comments. 

# Related blogs
https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/
https://www.djamware.com/post/5bca67d780aca7466989441f/angular-7-tutorial-building-crud-web-application
