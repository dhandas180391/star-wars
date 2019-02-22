import { Component, Input } from '@angular/core';

@Component({
	selector: 'sw-page-title',
	templateUrl: './page-title.component.html'
})
export class PageTitleComponent {
	@Input() title: string | null = null;
	@Input() iconClass: string | null = null;
}
