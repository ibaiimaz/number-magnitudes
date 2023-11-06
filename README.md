# Number magnitudes

Aplikazio honek zenbaki zerrenda bat jasoko du, eta berauk itzuliko ditu textu bihurtuz, baina honakoa kontuan izanik:
- Zenbakia milioi bat edo haundiagoa bada, milakoak ezabatuko ditugu eta M bat jarriko dugu hauen ordez: *3700000 => 3M*
- Zenbakia milioi bat baino txikiagoa eta mila edo haundiagoa bada, ehunekoak ezabatuko ditugu eta K bat jarriko dugu hauen ordez: *2300 => 2K*
- Bestela, jasotako zenbaki bera itzuliko da textu moduan

Hemen exekuzio adibide bat:
```js
result = numberMagnitudes.parse([12000000, 1500000, 25000, 8300, 750, 12]);
// result: ["12M", "1M", "25K", "8K", "750", "12"]
```

## Egin beharrekoa

- TDD jarraituz eskakizunak inplementatu ahalik eta modu zuzenenean
- Behin test guztiak berdean daudela, zehozer birfaktorizatu daitekeen begiratu eta burutu kodea ulertzeko ahalik eta xinpleen izan dadin eta mantentzen erreza
#### Extra
- Gehitu `1B` eta `1T` kasuak mila milio eta milioi bat milioi adierazteko.

## Nola erabili

### Dependentziak instalatu

```bash
npm install
```

### Testak behin exekutatu

```bash
npm test
```

### Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki ber-exekutatu:

```bash
npm run test:watch
```

### Testak kode estaldurarekin exekutatu

```bash
npm run test:coverage
```

### Lintern erroreak egiaztatu

```bash
npm run lint
```

### Lintern erroreak zuzendu

```bash
npm run lint:fix
```

## Hook-ak
Proiektuak `pre-commit` hook bat dakar `commit` egiten den bakoitzean automatikoki testak exekutatu ditzan.

Hau ekidin nahi bada `--no-verify` erabil daiteke `commit` egiterakoan.
