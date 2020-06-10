import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-element1',
  templateUrl: './test-element1.component.html',
  styleUrls: ['./test-element1.component.css']
})
export class TestElement1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var jsElm = document.createElement('script');
    jsElm.type = 'application/javascript';
    jsElm.src = 'http://127.0.0.1:8081/dist/elements1.js';
    // jsElm.src = 'http://127.0.0.1:8082/elements3.js';
    
    document.body.appendChild(jsElm);
  }

}
