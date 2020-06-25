const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/mxmAPI');

//redis
const redis = require('redis');
const client = redis.createClient();

router.route('/top')
    .post(async(req, res, next) => {
        let country = req.body.city
        let result = await fetch(CONFIG.url + 'chart.tracks.get?chart_name=top&page=1&' +
            'page_size=1&country=' + req.body.city + '&apikey=' + CONFIG.key);
        let data = await result.json();

        let topSong = data.message.body.track_list[0].track
        let name = topSong.track_name
        let artist = topSong.artist_name
        let songBy = 'Song is: '+ name +' by ' + artist

        client.exists(country, (err, result)=>{
            if(result == 1) {
                client.get(country, (err, result) => {
                    //res.send(`<h2>${city} has temperature of ${response} </h2>`)
                    res.send(JSON.stringify(result + ' and it has been cached! IMPRESSIVE!!'))
                })
            } else{
                client.setex(country, 30, songBy);
                res.send(JSON.stringify(songBy + ' and it is not cached'))
            }

        })


    })

module.exports = router;

