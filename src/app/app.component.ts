import { Component, OnInit } from '@angular/core';

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
  appName: string = null;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appName = localStorage.getItem("demo");
  }
}
