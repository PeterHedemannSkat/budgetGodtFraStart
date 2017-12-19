import { ExcelType } from '../components/excel-type-2/interfaces';
import { StateContainer } from './stateContainer';

export const indtagter: ExcelType[] = [
    {
        id: 'vareSalg',
        value: null,
        txt: 'salg af varer',
        editable: false

    },
    {
        id: 'ydelserSalg',
        value: null,
        txt: 'salg af ydelser',
        editable: false
    }

];

export const udgifter: ExcelType[] = [
    {
        id: 'vareforbrug',
        value: null,
        txt: 'vareforbrug',
        editable: false
    },
    {
        id: 'transport',
        value: null,
        txt: 'transport',
        editable: false
    },
    {
        id: 'lokaleeje',
        value: null,
        txt: 'lokaleeje',
        editable: false
    }
];

export const dataSructure = [
    new StateContainer('indtaegter', indtagter, 'indtægter', 'total indtægter', 'indtægt'),
    new StateContainer('udgifter', udgifter, 'udgifter', 'total udgifter', 'udgift'),
];
