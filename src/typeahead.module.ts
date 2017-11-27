import { TypeaheadComponent } from './typeahead.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [TypeaheadComponent],
  exports: [TypeaheadComponent]
})
export class TypeaheadModule {
}
