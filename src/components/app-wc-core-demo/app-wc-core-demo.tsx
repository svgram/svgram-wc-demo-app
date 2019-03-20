/// <reference types="@svgram/svgram-wc-core" />
// Above ref is needed when @svgram/svgram-wc-core is used in markup instead of as code like 'import  SvgramCanvas'
// It will use the types from /node_modules/@svgram/svgram-wc-core/dist/types/components.d.ts and import them into /src/components.d.ts
import  SvgramCanvas  from '@svgram/svgram-wc-core';
import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-wc-core-demo',
  styleUrl: 'app-wc-core-demo.css',
  shadow: true
})
export class AppWcCoreDemo {
  @Prop() match: MatchResults;

  private setSv5Shapes(){
    let container =  {
    shapes: [{ "x": "100px", "y": "10px", "width": "80px", "heigth": "70px", "stroke": "red", "fill": "green"},
    { "x": "200px", "y": "10px", "width": "70px", "heigth": "60px", "stroke": "blue", "fill": "brown"}]
    };
    let containerJson = JSON.stringify(container);
    console.log(containerJson);
    return containerJson;  
  };  

  render() {
    // Using SvgramCanvas imports types into /src/components.d.ts - this loads the component
    // In that way we don't have to put it in script in index.html
    const tmp: SvgramCanvas.Components.SvgramCanvas = null;
    // Use temp, so compiler is happy
    console.log(tmp);

    return (
      <div class="app-wc-core-demo">
        {(this.match && this.match.params.name)
          ?<p>
            Hello! My name is {this.match.params.name}. My name was passed in
            through a route param!
          </p>
          : <span></span>
        }
        <svgram-canvas id="canvas" first="Sv5" last="Canvas" content={this.setSv5Shapes()} ></svgram-canvas>
      </div>
    );
  }
}
