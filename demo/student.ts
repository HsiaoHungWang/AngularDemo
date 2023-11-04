export function student(config:any){
    return function(target:any){
        //todo
        return class extends target{
           course():string {
            return config.course;
           }
        }
    }
}


