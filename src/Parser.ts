import { MagnitudeData } from "./MagnitudeData";

export interface Parser {
    (data: MagnitudeData): MagnitudeData;
}
;
