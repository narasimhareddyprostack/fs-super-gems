var emp = [
  { id: 1, name: "Theresita", sal: "Zloty" },
  { id: 2, name: "Dex", sal: "Yuan Renminbi" },
  { id: 3, name: "Chev", sal: "Sol" },
  { id: 4, name: "Kellen", sal: "Peso" },
  { id: 5, name: "Marlee", sal: "Yuan Renminbi" },
  { id: 6, name: "Krishnah", sal: "Yuan Renminbi" },
  { id: 7, name: "Gardiner", sal: "Dinar" },
  { id: 8, name: "Beale", sal: "Rupee" },
  { id: 9, name: "Ainslee", sal: "Yuan Renminbi" },
  { id: 10, name: "Carlin", sal: "Peso" },
  { id: 11, name: "Greer", sal: "Krona" },
  { id: 12, name: "Caz", sal: "Euro" },
  { id: 13, name: "Terrijo", sal: "Zloty" },
  { id: 14, name: "Imelda", sal: "Ruble" },
  { id: 15, name: "Gregg", sal: "Pound" },
  { id: 16, name: "Diane", sal: "Rupiah" },
  { id: 17, name: "Prudi", sal: "Ruble" },
  { id: 18, name: "Aleda", sal: "Rupiah" },
  { id: 19, name: "Amelie", sal: "Yuan Renminbi" },
  { id: 20, name: "Mahmud", sal: "Dollar" },
  { id: 21, name: "Jorrie", sal: "Baht" },
  { id: 22, name: "Ellyn", sal: "Real" },
  { id: 23, name: "Kerby", sal: "Franc" },
  { id: 24, name: "Cordula", sal: "Yuan Renminbi" },
  { id: 25, name: "Maryanne", sal: "Yen" },
  { id: 26, name: "Rolfe", sal: "Yuan Renminbi" },
  { id: 27, name: "Cazzie", sal: "Rupiah" },
  { id: 28, name: "Samuele", sal: "Yuan Renminbi" },
  { id: 29, name: "Haydon", sal: "Dollar" },
  { id: 30, name: "Bev", sal: "Euro" },
  { id: 31, name: "Theodora", sal: "Ruble" },
  { id: 32, name: "Antonie", sal: "Rupiah" },
  { id: 33, name: "Georgina", sal: "Real" },
  { id: 34, name: "Arlen", sal: "Afghani" },
  { id: 35, name: "Amitie", sal: "Real" },
  { id: 36, name: "Darill", sal: "Rupiah" },
  { id: 37, name: "Laverna", sal: "Yen" },
  { id: 38, name: "Silvanus", sal: "Rupiah" },
  { id: 39, name: "Susi", sal: "Zloty" },
  { id: 40, name: "Hieronymus", sal: "Dollar" },
  { id: 41, name: "Dorthea", sal: "Rupiah" },
  { id: 42, name: "Gelya", sal: "Lek" },
  { id: 43, name: "Tommie", sal: "Dram" },
  { id: 44, name: "Vassili", sal: "Euro" },
  { id: 45, name: "Donelle", sal: "Gourde" },
  { id: 46, name: "Cloe", sal: "Yuan Renminbi" },
  { id: 47, name: "Elmo", sal: "Rupiah" },
  { id: 48, name: "Shaughn", sal: "Yuan Renminbi" },
  { id: 49, name: "Geraldine", sal: "Rupiah" },
  { id: 50, name: "Deina", sal: "Peso" },
];

let display = () => {
  console.log("Test Case 123");
  let rows = "";
  for (let i = 0; i <= emp.length - 1; i++) {
    rows =
      rows +
      `<tr>  <td>${emp[i].id}</td>
    <td>${emp[i].name}</td>
    <td>${emp[i].sal}</td> </tr>`;
  }
  document.getElementById("rajni").innerHTML = rows;
};
