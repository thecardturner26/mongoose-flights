var Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function show(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Detail', flight })
    })
}



function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  ///req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  ///req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  ///if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}