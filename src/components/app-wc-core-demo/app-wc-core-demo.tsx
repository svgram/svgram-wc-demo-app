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
