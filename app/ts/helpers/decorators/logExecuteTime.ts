export function logExecuteTime(inSeconds: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const method = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let unit = 'ms';
            let divisor = 1;
            if(inSeconds) {
                unit = 's';
                divisor = 1000;
            }

            console.log('-----------------------')
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            
            const t1 = performance.now();
            const response = method.apply(this, args);

            console.log(`Resultado do método: ${JSON.stringify(response)}` )
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${t2 - t1/divisor} ${unit}`);
            console.log('-----------------------')
            return response;
        }

        return descriptor;
    }
}
