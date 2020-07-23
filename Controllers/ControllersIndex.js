const fs= require('fs');
const path = require('path');

// FUNCIONES PRIVADAS

function readJson(filname){
     return JSON.parse(fs.readFileSync(index.archivo, 'utf-8'));
}
function saveJson(products){
     return fs.writeFileSync(index.archivo,JSON.stringify(products, 'utf-8'));
}
function addProduct(product){
     let products=readJson();
     products.push(product);
}

function searchById(id){
     let products=readJson();
     let product= products.find(p => p.id == id);
     return product;
}



let index = {
     archivo : path.join(__dirname, '../data/productsDataBase.json'),
     home: (req, res, next) => {
          let productos = readJson();
          res.render('base', { propiedadesProductos: productos });
     },
     productoId: (req, res, next) => {
          let product = searchById(req.params.id);

          if (product) {
               res.render('product', { propiedadesProductos: product });
          } else {
               res.render('product', { propiedadesProductos: 'PRODUCTO NO ENCONTRADO' });
          }
     },
}


module.exports = index;

// Basado en tu última visita