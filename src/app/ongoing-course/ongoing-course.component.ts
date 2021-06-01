import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-ongoing-course',
  templateUrl: './ongoing-course.component.html',
  styleUrls: ['./ongoing-course.component.css']
})
export class OngoingCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $('.owl-carousel').owlCarousel({
		    loop:true,
		    dots: true,
		    margin:10,
		    items:4,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsive:{
		         0:{
		            items:1,
		            nav:false
		        },
		        600:{
		            items:2,
		            nav:false
		        },
		        1000:{
		            items:3,
		            nav:false
		        }
		    }
		})
  })(jQuery); 
  }

}
