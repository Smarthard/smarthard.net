import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-portfolio-card',
    imports: [],
    templateUrl: './portfolio-card.html',
    styleUrl: './portfolio-card.scss',
    host: { class: 'portfolio-card' },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioCard {
    name = input.required<string>();

    description = input<string>();
    image = input<string>();
}
