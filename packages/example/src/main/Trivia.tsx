import ktLogo from '../../assets/icon.svg';
import tsumugiLogo from '../../assets/tsumugi_logo.png';
import tsumugiMofuMofu from '../../assets/tsumugi_mofumofu.png';

export function Trivia() {
  return (
    <div className="demo-section">
      <div style="display:flex;gap:20px">
        <img src={ktLogo} height="60px" />
        <img src={tsumugiLogo} height="60px" />
      </div>
      kt.js is named after Kasukabe Tsumugi, a second-generation character from VOICEVOX.
      <div style="display:flex;gap:20px">
        <img src={tsumugiMofuMofu} />
        <div>
          The letters K and T are highlighted in bold blue, representing both the initials of the character and the
          project’s clear, direct design philosophy. ktjs was created with a straightforward goal: Create elements
          rapidly Manipulate the DOM directly Achieve maximum and precise control It intentionally avoids excessive
          abstraction, allowing developers to fully understand every node creation and modification. At the same time,
          careful attention is given to compatibility details, making it easier and more reliable to support IE11 across
          both modern and legacy environments. ktjs does not aim to hide complexity — it aims to master it.
        </div>
      </div>
    </div>
  );
}
