const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/mxmAPI');

// Default - shows top music track worldwide
router.route('/top')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + 'chart.tracks.get?chart_name=top&page=1&' +
            'page_size=1&country=WX&apikey=' + CONFIG.key);
        let topSong = await result.json();
        let song1 = topSong.message.body.track_list[0].track
        res.render('topSong', {
            song: song1.track_name,
            country: 'worldwide',
            artist: song1.artist_name
        });
    })

    // find top track based on form input
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + 'chart.tracks.get?chart_name=top&page=1&' +
            'page_size=1&country=' + req.body.city + '&apikey=' + CONFIG.key);
        let topSong = await result.json();
        let song1 = topSong.message.body.track_list[0].track
        res.render('topSong', {
            song: song1.track_name,
            country: req.body.city,
            artist: song1.artist_name
        });
    })

module.exports = router;

