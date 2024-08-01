// import DevelopersIcon from '../svg/features/developers.svg';
// import ScaleIcon from '../svg/features/scale.svg';
// import GitHub from '../components/GitHub';
// import CrossPlatformIcon from '../svg/features/cross-platform.svg';
import Layout from '../components/Layout';
import { useEffect, useRef, useState } from 'react';
import Editor from '../components/Editor';
import classNames from 'classnames';
import Link from 'next/link';
import NoSSR, { withoutSSR } from '../components/NoSSR';

// import LinkedInLogo from '../svg/users/linkedin.svg';
// import MicrosoftLogo from '../svg/users/microsoft.svg';
// import SalesforceLogo from '../svg/users/salesforce.svg';
// import ZoomLogo from '../svg/users/zoom.svg';
// import AirtableLogo from '../svg/users/airtable.svg';
// import FigmaLogo from '../svg/users/figma.svg';
// import MiroLogo from '../svg/users/miro.svg';
// import SlackLogo from '../svg/users/slack.svg';
// import CalendlyLogo from '../svg/users/calendly.svg';
// import FrontLogo from '../svg/users/front.svg';
// import GrammarlyLogo from '../svg/users/grammarly.svg';
// import VoxMediaLogo from '../svg/users/vox-media.svg';
// import ApolloLogo from '../svg/users/apollo.svg';
// import GemLogo from '../svg/users/gem.svg';
// import ModeLogo from '../svg/users/mode.svg';
// import TypeformLogo from '../svg/users/typeform.svg';
// import SlabLogo from '../svg/users/slab.svg';

const fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];

const Content = () => {
  const cdn = process.env.cdn;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: /*html*/`
            <p><span style="background-color: rgb(255, 255, 0);">QYSIWYG</span></p>
            <p><br></p>
            <p>Link: <a href="https://github.com/slab/quill/">https://google.com/</a> </p>
            <p><br></p>
            <p>Formatting: </p>
            <strong>Bold</strong>
            <p><br></p>
            <u>Underlined</u>
            <p><br></p>
            <i>Italicized</i>
            <p><br></p>
            <p><br></p>
            <p>Jorem ipsum dolor amet, consectetur  amet new lomus. Jorem ipsum dolor amet, consectetur  
            amet, consectetur adipiscing. Jorem ipsum dolor amet, consectetur imi amet, consectetur 
            adipiscing. Jorem ipsum dolor. amet, consectetur adipiscing... Jorem ipsum dolor amet, consectetur 
            amet, consectetur. Jorem ipsum dolor amet, Jorem ipsum dolor amet, consectetur 
            amet new lomus. Jorem ipsum dolor amet, consectetur  amet, consectetur adipiscing. Jorem ipsum dolor amet,
             consectetur imi amet, consectetur adipiscing. 
             </p>
             <p><br></p>
             <p>Jorem ipsum dolor. amet, consectetur adipiscing... 
             Jorem ipsum dolor amet, consectetur  amet, consectetur. Jorem ipsum dolor amet, 
             Jorem ipsum dolor amet, consectetur  amet new lomus. Jorem ipsum dolor amet, consectetur 
             amet, consectetur adipiscing. Jorem ipsum dolor amet, consectetur imi amet, consectetur 
             adipiscing. Jorem ipsum dolor. amet, consectetur adipiscing... Jorem ipsum dolor amet,
              consectetur  amet, consectetur. Jorem ipsum dolor amet, </p>
            <p><br></p>

<pre data-language="javascript" class="ql-syntax" spellcheck="false">
/**
 * Determines the vertical scroll direction for an option element within its parent container.
 * @returns {number} Vertical option scroll direction.
 *                   -1 indicates the option is above the visible area.
 *                    1 indicates the option is below the visible area.
 *                    0 indicates the option is fully within the visible area.
 */
_getScrollDirection() {
    if (!this.#state.optionElement)
        return 0;

    const childBox = this.#state.optionElement.getBoundingClientRect();
    const parentBox = this.#state.optionElement.parentElement.getBoundingClientRect();
    const overlap = Math.max(
        Math.max(0, parentBox.y - childBox.y),
        Math.max(0, (childBox.y + childBox.height) - (parentBox.y + parentBox.height))
    );

    if (overlap !== 0) {
        this.#state.scrollSpeedPx = clamp(
            overlap / childBox.height * OPTION_SCROLL_MAX_SPEED_PX,
            OPTION_SCROLL_MIN_SPEED_PX,
            OPTION_SCROLL_MAX_SPEED_PX
        );
    }

    return (childBox.y < parentBox.y ? -1 : 0) + (childBox.y + childBox.height > parentBox.y + parentBox.height ? 1 : 0);
}
</pre>`,
      }}
    />
  );
};

const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isDemoActive, setIsDemoActive] = useState(false);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    // @ts-expect-error
    const Font = Quill.import('formats/font');
    Font.whitelist = fonts;
    // @ts-expect-error
    Quill.register(Font, true);

    function loadFonts() {
      window.WebFontConfig = {
        google: {
          families: [
            'Inconsolata::latin',
            'Ubuntu+Mono::latin',
            'Slabo+27px::latin',
            'Roboto+Slab::latin',
          ],
        },
      };
      (function () {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    }

    loadFonts();
  }, []);

  const [quills, setQuills] = useState([]);

  const handleEditorLoad = (index) => (quill) => {
    setQuills((q) => {
      const n = [...q];
      n[index] = quill;
      return n;
    });
  };

  useEffect(() => {
    const quill = quills[activeIndex];
    if (!quill) return;

    window.quill = quill;

    isFirstRenderRef.current = false;
  }, [activeIndex, quills]);

  return (
    <Layout>
      <div
        id="above-container"
        className={classNames({})}
      >
        <div className="container">
          <div id="laptop-container" onClick={() => setIsDemoActive(true)}>
            <NoSSR>
              <div id="demo-container">
                <div
                  id="carousel-container"
                  style={{ marginLeft: `${activeIndex * -100}%` }}
                >
                  <div id="bubble-wrapper">
                    {/* <div id="bubble-container">
                      <Editor
                        config={{
                          bounds: '#bubble-container .ql-container',
                          modules: {
                            syntax: true,
                          },
                          theme: 'bubble',
                        }}
                        onLoad={handleEditorLoad(0)}
                      >
                        <Content />
                      </Editor>
                    </div> */}
                  </div>
                  <div id="snow-wrapper">
                    {/* <div id="snow-container">
                      <div className="toolbar">
                        <span className="ql-formats">
                          <select className="ql-header" defaultValue="3">
                            <option value="1">Heading</option>
                            <option value="2">Subheading</option>
                            <option value="3">Normal</option>
                          </select>
                          <select className="ql-font" defaultValue="sailec">
                            <option value="sailec">Sailec Light</option>
                            <option value="sofia">Sofia Pro</option>
                            <option value="slabo">Slabo 27px</option>
                            <option value="roboto">Roboto Slab</option>
                            <option value="inconsolata">Inconsolata</option>
                            <option value="ubuntu">Ubuntu Mono</option>
                          </select>
                        </span>
                        <span className="ql-formats">
                          <button className="ql-bold"></button>
                          <button className="ql-italic"></button>
                          <button className="ql-underline"></button>
                        </span>
                        <span className="ql-formats">
                          <button className="ql-list" value="ordered"></button>
                          <button className="ql-list" value="bullet"></button>
                          <select className="ql-align" defaultValue="false">
                            <option label="left"></option>
                            <option label="center" value="center"></option>
                            <option label="right" value="right"></option>
                            <option label="justify" value="justify"></option>
                          </select>
                        </span>
                        <span className="ql-formats">
                          <button className="ql-link"></button>
                          <button className="ql-image"></button>
                          <button className="ql-video"></button>
                        </span>
                        <span className="ql-formats">
                          <button className="ql-formula"></button>
                          <button className="ql-code-block"></button>
                        </span>
                        <span className="ql-formats">
                          <button className="ql-clean"></button>
                        </span>
                      </div>
                      <Editor
                        config={{
                          bounds: '#snow-container .ql-container',
                          modules: {
                            syntax: true,
                            toolbar: '#snow-container .toolbar',
                          },
                          theme: 'snow',
                        }}
                        onLoad={handleEditorLoad(1)}
                      >
                        <Content />
                      </Editor>
                    </div> */}
                  </div>
                  <div id="full-wrapper">
                    <div id="full-container">
                      <Editor
                        config={{
                          bounds: '#full-container .ql-container',
                          modules: {
                            syntax: true,
                            toolbar: [
                              // [{ font: fonts }, { size: [] }],
                              [
                                'bold',
                                'italic',
                                'underline',
                                'highlight',
                                // { background: [] },
                                'code-block',
                              ],
                              // [],
                              // // [{ script: 'super' }, { script: 'sub' }],
                              // [
                              //   // { header: '1' },
                              //   // { header: '2' },
                              //   // 'blockquote',
                              //   // 'code-block',
                              //   // 'custom-code',
                              // ],
                              // [
                              //   // { list: 'ordered' },
                              //   // { list: 'bullet' },
                              //   // { indent: '-1' },
                              //   // { indent: '+1' },
                              // ],
                              // [{ direction: 'rtl' }, { align: [] }],
                              // ['link', 'image', 'video', 'formula'],
                              // ['clean'],
                            ],
                          },
                          theme: 'snow',
                        }}
                        onLoad={handleEditorLoad(2)}
                      >
                        <Content />
                      </Editor>
                    </div>
                  </div>
                </div>
              </div>
            </NoSSR>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
