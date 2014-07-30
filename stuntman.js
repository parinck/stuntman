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
	}
	window.stuntman = new Stuntman();
} )();

obj = {
	name: "parin"
};
console.log( window.stuntman.perform( obj, "name" ) );
console.log( window.stuntman.perform( obj, "name.lname" ) );
