import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('lexml-eta-help')
export class HelpComponent extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    .lx-eta-helpbtn {
      background-color: #ffffff;
      color: black;
      width: 26px;
      height: 22px;
      font-size: 1.1em;
      font-weight: bold;
      vertical-align: middle;
      border: none;
      cursor: pointer;
      text-align: center;
    }

    .lx-eta-help-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: #f9f9f9;
      box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 1;
    }

    .lx-eta-help-content div {
      color: black;
      padding: 2px 5px;
      text-decoration: none;
      display: block;
      white-space: nowrap;
      font-size: 0.8em;
      font-weight: normal !important;
      text-align: left;
    }

    .lx-eta-help:hover .lx-eta-help-content {
      display: block;
    }
  `;

  render(): TemplateResult {
    return html`
      <div class="lx-eta-help">
        <button class="lx-eta-helpbtn">&quest;</button>
        <div class="lx-eta-help-content">
          <div><b>tab</b>&nbsp;-&nbsp;Vai para o próximo dispositivo</div>
          <div><b>shift-tab</b>&nbsp;-&nbsp;Vai para o dispositivo anterior</div>
          <div><b>ctrl-home</b>&nbsp;-&nbsp;Vai para o primeiro dispositivo</div>
          <div><b>ctrl-end</b>&nbsp;-&nbsp;Vai para o último dispositivo</div>
          <div><b>enter</b>&nbsp;-&nbsp;Finaliza a edição do dispositivo atual e cria um novo</div>
          <div><b>ctrl-d</b>&nbsp;-&nbsp;Remove dispositivo atual</div>
          <div><b>ctrl-z</b>&nbsp;-&nbsp;Desfaz ultima alteração</div>
          <div><b>ctrl-y</b>&nbsp;-&nbsp;Refaz alteração</div>
          <div><b>ctrl-a</b>&nbsp;-&nbsp;Seleciona todos os dispositivos da articulação</div>
          <div><b>ctrl-shift-a</b>&nbsp;-&nbsp;Seleciona o texto do dispositivo atual</div>
        </div>
      </div>
    `;
  }
}
