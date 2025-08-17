import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';

import { Me } from './components/me';
import { Contacts } from "./components/contacts";
import { About } from "./components/about";
import { Portfolio } from "./components/portfolio";

@Component({
    selector: 'app-root',
    imports: [Me, Contacts, About, Portfolio],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly title = signal('smarthard.net');
}
