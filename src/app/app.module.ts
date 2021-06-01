import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCounterupComponent } from './auto-counterup/auto-counterup.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { SliderComponent } from './slider/slider.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { WaveComponent } from './wave/wave.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { OngoingCourseComponent } from './ongoing-course/ongoing-course.component';
import { TerminalsComponent } from './terminals/terminals.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCounterupComponent,
    TopNavigationBarComponent,
    MainNavigationBarComponent,
    SliderComponent,
    UpcomingEventComponent,
    WaveComponent,
    AboutSectionComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    OngoingCourseComponent,
    TerminalsComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
