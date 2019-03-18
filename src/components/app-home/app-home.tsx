import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Which WebComponent do you want to test?
        </p>

        <stencil-route-link url='/wccoredemo/wc-core-demo'>
          <button>
            WC Core Demo page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
