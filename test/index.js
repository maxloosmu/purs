// Generated by purs bundle 0.14.4
var PS = {};
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Boolean"] = $PS["Data.Boolean"] || {};
  var exports = $PS["Data.Boolean"];
  var otherwise = true;
  exports["otherwise"] = otherwise;
})(PS);
(function(exports) {
  "use strict";

  exports.intSub = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x - y | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});
(function(exports) {
  "use strict";

  exports.intAdd = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x + y | 0;
    };
  };

  exports.intMul = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x * y | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Semiring"] = $PS["Data.Semiring"] || {};
  var exports = $PS["Data.Semiring"];
  var $foreign = $PS["Data.Semiring"];
  var zero = function (dict) {
      return dict.zero;
  };
  var semiringInt = {
      add: $foreign.intAdd,
      zero: 0,
      mul: $foreign.intMul,
      one: 1
  };
  var add = function (dict) {
      return dict.add;
  };
  exports["add"] = add;
  exports["zero"] = zero;
  exports["semiringInt"] = semiringInt;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Ring"] = $PS["Data.Ring"] || {};
  var exports = $PS["Data.Ring"];
  var $foreign = $PS["Data.Ring"];
  var Data_Semiring = $PS["Data.Semiring"];
  var ringInt = {
      sub: $foreign.intSub,
      Semiring0: function () {
          return Data_Semiring.semiringInt;
      }
  };
  exports["ringInt"] = ringInt;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.CommutativeRing"] = $PS["Data.CommutativeRing"] || {};
  var exports = $PS["Data.CommutativeRing"];
  var Data_Ring = $PS["Data.Ring"];
  var commutativeRingInt = {
      Ring0: function () {
          return Data_Ring.ringInt;
      }
  };
  exports["commutativeRingInt"] = commutativeRingInt;
})(PS);
(function(exports) {
  "use strict";

  exports.intDegree = function (x) {
    return Math.min(Math.abs(x), 2147483647);
  };

  // See the Euclidean definition in
  // https://en.m.wikipedia.org/wiki/Modulo_operation.
  exports.intDiv = function (x) {
    return function (y) {
      if (y === 0) return 0;
      return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
    };
  };

  exports.intMod = function (x) {
    return function (y) {
      if (y === 0) return 0;
      var yy = Math.abs(y);
      return ((x % yy) + yy) % yy;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.EuclideanRing"] = $PS["Data.EuclideanRing"] || {};
  var exports = $PS["Data.EuclideanRing"];
  var $foreign = $PS["Data.EuclideanRing"];
  var Data_CommutativeRing = $PS["Data.CommutativeRing"];  
  var mod = function (dict) {
      return dict.mod;
  };
  var euclideanRingInt = {
      degree: $foreign.intDegree,
      div: $foreign.intDiv,
      mod: $foreign.intMod,
      CommutativeRing0: function () {
          return Data_CommutativeRing.commutativeRingInt;
      }
  };
  exports["mod"] = mod;
  exports["euclideanRingInt"] = euclideanRingInt;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Foldable"] = $PS["Data.Foldable"] || {};
  var exports = $PS["Data.Foldable"];
  var Data_Semiring = $PS["Data.Semiring"];
  var foldl = function (dict) {
      return dict.foldl;
  };
  var sum = function (dictFoldable) {
      return function (dictSemiring) {
          return foldl(dictFoldable)(Data_Semiring.add(dictSemiring))(Data_Semiring.zero(dictSemiring));
      };
  };
  exports["foldl"] = foldl;
  exports["sum"] = sum;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Function"] = $PS["Data.Function"] || {};
  var exports = $PS["Data.Function"];
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  exports["flip"] = flip;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Monoid"] = $PS["Data.Monoid"] || {};
  var exports = $PS["Data.Monoid"];
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["mempty"] = mempty;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Semigroup"] = $PS["Data.Semigroup"] || {};
  var exports = $PS["Data.Semigroup"];
  var append = function (dict) {
      return dict.append;
  };
  exports["append"] = append;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.List.Types"] = $PS["Data.List.Types"] || {};
  var exports = $PS["Data.List.Types"];
  var Data_Foldable = $PS["Data.Foldable"];
  var Data_Function = $PS["Data.Function"];
  var Data_Monoid = $PS["Data.Monoid"];
  var Data_Semigroup = $PS["Data.Semigroup"];        
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();                                                                
  var foldableList = {
      foldr: function (f) {
          return function (b) {
              var rev = (function () {
                  var go = function ($copy_acc) {
                      return function ($copy_v) {
                          var $tco_var_acc = $copy_acc;
                          var $tco_done = false;
                          var $tco_result;
                          function $tco_loop(acc, v) {
                              if (v instanceof Nil) {
                                  $tco_done = true;
                                  return acc;
                              };
                              if (v instanceof Cons) {
                                  $tco_var_acc = new Cons(v.value0, acc);
                                  $copy_v = v.value1;
                                  return;
                              };
                              throw new Error("Failed pattern match at Data.List.Types (line 108, column 7 - line 108, column 23): " + [ acc.constructor.name, v.constructor.name ]);
                          };
                          while (!$tco_done) {
                              $tco_result = $tco_loop($tco_var_acc, $copy_v);
                          };
                          return $tco_result;
                      };
                  };
                  return go(Nil.value);
              })();
              var $205 = Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b);
              return function ($206) {
                  return $205(rev($206));
              };
          };
      },
      foldl: function (f) {
          var go = function ($copy_b) {
              return function ($copy_v) {
                  var $tco_var_b = $copy_b;
                  var $tco_done1 = false;
                  var $tco_result;
                  function $tco_loop(b, v) {
                      if (v instanceof Nil) {
                          $tco_done1 = true;
                          return b;
                      };
                      if (v instanceof Cons) {
                          $tco_var_b = f(b)(v.value0);
                          $copy_v = v.value1;
                          return;
                      };
                      throw new Error("Failed pattern match at Data.List.Types (line 112, column 12 - line 114, column 30): " + [ v.constructor.name ]);
                  };
                  while (!$tco_done1) {
                      $tco_result = $tco_loop($tco_var_b, $copy_v);
                  };
                  return $tco_result;
              };
          };
          return go;
      },
      foldMap: function (dictMonoid) {
          return function (f) {
              return Data_Foldable.foldl(foldableList)(function (acc) {
                  var $207 = Data_Semigroup.append(dictMonoid.Semigroup0())(acc);
                  return function ($208) {
                      return $207(f($208));
                  };
              })(Data_Monoid.mempty(dictMonoid));
          };
      }
  };
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
  exports["foldableList"] = foldableList;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.List"] = $PS["Data.List"] || {};
  var exports = $PS["Data.List"];
  var Data_Boolean = $PS["Data.Boolean"];
  var Data_List_Types = $PS["Data.List.Types"];
  var singleton = function (a) {
      return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
  };
  var reverse = (function () {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return acc;
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                      $copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List (line 372, column 3 - line 372, column 19): " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  })();
  var range = function (start) {
      return function (end) {
          if (start === end) {
              return singleton(start);
          };
          if (Data_Boolean.otherwise) {
              var go = function ($copy_s) {
                  return function ($copy_e) {
                      return function ($copy_step) {
                          return function ($copy_rest) {
                              var $tco_var_s = $copy_s;
                              var $tco_var_e = $copy_e;
                              var $tco_var_step = $copy_step;
                              var $tco_done = false;
                              var $tco_result;
                              function $tco_loop(s, e, step, rest) {
                                  if (s === e) {
                                      $tco_done = true;
                                      return new Data_List_Types.Cons(s, rest);
                                  };
                                  if (Data_Boolean.otherwise) {
                                      $tco_var_s = s + step | 0;
                                      $tco_var_e = e;
                                      $tco_var_step = step;
                                      $copy_rest = new Data_List_Types.Cons(s, rest);
                                      return;
                                  };
                                  throw new Error("Failed pattern match at Data.List (line 152, column 3 - line 153, column 65): " + [ s.constructor.name, e.constructor.name, step.constructor.name, rest.constructor.name ]);
                              };
                              while (!$tco_done) {
                                  $tco_result = $tco_loop($tco_var_s, $tco_var_e, $tco_var_step, $copy_rest);
                              };
                              return $tco_result;
                          };
                      };
                  };
              };
              return go(end)(start)((function () {
                  var $226 = start > end;
                  if ($226) {
                      return 1;
                  };
                  return -1 | 0;
              })())(Data_List_Types.Nil.value);
          };
          throw new Error("Failed pattern match at Data.List (line 148, column 1 - line 148, column 32): " + [ start.constructor.name, end.constructor.name ]);
      };
  };
  var filter = function (p) {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return reverse(acc);
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      if (p(v.value0)) {
                          $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                          $copy_v = v.value1;
                          return;
                      };
                      if (Data_Boolean.otherwise) {
                          $tco_var_acc = acc;
                          $copy_v = v.value1;
                          return;
                      };
                  };
                  throw new Error("Failed pattern match at Data.List (line 394, column 3 - line 394, column 27): " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  };
  exports["range"] = range;
  exports["filter"] = filter;
})(PS);
(function(exports) {
  "use strict";

  exports.showIntImpl = function (n) {
    return n.toString();
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Show"] = $PS["Data.Show"] || {};
  var exports = $PS["Data.Show"];
  var $foreign = $PS["Data.Show"];
  var showInt = {
      show: $foreign.showIntImpl
  };
  var show = function (dict) {
      return dict.show;
  };
  exports["show"] = show;
  exports["showInt"] = showInt;
})(PS);
(function(exports) {
  "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect.Console"] = $PS["Effect.Console"] || {};
  var exports = $PS["Effect.Console"];
  var $foreign = $PS["Effect.Console"];
  exports["log"] = $foreign.log;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Euler"] = $PS["Euler"] || {};
  var exports = $PS["Euler"];
  var Data_EuclideanRing = $PS["Data.EuclideanRing"];
  var Data_Foldable = $PS["Data.Foldable"];
  var Data_List = $PS["Data.List"];
  var Data_List_Types = $PS["Data.List.Types"];
  var Data_Semiring = $PS["Data.Semiring"];                
  var ns = Data_List.range(0)(999);
  var multiples = Data_List.filter(function (n) {
      return Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt)(n)(3) === 0 || Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt)(n)(5) === 0;
  })(ns);
  var answer = Data_Foldable.sum(Data_List_Types.foldableList)(Data_Semiring.semiringInt)(multiples);
  exports["answer"] = answer;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Data_Show = $PS["Data.Show"];
  var Effect_Console = $PS["Effect.Console"];
  var Euler = $PS["Euler"];                
  var main = Effect_Console.log("The answer is " + Data_Show.show(Data_Show.showInt)(Euler.answer));
  exports["main"] = main;
})(PS);
PS["Main"].main();