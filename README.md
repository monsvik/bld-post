bld-post
========

A library to post data to Business Loss Detector

## Installation

    npm install https://github.com/monsvik/bld-post.git -save

## Usage

    var bldpost = require('bld-post');

    var config = {
      host: 'localhost',
      port: 80,
      path: '/bld'
    };

    var data = {
      id: 'unique_id',
      type: 'bld_tile_type',
      data: 'data_object'
    };

    bldpost(config, data, function(error, response){
      if (error) console.log(error);
      else console.log(response);
    });

## Release History

* 1.0.0 Initial release
