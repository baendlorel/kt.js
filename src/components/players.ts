import { useYuka, Yuka } from '@/yuka';

const { h } = useYuka();

let videoPlayer: Yuka<HTMLVideoElement>;
let audioPlayer: Yuka<HTMLAudioElement>;

export default h('div', { class: 'player-wrapper' }).append(
  (videoPlayer = h('video', {
    id: 'video-player',
    controls: 'controls',
    style: 'display: none; width:100%;',
  })),
  (audioPlayer = h('audio', {
    id: 'audio-player',
    controls: 'controls',
    style: 'display: none; width:100%;',
  }))
);

export { videoPlayer, audioPlayer };
