export function containsTags(text: string): boolean {
  const matches = /<.+>/g.exec(text.trim());
  return matches !== null;
}

export function endsWithPunctuation(texto: string): boolean {
  return texto.match('[.,:]$') !== null;
}

export function isValidHTML(html: string): boolean {
  const doc = document.createElement('div');
  doc.innerHTML = html;
  return doc.innerHTML === html;
}

export function isHTMLParagraph(html: string): boolean {
  return html.trim() !== '' && html.trim().startsWith('<p>') && html.trim().endsWith('</p>');
}

export function isValidHtmlParagraph(html: string): boolean {
  return isHTMLParagraph(html) && isValidHTML(html);
}

export function getLastCharacter(texto: string): string {
  const soTexto = texto.replace(/(<([^>]+)>)/gi, '').trim();
  return soTexto.length > 0 ? soTexto.charAt(soTexto.length - 1) : '';
}

export function endsWithWord(texto: string, indicadores: string[]): boolean {
  return indicadores.map(word => new RegExp('\\' + word + '$').test(texto)).filter(r => r)[0] === true;
}

export function converteIndicadorParaTexto(indicadores: string[]): string {
  switch (indicadores[0].trim()) {
    case '.':
      return 'ponto';
    case ':':
      return 'dois pontos';
    case ';':
      return 'ponto e vírgula';
    case ',':
      return 'vírgula';
    default:
      return indicadores[0].trim();
  }
}
