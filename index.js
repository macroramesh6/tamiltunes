var request = require('request');
var cheerio = require('cheerio');


url = 'http://tamiltunes.com/year-14/2017/';


request(url, function(error, response, html) {
            if (error) {
                console.error(error);
            }

            if (!error) {


                var albumList = [];

                var $ = cheerio.load(html);
                // TODO:
                // 1. scrape list of album url.
                // 2. Push album url to variable


                for (var i = 0; i < albumList.length; i++) {
                    var songList = [];

                    // TODO:
                    // 1. scrape list of song from an album
                    // 2. print all songList and call me. :P need to start donwload files



                }



            }

        }
