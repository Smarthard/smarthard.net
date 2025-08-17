import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-contacts',
    imports: [],
    templateUrl: './contacts.html',
    styleUrl: './contacts.scss',
    host: { class: 'contacts' },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contacts {
    email = input.required<string>();
    telegram = input.required<string>();
    github = input.required<string>();
    discord = input.required<string>();

    mailto = computed(() => `mailto:${this.email()}`);
}
