import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PortfolioCard } from '../portfolio-card';

@Component({
    selector: 'app-portfolio',
    imports: [PortfolioCard],
    templateUrl: './portfolio.html',
    styleUrl: './portfolio.scss',
    host: { class: 'portfolio' },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Portfolio {
    readonly portfolioItems = [
        {
            name: 'Shikicinema',
            link: 'https://chromewebstore.google.com/detail/shikicinema/hmbjohbggdnlpmokjbholpgegcdbehjp',
            image: '/portfolio/shikicinema.png',
            description: 'Браузерное расширение для сайта shikimori.one на Angular и Ionic Framework<br><br>Пет-проект. Разрабатывается с лета 2019 года и имеет более 6000 пользователей',
        },
        {
            name: 'Личный кабинет ingos.ru',
            link: 'https://ingos.ru',
            image: '/portfolio/ingos.png',
            description: 'Разработка обновленного портала личного кабинета Ингосстрах. Списки полисов страхования, детальная информация о полисе, регистрация страховых случаев по КАСКО/ОСАГО и куча-куча всего остального...<br><br>Основная работа с 2022-2024 гг.',
        },
        {
            name: 'AtTrack',
            link: 'https://attrack.ru',
            image: '/portfolio/attrack.png',
            description: 'Тайм-трекер для внутреннего использования внутри Umbrella IT и для B2B. Оптимизации на странице с затреканным временем пользователя с помощью memoize вычислений и уменьшения количества отрисовок. Онбоардинг тур с подсказками для новых пользователей с разными кейсами в зависимости от ролей<br><br>Основная работа с 2020-2022 гг.',
        },
        {
            name: 'Винко-Т',
            link: 'http://vinco-t.com',
            image: '/portfolio/vinco-t.png',
            description: 'Разрабатывали совместно с Axiros внутренний портал для удаленного управления CPE через протокол CWMP. Использовался python для описания динамической конфигурации "морды" для пользовательского устройства<br><br>Основная работа с 2018-2020 гг.',
        },
    ]
}
