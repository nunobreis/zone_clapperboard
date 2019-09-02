# Zone Digital frontend challenge - Nuno Reis solution

## 1. Brief Summary
The current project is a proposal for solving the frontend challenge presented by Zone Digital. Considering the given problem and purpose of the challenge I decided to follow an Atomic Design Structure (know more about Brad Frost's approach [here](http://atomicdesign.bradfrost.com/)).

Following this approach my comoponets are divided in: **atoms**, **molecules** and **organisms** (from the simplest forms to more complex compositions). Then I use **templates** to define the layout of a view and finally a **page** that renders the whole composition.

I have created stories through **Storybook** that render each component in isolation proving that they can stand by themselves and hence be re-used anywhere.

The components handle everything that is presentational. Following [Dan Abramov's approach](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) for component composition (presentation components vs container components) I created containers that don't care about styles/presentation but know about the **Redux Store** and thus handle all logic within the app.

### CSS-IN-JS:

I chose to go with a CSS-IN-JS approach with **Styled-Components** for the following reasons:

- My code is less polluted, no class names, no ids, no style tags.
- No margin for leaking styles out of their intention as the styles are the component itself;
- Provides dynamic rendering and solves most of the CSS limitations that other pre-compiler like SASS / LESS try to but in a more elegant / maintainable way than pre-compilers.
- A more isomorphic code. Opposite to the pre-compilers approach, you don't have to introduce another language (that browsers don't know about) and compile those into vanilla CSS. With styled components there is no need for after-compilation / build.
- CSS-in-JS helps to avoid non-deterministic source order specificity.
- A better development experience: CSS-in-JS gives the developer more expressiveness while encouraging more maintainable patterns than cascading.
- Styled Components gives developers API to describe state-based styles in a better way than using a bunch of conditional class names.
- This approach also helps with removing dead code.

## 2. Get the project up and running
To get this project up and running in your machine I will assume you have [NodeJS](https://nodejs.org/en/) already installed.

Just go to the [project repo](https://github.com/nunobreis/) and fork the project into your machine.

### Install Dependenies

In the project root install dependencies by running:

```
npm install
```

### Run Storybook

To run Storybook server just run the script:

```
npm run storybook
```

If you would like to make a Storybook build just run:

```
npm run storybook-build
```

### Run the project
To run a dev server and see the project, run the following script:

```
npm run dev-server
```

If you want to build the project, just use the script:

```
npm run build
```

## 3. Future considerations

As a retroespective on this development sprint I would like to make some considerations for future contributions to this project.

With a bit more time there are issues that could have been tackled in a different fashion for scalability reasons. For instance:

- To handle asynchronous calls to the mock API I've used Redux Thunk as a middleware. Maybe in the future as the app grows, other more powerful middlewares systems could be considered to handle complex asyncrhonous functionality like authentication. For this reason maybe a future re-factor would be to change Redux Thunk to Redux Sagas.
- Another consideration would be to integrate a testing system quite possibly using: Jest and enzyme. As of now Storybook makes a great job in proving that each component renders in isolation. Although the full functionality and logic lack testing to proof that the app works as expected and to capture potential bugs.
- GraphQL with ApolloClient would be a consideration to put on the table as this would benefit the apps performance as the movie requests grow.
