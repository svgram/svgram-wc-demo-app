# SVGram WebComponent Demo App

## Prepare a page for hosting a webcomponent

* Copy /src/components/app-profile to /src/components/app-wc-core-demo
* In all files in /app-wc-core-demo/ search-replace from app-profile
* In /src/components/app-root/app-root.tsx add a route to the new page:
```typescript
              <stencil-route url='/wccoredemo/:name' component='app-wc-core-demo' />
```
* In /src/components/app-home/app-home.tsx rename link-button to the new page:
```typescript
        <stencil-route-link url='/wccoredemo/wc-core-demo'>
```

```bash
# install StencilJs
npm install
# install webcomponent
npm install @svgram/svgram-wc-core --save
```

* In /src/components/app-wc-core-demo/app-wc-core-demo.tsx 
```typescript
// Import component - instead of loading it via <script> in index.html
import '@svgram/svgram-wc-core'; // the webcomponent

@Component({
  tag: 'app-wc-core-demo',
  styleUrl: 'app-wc-core-demo.css',
  shadow: true
})
export class AppWcCoreDemo {
  @Prop() match: MatchResults;

  private setSv5Shapes(){
    // create some data to present in the component
    let container =  {
    shapes: [{ "x": "100px", "y": "10px", "width": "80px", "heigth": "70px", "stroke": "red", "fill": "green"},
    { "x": "200px", "y": "10px", "width": "70px", "heigth": "60px", "stroke": "blue", "fill": "brown"}]
    };
    return JSON.stringify(container);  
  };  

  render() {
    return (
      <div class="app-wc-core-demo">
        <svgram-canvas id="canvas" first="Sv5" last="Canvas" content={this.setSv5Shapes()} ></svgram-canvas>
      </div>
    );
  }
}
```

```bash
# run the app in a browser
npm start
```

---

From template:

# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
