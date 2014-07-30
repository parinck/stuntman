( function () {
	var Stuntman = function () {};
	Stuntman.prototype.perform = function ( obj, member ) {
		var _obj = obj;
		try {
			var key = eval( "_obj." + member );
			return key;
		} catch ( e ) {
			return undefined;
		}
	};

	Stuntman.prototype.who = function ( amI ) {
		return Object.prototype.toString.call( amI ).replace( /^\[object (.+)\]$/, "$1" ).toLowerCase();
	};

	window.stuntman = new Stuntman();
} )();

obj = {
	name: "parin"
};
console.log( stuntman.perform( obj, "name" ) );
console.log( stuntman.perform( obj, "name.lname" ) );
amIanObject = {};
console.log( stuntman.who( amIanObject ) );
