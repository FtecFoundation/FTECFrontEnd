import {
    animate,
    style,
    animation, stagger, sequence, query
} from '@angular/animations';
export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

export const routerAnimation = animation([
    query(':enter > *', style({ opacity: 0, position: 'fixed'}), {
        optional: true
    }),
    query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
        optional: true
    }),
    sequence([
        query(
            ':leave > *',
            [
                style({  opacity: 1 }),
                animate(
                    '0.2s ease-in-out',
                    style({  opacity: 0 })
                ),
                style({ position: 'fixed' })
            ],
            { optional: true }
        ),
        query(
            ':enter > *',
            [
                style({
                    opacity: 0,
                    position: 'static'
                }),
                animate(
                    '0.5s ease-in-out',
                    style({ opacity: 1 })
                )
            ],
            { optional: true }
        )
    ]),
    query(
        ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
        stagger(100, [
            style({ opacity: 0 }),
            animate(
                '0.5s ease-in-out',
                style({ opacity: 1 })
            )
        ]),
        { optional: true }
    )
]);
