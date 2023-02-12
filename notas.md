# Usar la plataforma
-. intentar seguir los standards
-. Usar nombres de componentes familiares y que tengan relación con elementos HTML. Poner un ejemplo de un componente <a73-boton> y un elemento <boton>
-. Intentar usar nombres comunes para los atributos (props), por ejemplo si tenemos un avatar en vez de usar url como atributo usar src que es lo que se una en una etiqueta img
-. Menos props y más slots: Usar siempre que se pueda estrcutura con slots / children. Puedo poner el ejemplo de un avatar circular en done el children es la imagen para meter una image un video etc o texto con ellipsis

# Patrón:  Single Element Pattern (Diego Haz)
https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/
https://github.com/diegohaz/singel

queremos resolver estas preguntas
Question #1: What if I need to pass props to nested elements?
Question #2: Will this break the app for some reason?
Question #3: What if I want to pass id or another HTML attribute?
Question #4: Can I style it passing className or style props?
Question #5: What about event handlers?
---
Rule #1: Render only one element (mirar como resuelve vue el pàsar props nativas a elementos internos)
Rule #2: Never break the app
Rule #3: Render all HTML attributes passed as props (Spread the props)
Rule #4: Always merge the styles passed as props Error muy común en React
Rule #5: Add all the event handlers passed as props

## Componentes polimórficos "as"
en react --> https://www.npmjs.com/package/react-polymorphic-types
en vue --> https://www.npmjs.com/package/@polymorphic-factory/vue

No sobrecargar su uso , por ejemplo en Heading no tiene sentido

## Encapsulación
BEM
no margenes
ancho 100%

## componentes de grids o layouts

## Accesibilidad ???

----


Dependency injection / componentes stateless / stateful
Inmutabilidad
Principio Open / close open for extensions close to modification

Componer mixins with*  higher order component




Biblio:
https://www.patterns.dev/
https://octuweb.com/creando-mejores-componentes
https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/
https://frontendmasters.com/courses/tour-js-patterns/
