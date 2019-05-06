import {Pipe, PipeTransform} from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) { return null; }
        const actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}
