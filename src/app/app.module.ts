import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { LyHammerGestureConfig } from '@alyle/ui';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HammerModule],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
