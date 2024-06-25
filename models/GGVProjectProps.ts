import { PVStringProps } from './PVStringProps';

export interface GGVProjectProps {
    id: number;
    location_label_open_streetmap: string;
    location_latitute: number;
    location_longitude: number;
    inhabitantsOfLivingUnits: Array<number>;
    electrcityConsumption: number;
    pv_strings: Array<PVStringProps>;
    email: string;
    phone_number: string;
    address_for_contact: string;
}
