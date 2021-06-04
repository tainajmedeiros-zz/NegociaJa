System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecuteTime(inSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const method = descriptor.value;
            descriptor.value = function (...args) {
                let unit = 'ms';
                let divisor = 1;
                if (inSeconds) {
                    unit = 's';
                    divisor = 1000;
                }
                console.log('-----------------------');
                console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const response = method.apply(this, args);
                console.log(`Resultado do método: ${JSON.stringify(response)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} demorou ${t2 - t1 / divisor} ${unit}`);
                console.log('-----------------------');
                return response;
            };
            return descriptor;
        };
    }
    exports_1("logExecuteTime", logExecuteTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
