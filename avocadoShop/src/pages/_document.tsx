import { Html, Head, Main, NextScript } from 'next/document';
 
/* los cambios aqui van a aplicar a todas las paginas.
 es una extension de el document en root por lo que se adiciona a ese document

 Html es un tag para controlar todo el html y poder hacer el code splitting

 Head contiene las etiquetas del head

 Main es el contenedor de NuestraAplicacion
*/
 export default function Document() {
  return (
    <Html>
      <Head>
        {/* A traves de esta etiqueta podemos modificar el head*/}
        {/* add favicon */}
        {/* add webfont */}
        {/* add stylesheet */}
        {/* add cdn */}
      </Head>
      <body className='my-body-class'>
        <Main />
        <NextScript />
        {/* aqui se pueden agregar elementos externos */}
        {/* se pueden agregar classes como my-body-class */}
      </body>
    </Html>
  );
}