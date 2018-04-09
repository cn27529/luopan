/*羅盤*/
function Luopan(init_json_data){
	
	this.init_me(init_json_data);

	//this.width = 123;
	//this.height = 500;
}




Luopan.prototype.sum_total = function() {
	// body...
	return this.width+this.height;
}

Luopan.prototype.reset_total = function(width, height) {
	// body...

	if(typeof(width)==typeof(0)) this.width = width;	
	if(parseInt(width) !== NaN) this.width = parseInt(width);

	if(typeof(height)==typeof(0)) this.height = height;
	if(parseInt(height) !== NaN) this.height = parseInt(height);
	
	return this.sum_total();
}

Luopan.prototype.init_me = function(init_json_data){

	/*
	var str_json = init_json_data.toString();
	console.log(init_json_data);
	return;
	*/

	if(init_json_data === undefined){
		console.log('input "init_json_data" is undefined.');
		return;
	}

	//var json_data = JSON.parse(init_json_data);
	
	if(json_data.width !== undefined)
		this.width = json_data.width;
	if(json_data.height !== undefined)
		this.height = json_data.height;

}

