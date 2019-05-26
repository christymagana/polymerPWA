import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MyView4 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Would You Like to Learn More?</h2>

        <p>
          This page can be used to provide more information about the topic of the site or
          for whatever desired
        </p>

        <p>
          After you are done looking through this page and the entire site, you can head back to the
          <a href="/">home</a> page
        </p>
      </section>
    `
  }
}
window.customElements.define('my-view4', MyView4);