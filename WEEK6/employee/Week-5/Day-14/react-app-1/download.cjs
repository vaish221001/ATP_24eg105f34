const fs = require('fs');
const https = require('https');

const urls = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
];

const dir = 'c:/Week-5/Day-14/react-app-1/src/assets';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

urls.forEach((url, i) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(`${dir}/product-${i + 1}.jpg`);
    res.pipe(file);
  });
});
