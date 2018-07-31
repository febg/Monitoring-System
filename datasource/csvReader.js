//Read cvs file and run the next function using lambda
csv = require('fast-csv')
fs = require('fs')

exports.readCSVFile = function(file) {
	return new Promise((resolve) => {
		const readStream = fs.createReadStream('test-csv.csv')
			.pipe(csv({headers : true}))
			.on('data', data => {
				console.log(data)
			})		
			.on('end', data => {
				console.log('End of file')
				return resolve(users)
		})
	})
}

function sleep(time, readStream) {
	return new Promise(resolve => {
		setTimeout(() => {
			return resolve()
		}, time); 
	})
}