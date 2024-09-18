"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Person", {
    enumerable: true,
    get: function() {
        return _Person;
    }
});
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _apply_decs_2203_r = require("@swc/helpers/_/_apply_decs_2203_r");
var _initClass, _init_name, _initProto;
console.log("Start");
function classDecorator(target) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    console.log("=== class decorator ====================");
    console.log("* target:", target);
    console.log("* args:", args);
}
function propertyDecorator(target) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    console.log("=== property decorator ====================");
    console.log("* target:", target);
    console.log("* args:", args);
}
function accessorGetDecorator(target) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    console.log("=== accessorGet decorator ====================");
    console.log("* target:", target);
    console.log("* args:", args);
}
function accessorSetDecorator(target) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    console.log("=== accessorSet decorator ====================");
    console.log("* target:", target);
    console.log("* args:", args);
}
function methodDecorator(target) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    console.log("=== method decorator ====================");
    console.log("* target:", target);
    console.log("* args:", args);
}
function parameterDecorator(target) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    console.log("=== parameter decorator ====================");
    console.log("* target:", target);
    console.log("* args:", args);
}
var _Person;
var Person = /*#__PURE__*/ function() {
    "use strict";
    function Person() {
        _class_call_check._(this, Person);
        _define_property._(this, "name", _init_name(this, ""));
        _initProto(this);
    }
    _create_class._(Person, [
        {
            key: "isGood",
            get: function get() {
                return true;
            }
        },
        {
            key: "height",
            set: function set(value) {}
        },
        {
            key: "saySomething",
            value: function saySomething(thing) {}
        }
    ]);
    return Person;
}();
var ref, ref1, ref2;
ref = _apply_decs_2203_r._(Person, [
    [
        accessorGetDecorator,
        3,
        "isGood"
    ],
    [
        accessorSetDecorator,
        4,
        "height"
    ],
    [
        methodDecorator,
        2,
        "saySomething"
    ],
    [
        propertyDecorator,
        0,
        "name"
    ]
], [
    classDecorator
]), ref1 = _sliced_to_array._(ref.e, 2), _init_name = ref1[0], _initProto = ref1[1], ref1, ref2 = _sliced_to_array._(ref.c, 2), _Person = ref2[0], _initClass = ref2[1], ref2, ref;
_initClass();
console.log("Definition end");
var person = new _Person();
console.log("End");
