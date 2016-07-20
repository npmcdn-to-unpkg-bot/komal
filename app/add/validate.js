System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TextValidator;
    return {
        setters:[],
        execute: function() {
            TextValidator = (function () {
                function TextValidator() {
                }
                TextValidator.isString = function (control) {
                    if (control.value != "" && !isNaN(control.value)) {
                        return { "isString": true };
                    }
                    return null;
                };
                return TextValidator;
            }());
            exports_1("TextValidator", TextValidator);
        }
    }
});
//# sourceMappingURL=validate.js.map