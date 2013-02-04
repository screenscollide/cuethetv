/*
* GET users listing.
*/

var sag = require('sag').server( "screenscollide.iriscouch.com", "5984")
	sag.setDatabase('cuethetv');

exports.index = function(req, res){
	var id = req.params.id;
	var dbDocument = "/i-love-quarters";
	getDocument( dbDocument, function( resp, success ){
		if( success ){
			var results = resp.body;
			//console.log( results );
			res.render( 'remote', { 
				title: "ScreensCollide.com | Cue the TV: Remote", 
				results: results, 
					cue_points: JSON.stringify(results.cue_points) 
			});
		}	
	});
};

/**
* Get Results
*/
function getDocument( id, callback ){
	sag.get({
		url: '/' + id,
		callback: callback
	})
}

/**
* Update CouchDB
*/
function updateDoc( doc, callback ){
	// Send the updated doc.
	sag.put({
		id: doc._id,
		data: doc,
		callback: callback
	});
}