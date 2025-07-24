# Star Wars Expo App

## Get started

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar el proyecto

   ```bash
   npx expo run:ios
   ```

   or

   ```bash
   npx expo run:android
   ```

  3. Para correr los tests:

   ```bash
   npm run test
   ```

# Decisiones

## Generales
- Decidí no utilizar Suspense para mostrar el manejo de las consultas sin él.
- Agregue test de snapshot para sumar variedad respecto de los tests realizados en el proyecto de Next.js.


## Utilización de NativeWind vs UniStyles en proyecto Mobile
- Si bien Unistyles es realmente una excelente alternativa para React Native, en este caso se optó por NativeWind para mantener consistencia a lo largo de los proyectos. (Una de mis formas de trabajar proyectos y de liderar equipos es mantener consistencia en las herramientas y librerías utilizadas, para evitar problemas de compatibilidad y facilitar el trabajo en equipo).
- A su vez, al elegir NativeWind, pude hacer uso de componentes reutilizables de React Native Reusables, inspirado en ShadcnUI, que me permitieron acelerar el desarrollo de la aplicación móvil y mantener una buena consistencia en los estilos. Estos componentes son una excelente base para construir aplicaciones móviles con un diseño moderno y funcional.

## Estructura de carpetas
Opté por una estructura de carpetas para los componentes siguiendo la convención de Atomic Design, ya que me parece una forma de organizar los componentes que permite una mejor escalabilidad y reutilización. Sin embargo, también creo que es importante adaptarse a las necesidades del proyecto, por lo tanto decidí separar por casos de uso (en este ejemplo, People), ya que en este caso hay componentes particulares para lo que son las personas. Me parece una buena forma de organizar los componentes y mantener la consistencia en el proyecto, y hacerlo más fácil de entender y mantener a largo plazo y a medida que el proyecto crezca.
A su vez, dada la organización de carpetas propuesta por React Native Reusables, hay diferencias respecto a la estructura de carpetas del proyecto de Next.js, pero se mantuvo la misma lógica de organización por casos de uso y Atomic Design.

```
star-wars-expo/
├── app/                        # App Router de Expo Router
├── components/                 # Componentes React organizados por Atomic Design
│   ├── People/                 # Componentes específicos para funcionalidad de personas
│   │   ├── atoms/              # Componentes básicos (botones, inputs, etc.)
│   │   ├── molecules/          # Combinaciones de átomos (tarjetas, formularios)
│   │   └── organisms/          # Componentes complejos (listas, grillas)
│   ├── common/                 # Componentes reutilizables comunes
│   │   ├── atoms/              # Componentes básicos (botones, inputs, etc.)
│   │   ├── molecules/          # Combinaciones de átomos (tarjetas, formularios)
│   │   └── organisms/          # Componentes complejos (listas, grillas)
│   ├── ui/                     # Componentes UI base (React Native Reusables)
├── hooks/                      # Custom hooks de React
├── services/                   # Servicios para comunicación con APIs
├── utils/                      # Funciones utilitarias y helpers
├── lib/                        # Librerías y configuraciones de React Native Reusables
└── ...                         # Archivos de configuración y documentación
```


## Recursos utilizados
- **SWAPI**: https://swapi.info/
- **Expo**: https://expo.dev/
- **React Native Reusables**: https://www.reactnativereusables.com/
- **NativeWind**: https://www.nativewind.dev/
- **Tanstack Query**: https://react-query.tanstack.com/
- **Zod**: https://zod.dev/
- **lucide-react-native**: https://lucide.dev/
- **Jest**: https://jestjs.io/
- **React Native Testing Library**: https://callstack.github.io/react-native-testing-library/
