booksrus
========

A simple application of a number of open-source javascript frameworks. Done as a micro-pet-project for demonstrating understanding of various open-source JavaScript frameworks, and how they can work together.

The application deploys a Node.js HTTP server, which exposes a RESTful JSON API equipped with stubs for the mock. The front-end uses jquery, underscore, and backbone to provide the ajax adapter for data service, the models, and the views. Again, very basic usage here for an experienced JavaScript developer.

At runtime, once the node server is running, the client makes an asynchronous request for data, and populates a collection, and then is rendered. The idea here is to tie together most of the well-known and widely used concepts in web application development.


Dependencies
========

* Node.js
* jQuery
* Backbone.js
* Underscore.js

Each lib included, excluding Node.js.


Usage
========

<pre>
$ node books-web-server.js
</pre>

Then, in browser, find `localhost:8000`. Done.
