export const isVideo = (file: any) => file instanceof File && file.type.includes('video');

export const isAudio = (file: any) => file instanceof File && file.type.includes('audio');

export const play = (file: File, player: HTMLMediaElement) => {
  // 创建一个指向文件的URL
  const fileURL = URL.createObjectURL(file);

  // 将URL设置为元素的源
  player.src = fileURL;

  // 加载并播放
  player.load();
  player.play();
};

export const loadAudioBuffer = async (file: File): Promise<AudioBuffer> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target && event.target.result;
      if (arrayBuffer === null) {
        console.log(event);
        reject('LoadFile arrayBuffer is empty');
        return;
      }
      if (typeof arrayBuffer === 'string') {
        console.log(event);
        reject('LoadFile arrayBuffer is string');
        return;
      }

      const audioCtx = new AudioContext();
      audioCtx.decodeAudioData(arrayBuffer, (audioBuffer) => resolve(audioBuffer));
    };
    reader.readAsArrayBuffer(file);
  });
