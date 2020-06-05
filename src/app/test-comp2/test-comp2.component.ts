import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp2',
  templateUrl: './test-comp2.component.html',
  styleUrls: ['./test-comp2.component.css']
})
export class TestComp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var jsElm = document.createElement('script');
    jsElm.type = 'application/javascript';
    jsElm.src = 'http://127.0.0.1:8080/elements2.js';
    // jsElm.src = 'http://127.0.0.1:8082/elements3.js';
    
    document.body.appendChild(jsElm);
    
  }

}
