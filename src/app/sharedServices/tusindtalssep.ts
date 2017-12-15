import { Pipe, PipeTransform } from '@angular/core';
import { MathCalc } from './math.services';

@Pipe({
    name: 'readableDigitFormat',
    pure: false
})

/* better name readableDigitFormat, could add an argument determining the separater sign */

export class TusindtalsSep implements PipeTransform {

    transform(value: number, ...arg: any[]) {

        if (typeof value === 'number') {

            const
                int        = Math.floor(value),
                isNeg      = value < 0,
                absValue   = (isNeg) ? value * -1 : value,
                fraction   = Number(Number(value - int).toFixed(2)),
                mask       = new MathCalc().maskInteger(absValue, '.'),
                negMask    = (isNeg) ? '-' : '',
                fracStr    = fraction > 0 ? `,${fraction.toString().slice(2)}` : '';

            return `${negMask}${mask}${fracStr}`;

        } else {

            return '';

        }

    }
}



