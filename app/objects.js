exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {

  },

  iterate : function(obj) {
    var results = [];
    for (var key in obj) {
      results.push(key.concat(": ").concat(obj[key]));
    }
    return results;
  }
};
