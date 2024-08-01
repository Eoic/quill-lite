import Bold from './bold.js';

class Highlight extends Bold {
  static blotName = 'highlight';
  static tagName = ['SPAN'];

  static create() {
    const element = super.create();
    element.classList.add('ql-highlight');
    return element;
  }
}

export default Highlight;
