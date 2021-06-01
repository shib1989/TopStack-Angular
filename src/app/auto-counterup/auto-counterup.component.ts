import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-auto-counterup',
  templateUrl: './auto-counterup.component.html',
  styleUrls: ['./auto-counterup.component.css']
})
export class AutoCounterupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
          $('.counter').counterUp({
            delay: 10,
            time: 2000
          });
   })(jQuery); 
  }

}
