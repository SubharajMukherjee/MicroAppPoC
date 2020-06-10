import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';
  toggle: string = 'test';
  // ngOnInit(): void {
  //   var jsElm = document.createElement('script');
  //   jsElm.type = 'application/javascript';
  //   jsElm.src = 'http://127.0.0.1:8080/elements2.js';
  //   // jsElm.src = 'http://127.0.0.1:8081/elements1/dist/elements1.js';
    
  //   document.body.appendChild(jsElm);
    
  // }

  // togg() {
  //   // this.toggle = this.toggle === 'true' ? 'false' : 'true';
  //   this.toggle = 'true';
  // }

  // togg1() {
  //   this.toggle = 'false';
  // }
  enableVersion: string = null;
  allowFurther = false;
  constructor(private svc: AppComponentService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.svc.getConfig().subscribe(data => {
      console.log(JSON.stringify(data));
      localStorage.setItem('appVersion', JSON.stringify(data));
      this.allowFurther = true;
    },
    ()=> {
      console.log('Config file not found');
      this.allowFurther = false;
    });
    this.enableVersion = localStorage.getItem("enableVersion");
  }
}
