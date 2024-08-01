import Quill from './core.js';
import type {
  Bounds,
  DebugLevel,
  EmitterSource,
  ExpandedQuillOptions,
  QuillOptions,
} from './core.js';

import { FontClass } from './formats/font.js';

import Bold from './formats/bold.js';
import Italic from './formats/italic.js';
import Underline from './formats/underline.js';
import Highlight from './formats/highlight.js';
import CodeBlock from './formats/code.js';
import Syntax from './modules/syntax.js';
import Toolbar from './modules/toolbar.js';
import Icons from './ui/icons.js';
import Tooltip from './ui/tooltip.js';
import SnowTheme from './themes/snow.js';

Quill.register(
  {
    'formats/font': FontClass,
    'formats/code-block': CodeBlock,
    'formats/bold': Bold,
    'formats/italic': Italic,
    'formats/underline': Underline,
    'formats/highlight': Highlight,
    'modules/syntax': Syntax,
    'modules/toolbar': Toolbar,
    'themes/snow': SnowTheme,
    'ui/icons': Icons,
    'ui/tooltip': Tooltip,
  },
  true,
);

export {
  AttributeMap,
  Delta,
  Module,
  Op,
  OpIterator,
  Parchment,
  Range,
} from './core.js';
export type {
  Bounds,
  DebugLevel,
  EmitterSource,
  ExpandedQuillOptions,
  QuillOptions,
};

export default Quill;
