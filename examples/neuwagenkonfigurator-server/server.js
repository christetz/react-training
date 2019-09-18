const express = require('express');
const cors = require('cors');
const app = express();
const bauteile = [
  { name: 'motor', isSelected: false },
  { name: 'aussenspiegel', isSelected: false },
  { name: 'reifen', isSelected: false },
  { name: 'innenspiegel', isSelected: false },
  { name: 'navi', isSelected: false },
  { name: 'Lenkrad', isSelected: false },
  { name: 'Rueckleuchten', isSelected: false },
  { name: 'Sitzklimatik', isSelected: false },
];
app.use(cors({}));
app.get('/bauteile', (req, res) => {
  res.send(bauteile);
});

app.listen(8080, () => console.log('Server listen on 8080'));
