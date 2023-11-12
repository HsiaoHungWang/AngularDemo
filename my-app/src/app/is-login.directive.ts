import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsLogin]'
})
export class IsLoginDirective {

  // @Input() set appIsLogin(isLogin:boolean){
  //    if(isLogin){
  //      this.viewContainer.createEmbeddedView(this.templateRef);
  //   }else{
  //     this.viewContainer.clear();
  //   }
  // }

  @Input("appIsLogin") isLogin = false;
  @Input("appIsLoginThen") other:TemplateRef<any> | null = null;

  constructor(private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) { }
 
  ngOnInit(){
    if(this.isLogin){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
      if(this.other){
        this.viewContainer.createEmbeddedView(this.other);
      }
    }
  }
}
