import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BloggSharedLibsModule, BloggSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BloggSharedLibsModule, BloggSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BloggSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BloggSharedModule {
  static forRoot() {
    return {
      ngModule: BloggSharedModule
    };
  }
}
