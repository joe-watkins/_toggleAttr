/**
 * @name _toggleAttr
 * @function
 * @description a small helper function for toggling attribute values

    // pass array of attribute targets
    _toggleAttr(someElement,["aria-expanded","aria-pressed","data-another"]);

    // pass object with attribute and default/new
    _toggleAttr(someElement,{
      "data-foo": {
         default: "bar",
         new: "meow"
      },
      "style": {
         default: "background: red;",
         new: "background: purple;"
      }
    });

 */

 var _toggleAttr = function(target,attr){

 	// if this is not an object literal e.g. array
 	if(!isPlainObject(attr)){
 		attr.forEach(function(el,idx){
 			var currentState = target.getAttribute(el), newState;
          if(currentState == "false"){
            newState = "true";
          }else{
            newState = "false";
          }
 					target.setAttribute(el,newState);
 		});
 	// if this is an object literal handle differently
 	}else{
 		Object.keys(attr).forEach(function(key) {
 			if(target.getAttribute(key) == attr[key].default){
 				target.setAttribute(key,attr[key].new);
 			}else{
 				target.setAttribute(key,attr[key].default);
 			}
 		});
 	}

 	function isPlainObject(val){
 		return val ? val.constructor === {}.constructor : false;
 	}

 };
