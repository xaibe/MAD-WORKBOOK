import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

@NgModule({
  declarations: [ProfileDetailComponent],
  exports: [ProfileDetailComponent],
  imports: [CommonModule]
})
export class SharedModule {}
