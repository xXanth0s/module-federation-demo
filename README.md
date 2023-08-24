# Module Federation Demo

A simple demo on Microfrontend with Module Federation in React

# Introduction
The home app is the application shell of the demo.
It is the entry point to the application and is responsible for loading the header and component apps.  
The header app is a separate app that only provides the header component.
The component app provides multiple components, but runs on a different version of react than the other two applications.

With module federation, the home app can load the header and component apps at runtime.

## Getting started

In the project directory, run:

> ```
> cd header-app && yarn && yarn start
> cd home-app && yarn && yarn start
> cd component-app && yarn && yarn start
> ```

Open [http://localhost:3000](http://localhost:3000) to view module federated Home App\
Open [http://localhost:3001](http://localhost:3001) to view module federated Header App
Open [http://localhost:3002](http://localhost:3002) to view module federated Components App
