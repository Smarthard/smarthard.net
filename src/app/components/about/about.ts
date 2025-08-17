import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.html',
    styleUrl: './about.scss',
    host: { class: 'about' },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {}
