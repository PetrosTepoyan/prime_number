module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},

	printArray: function(arr){
		for (let i = 0; i < arr.length; i++){
			console.log(arr[i])
		}
	}
}
