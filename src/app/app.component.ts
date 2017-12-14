import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <product-list></product-list>
    </div>
    
    
  `,
  styles: ['div {border: 1px solid red}']
})
export class AppComponent {
  title = 'App Store';
}
