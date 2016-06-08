# _toggleAttr

A little helper vanilla JavaScript function for easier attribute toggling.

<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/_toggleAttr.gif" alt="Code framgement demonstrating toggled attributes">

Pass an array of attributes to toggle boolean values.

``` javascript

_toggleAttr(el,["aria-expanded","aria-pressed","data-another"]);

```

Pass objects to toggle custom attribute values.

``` javascript
_toggleAttr(el,{
	"data-foo": {
		default: "bar",
		new: "meow"
	},
	"data-bar": {
		default: "foo",
		new: "ruff"
	}
});
```

## Basic Boolean Toggles
This is just silly/fake code to demonstrate how to toggle attributes.

``` html
<button aria-pressed="false" data-foo="true">Button</button>
```

``` javascript
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(e){

	var el = this;

	_toggleAttr(el,["aria-pressed","data-foo"]);

});
```

## Advanced Custom Toggles
If you have one or more custom attributes you want to toggle values pass an object with default and new values.

``` html
<button>Button</button>
<div class="target" data-foo="bar" data-animal-sound="meow">...</div>
```

``` javascript

var button = document.getElementsByTagName("button")[0],
		target = document.querySelector(".target");

button.addEventListener("click", function(e){

	_toggleAttr(target,{
		"data-foo": {
			default: "bar",
			new: "foo"
		},
		"data-animal-sound": {
			default: "meow",
			new: "ruff"
		}
	});

});
```

### Notes
* Do not mix types in the 2nd parameter. You can't pass an array and an object currently. If you need that functionality just call the `_toggleAttr()` function again.

## Contibutions and Bugs
Feel free to [contribute to this project](https://github.com/joe-watkins/_toggleAttr/blob/master/CONTRIBUTING.md) and if you find bugs please file them in the [issue tracker](https://github.com/joe-watkins/_toggleAttr/issues). The idea of this project is to make toggling attributes easier, with no dependencies, while keeping the file size small. 
