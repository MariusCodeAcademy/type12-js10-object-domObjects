// atspausdinti konsoleje username ir email
// sukurti kintamaji ir i ji irasyti string pavidalus adreso gatve, miesta ir zipcode.

const us1 = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

// sukurti nauja objekta coords ir i ji irasyti latitude and longitude koorrdinates.
const coords = {
  latitude: +us1.address.geo.lat,
  longitude: +us1.address.geo.lng,
};
console.log('coords ===', coords);
