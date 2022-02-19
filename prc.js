function greet(msg){
    	
	return function(name){
	
    	console.log(msg + ' ' + name)
    	}
    	
    	}
    	var name=greet("hai")
	name()