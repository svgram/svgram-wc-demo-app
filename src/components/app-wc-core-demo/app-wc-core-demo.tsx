/// <reference types="@svgram/svgram-wc-core" />
// Above ref is needed when @svgram/svgram-wc-core is used in markup instead of as code like
// import  SvgramCanvas  from '@svgram/svgram-wc-core';
// It will use the types from /node_modules/@svgram/svgram-wc-core/dist/types/components.d.ts and import them into /src/components.d.ts
import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-wc-core-demo',
  styleUrl: 'app-wc-core-demo.css',
  shadow: true
})
export class AppWcCoreDemo {
  @Prop() match: MatchResults;

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
        <p>hi</p>
      </div>
    );
  }
}
