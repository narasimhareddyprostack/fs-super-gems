class Central_Govt {
  tax = 15;
}

class KA_Govt extends Central_Govt {
  tax = 18;
}

let ka = new KA_Govt();
console.log(ka.tax);

class TN_GOvt extends Central_Govt {}
let tn = new TN_GOvt();
console.log(tn.tax);

class Goa_Govt extends Central_Govt {
  tax = 5;
}
let goa = new Goa_Govt();
console.log(goa.tax);
