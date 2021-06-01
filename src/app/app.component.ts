import { Component, OnInit } from '@angular/core';
declare var jQuery :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TopStack';
  ngOnInit() : void{
    (function ($) {
      $('.icon').click(function(){
          $('span').toggleClass("cancel");
        });
          
   })(jQuery);
  }
}
