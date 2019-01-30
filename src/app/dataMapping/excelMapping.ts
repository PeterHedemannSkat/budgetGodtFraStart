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
        id: 'loen',
        value: null,
        txt: 'løn',
        editable: false
    },
    {
        id: 'vareforbrug',
        value: null,
        txt: 'vareforbrug',
        editable: false
    },
    {
        id: 'lokaleeje',
        value: null,
        txt: 'lokaleeje',
        editable: false
    },
    {
        id: 'telefoninternet',
        value: null,
        txt: 'telefon og internet',
        editable: false
    }
];

export const dataSructure = [
    new StateContainer(
        'indtaegter',
        indtagter,
        'indtægter',
        'total indtægter',
        'indtægt'
    ),
    new StateContainer(
        'udgifter',
        udgifter,
        'udgifter',
        'total udgifter',
        'udgift'
    )
];
