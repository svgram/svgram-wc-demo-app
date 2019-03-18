import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-wc-core-demo',
  styleUrl: 'app-wc-core-demo.css',
  shadow: true
})
export class AppWcCoreDemo {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-wc-core-demo">
          <p>
            Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in
            through a route param!
          </p>
        </div>
      );
    }
  }
}
