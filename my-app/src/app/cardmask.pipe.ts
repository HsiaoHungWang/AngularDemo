import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardmask'
})
export class CardmaskPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): unknown {
    //0 symbol  **** ----
    //1 顯示的開頭數字數量  {{41111111111|cardmask:'-':4:4}}  //4111---------4111
    //2 顯示的結束數字數量
    value = value.toString();
    let symbol:string = args[0] as string;
    let start:number = args[1] as number;
    let end:number = args[2] as number;
    const mask: string = symbol.repeat(value.length - start - end);
   return value.substring(0, start) + mask + value.substring(value.length - end);

  }

}
