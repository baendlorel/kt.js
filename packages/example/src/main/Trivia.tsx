import { css } from '@emotion/css';
import ktLogo from '../../assets/icon.svg';
import tsumugiLogo from '../../assets/tsumugi_logo.png';
import tsumugiMofuMofu from '../../assets/tsumugi_mofumofu.png';

export function Trivia() {
  const height = '120px';
  const KTStyle = 'font-weight:bold;color:#007acc;font-size:1.5rem;';
  const mofumofu = css`
    &::after {
      content: 'illust: もふもふさん';
      position: absolute;
      bottom: 10px;
      margin-left: -125px;
      font-size: 0.9rem;
    }
  `;

  const ktjs = () => (
    <span
      class={css`
        color: #212527;
        /* background-color: #dec18f; */
        /* padding: 2px 10px; */
        /* margin: 0px 5px; */
        /* border-radius: 11px; */
        font-weight: bold;
      `}
    >
      kt.js
    </span>
  );

  return (
    <div className="demo-section" style="font-size:1.1rem">
      <div style=" display:flex; gap:20px; margin-bottom: 40px;">
        <div style="flex:1"></div>
        <img src={ktLogo} height={height} />
        <a href="https://voicevox.hiroshiba.jp/product/kasukabe_tsumugi/" target="_blank">
          <img src={tsumugiLogo} height={height} style="margin-top: 2px;" />
        </a>
        <div style="flex:1"></div>
      </div>
      <div style="display:flex;gap:40px">
        <div class={mofumofu}>
          <a href="https://x.com/mofu2_san" target="_blank" title="Visit もふもふさん's X">
            <img src={tsumugiMofuMofu} height="400px" />
          </a>
        </div>
        <div>
          <p>
            {ktjs()} is named after
            <a href="https://x.com/KasukabeTsumugi" target="_blank" style="color:#212527">
              <span style={KTStyle}>K</span>asukabe
              <span style={KTStyle}>T</span>sumugi (春日部つむぎ)
            </a>
            , A gyaru from Saitama. She is also the cousin of VTuber{' '}
            <a href="https://x.com/kasukaBe_nyoki" target="_blank">
              Kasukabe Tsukushi (春日部つくし)
            </a>
          </p>
          <p>
            {ktjs()} was created with a straightforward goal: Create elements rapidly Manipulate the DOM directly
            Achieve maximum and precise control.
          </p>
          <p>
            It intentionally avoids excessive abstraction, allowing developers to fully understand every node creation
            and modification.
          </p>
          <p>
            At the same time, careful attention is given to compatibility details, making it easier and more reliable to
            support <strong>IE11</strong> across both modern and legacy environments.
          </p>
          <p>{ktjs()} does not aim to hide complexity — it aims to master it.</p>
        </div>
      </div>
    </div>
  );
}
