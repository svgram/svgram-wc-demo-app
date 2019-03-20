import '@svgram/svgram-wc-core'; // the webcomponent
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
