# Vuejs  Autocomplete Compopent ([Demo](https://mrabbani.github.io/examples/vue_typeahead))

Hope your are familiar with [node](http://nodejs.org) and able to compile [vuejs](https://vuejs.org/v2/guide/components.html) component.

## Installation

    npm install vuejs-autocomplete --save  
      
## Properties

- `value`: `String` - The value input field;
- `classes`: `String` - The name of class for input field
- `suggestionTemplate`: `String` - A Custom template which will be displayed as suggestion list
- `defaultSuggestion` : `Boolean` - 'true' if you want to enable default suggestion on focus.
- `local`: `Array` - If you want to pass your existing data for auto-completion items.
- `remote`: `String` - The remote(server) url to fetch auto-completion items.
- `responseWrapper`: `String` - The `key` name which is used ot wrap the response.
 
## Events

- `selected` : This event is fired when an item is selected and passed as argument.

# [Vuejs-autocomplete Example](https://github.com/mrabbani/vuejs-autocomple-example)


