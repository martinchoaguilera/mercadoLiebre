let path = require( 'path' );
let fs = require( 'fs' );

function readJson(filname){
     return JSON.parse( fs.readFileSync( controllers.archivo, 'utf-8' ) );
}

function saveJson(products){
     return fs.writeFileSync( controllers.edit , JSON.stringify( products , 'utf-8' ) );
}

function searchById(id){
     let products = readJson();
     let product = products.find( p => p.id == id);
     return product;
}
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
let controllers = {
     archivo: path.join( __dirname , '../data/productsDataBase.json' ),
     // ---------------------------------------------------------------------------------------
     edit: ( req , res ) => {
          let product = searchById( req.params.id );
          console.log(product);
          
          res.render('edit', {propiedadesProductos: product});
     }
}


module.exports= controllers;