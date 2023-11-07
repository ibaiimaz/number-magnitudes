import { Parser } from "./Parser";
import { MagnitudeData } from "./MagnitudeData";

const pipe = (value: number, ...fns: Parser[]) => {
    const data = {value, result: null };
    return fns.reduce((acc: MagnitudeData, fn) => fn(acc), data);
}

export class NumberMagnitudes {
    parse(numbers: number[]): string[] {
        const parseNumber = this.parseNumberBy(
            this.millionsParser,
            this.thousandsParser,
            this.stringParser
        );

        return numbers.reduce((acc: string[], number: number) => {
            const { result } = parseNumber(number);
            return ([ ...acc, result as string]);
        }, []);
    }

    private parseNumberBy = (...parsers: Parser[]) => (number: number) => {
        return pipe(number, ...parsers)
    }

    private magnitudeParser = (letter: string, magnitude: number, data: MagnitudeData) => {
        if (data.result) {
            return data;
        }

        const result = data.value / magnitude;
        return result >= 1
            ? { ...data, result: `${Math.floor(result)}${letter}` }
            : data;
    }
    
    private thousandsParser = (data: MagnitudeData) => {
        return this.magnitudeParser("K", 1000, data)
    }

    private millionsParser = (data: MagnitudeData) => {
        return this.magnitudeParser("M", 1000000, data)
    }
    
    private stringParser = (data: MagnitudeData) => {
        if (data.result) {
            return data;
        }
        return { ...data, result: data.value.toString() };
    }
}
