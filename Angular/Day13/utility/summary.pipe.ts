import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary',
    pure:true
})
export class SummaryPipe implements PipeTransform
{
        transform(value: any,start:number=0,end:number=20) {
            
            console.log("U r in transform method");

            let temp=(<string> value);

            // return (temp.substring(0,20)+"...")
            // let s=start?start:0;
            // let e=end?end:20;
            // return (temp.substring(s,e)+"...");
            return (temp.substring(start,end)+"...");

        }
}