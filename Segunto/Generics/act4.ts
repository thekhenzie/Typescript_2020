interface Kurt<T, G> {
  kurtPro(gg: T, gg1: G): void;
}

class tstest<T, G> implements Kurt<T, G> {
  kurtPro = (gg: T, gg1: G) => console.log(`input 1 = ${gg}, input 2 = ${gg1}`);
}
let disp1: Kurt<number, number> = new tstest();
disp1.kurtPro(45, 65);

let disp2: Kurt<boolean, string> = new tstest();
disp2.kurtPro(false, "TypeScript is hard");

let dips3: Kurt<[string, number], any | number> = new tstest();
dips3.kurtPro(["Hi", 96], 45 | 45);
