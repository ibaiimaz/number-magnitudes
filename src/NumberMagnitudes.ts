export class NumberMagnitudes {
    parse(numbers: number[]): string[] {
        const parsedNumbers = [];
        for (const number of numbers) {
            parsedNumbers.push(this.parseNumber(number));
        }
        return parsedNumbers;
    }

    private parseNumber (number: number) {
        const millions = number / 1000000;
        if (millions >= 1) {
            return `${Math.floor(millions)}M`;
        }

        const thousands = number / 1000;
        if (thousands >= 1) {
            return `${Math.floor(thousands)}K`;
        }

        return number.toString();
    }

}
