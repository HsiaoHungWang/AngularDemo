export function log(target:any){
    return class extends target{
        savingTime:string = `儲存時間：${new Date()}`;
    }
}