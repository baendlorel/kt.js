import { dialog, useYuka, Yuka } from '@/yuka';
import { isAudio, isVideo, loadAudioBuffer, play, audioBufferToWav } from '@/media-handler';
import { audioPlayer, videoPlayer } from '../players';
import { languageOptions } from './language-options';
import style from './style.css?raw';

const { css, h } = useYuka();

css(style);

let fileInput: Yuka<HTMLInputElement>;
let fileLabel: Yuka<HTMLLabelElement>;

let audioForm: Yuka<HTMLFormElement>;

const comp = h('div', 'form-wrapper').append(
  (audioForm = h('form', {
    id: 'audio-form',
    method: 'POST',
    action: '/was/asr',
    enctype: 'multipart/form-data',
  }).append(
    h('div', 'basic-options-wrapper').append(
      h(
        'label',
        { for: 'audio_file' },
        {
          zh: '音视频',
          en: 'Media',
        }
      ),
      h('div').append(
        h(
          'button',
          { id: 'file-selector', type: 'button', onclick: () => fileInput.el.click() },
          {
            zh: '选择文件',
            en: 'Choose File',
          }
        ),
        (fileLabel = h('label', { id: 'file-label', style: 'margin-left: 5px' })),
        (fileInput = h('input', {
          id: 'audio_file',
          type: 'file',
          name: 'audio_file',
          style: 'display: none; width:0px; height:0px;',
        }))
      ),
      h(
        'label',
        { for: 'output' },
        {
          zh: '输出格式',
          en: 'Output',
        }
      ),
      h('select', { id: 'output', name: 'output' }).append(
        h('option', { value: 'text' }, { zh: '文本', en: 'Text' }),
        h('option', { value: 'json' }, { zh: 'JSON', en: 'JSON' }),
        h('option', { value: 'vtt' }, { zh: 'VTT', en: 'VTT' }),
        h('option', { value: 'srt', selected: true }, { zh: 'SRT', en: 'SRT' }),
        h('option', { value: 'tsv' }, { zh: 'TSV', en: 'TSV' })
      )
    ),
    h('h4', undefined, { zh: '以下都推荐默认设置', en: 'We suggest not to change options below' }),
    h('div', 'advanced-options-wrapper').append(
      h('div', 'col-half').append(
        h(
          'label',
          { for: 'task' },
          {
            zh: '任务',
            en: 'Task',
          }
        ),
        h('select', { id: 'task', name: 'task' }).append(
          h(
            'option',
            { value: 'transcribe', selected: true },
            { zh: '转录为文本/字幕', en: 'transcribe' }
          ),
          h('option', { value: 'translate' }, { zh: '翻译（仅能译为英文）', en: 'translate' })
        )
      ),
      h('div', 'col-half').append(
        h('label', { for: 'language' }, { zh: '语言选择', en: 'Language' }),
        h('select', { id: 'language', name: 'language' }).append(
          h('option', { value: '', selected: true }, { zh: '自动检测', en: 'auto detect' }),
          ...languageOptions.map((o) => h('option', { value: o.value }, o.label))
        )
      ),
      h('div', 'col-half').append(
        h('label', { for: 'encode' }, { zh: '编码音频', en: 'Encode' }),
        h('select', { id: 'encode', name: 'encode' }).append(
          h('option', { value: 'true', selected: true }, { zh: '是（默认）', en: 'true' }),
          h('option', { value: 'false' }, { zh: '否', en: 'false' })
        )
      ),
      h('div', 'col-half').append(
        h('label', { for: 'word_timestamps' }, { zh: '字词级时间戳', en: 'Word Timestamps' }),
        h('select', { id: 'word_timestamps', name: 'word_timestamps' }).append(
          h('option', { value: 'true' }, { zh: '是', en: 'true' }),
          h('option', { value: 'false', selected: true }, { zh: '否（默认）', en: 'false' })
        )
      )
    ),
    h('button', { class: 'execute', type: 'submit' }, { zh: '提交', en: 'Submit' })
  ))
);

let isConvertingToAudioFile = false;
let audioFile: File | null = null;

fileInput.on('change', () => {
  fileInput.disabled = true;
  const file = fileInput.files && fileInput.files[0];

  if (!file) {
    console.log('未选择文件');
    fileInput.disabled = false;
    return;
  }

  // 设置label里的文件名
  fileLabel.text = file.name;

  // 预览
  audioPlayer.style.display = 'none';
  videoPlayer.style.display = 'none';
  audioPlayer.el.pause();
  videoPlayer.el.pause();

  if (isAudio(file)) {
    audioPlayer.el.style.display = '';
    audioFile = file;
    play(file, audioPlayer.el);
    fileInput.disabled = false;
  }

  if (isVideo(file)) {
    videoPlayer.el.style.display = '';
    play(file, videoPlayer.el);
    isConvertingToAudioFile = true;

    let percentage = 0;

    const progress = dialog.progress(() => percentage, {
      progressLabel: { zh: '提取音频中', en: 'Extracting audio' },
    });

    const loader = loadAudioBuffer(file).then((ab) =>
      audioBufferToWav(ab, (p) => (percentage = p))
    );

    Promise.all([progress, loader])
      .then(([, file]) => {
        audioFile = file;
        isConvertingToAudioFile = false;
        dialog
          .confirm(
            { zh: '下载音频吗？', en: 'Download audio?' },
            {
              yesText: { zh: '下载', en: 'Download' },
              noText: { zh: '不需要，谢谢', en: 'No thanks' },
            }
          )
          .then((yes) => {
            if (yes) {
              const link = document.createElement('a');
              const url = URL.createObjectURL(file);
              link.href = url;
              link.download = file.name;
              link.click();
              // 释放 URL 对象，避免内存泄漏
              URL.revokeObjectURL(url);
              link.remove();
            }
          });
      })
      .finally(() => {
        fileInput.disabled = false;
      });
  }
});

const downloadSubtitle = (formData: FormData, subtitle: string) => {
  if (typeof subtitle !== 'string') {
    throw new Error('subtitle must be a string');
  }
  const audioFile = formData.get('audio_file');
  if (audioFile instanceof File === false) {
    throw new Error('audioFile must be a file');
  }

  const suffix = ((v) => (v === null || v === 'text' ? 'txt' : v))(formData.get('output'));

  const file = new File([subtitle], audioFile.name.replace(/.[^.]+$/g, '.' + suffix), {
    type: 'text/plain',
  });

  const link = document.createElement('a');
  const url = URL.createObjectURL(file);
  link.href = url;
  link.download = file.name;

  link.click();

  // 释放 URL 对象，避免内存泄漏
  URL.revokeObjectURL(url);

  link.remove();
};

audioForm.on('submit', (event) => {
  event.preventDefault(); // 阻止默认提交（防止页面刷新）

  if (!isAudio(audioFile)) {
    dialog.alert({ zh: '不是音视频文件', en: 'Not an audio file!' });
    return;
  }

  if (isConvertingToAudioFile) {
    dialog.alert({ zh: '还在转换中，请稍后提交', en: 'Still converting! Please try again later.' });
    return;
  }

  const form = audioForm.el;
  const formData = new FormData(audioForm.el); // 创建 FormData 对象，自动收集表单数据
  formData.set('audio_file', audioFile as Blob);

  const url = new URL(form.action);

  // 接口的参数都得写在param上，body只留一个file
  formData.forEach((v, k) => {
    if (typeof v === 'string') {
      url.searchParams.append(k, v);
    }
  });

  const resp = fetch(url, {
    method: form.method,
    body: formData,
  }).then((response) => response.text()); // 解析服务器返回的数据

  resp.catch((error) => console.error('Error:', error));

  dialog
    .wait('', resp, {
      countDownText(timePast: number) {
        const t = (timePast / 1000).toFixed(3);
        return {
          zh: `处理中，请稍候...已经过${t}秒`,
          en: `Processing, please wait...${t}s passed`,
        };
      },
    })
    .then((ms) =>
      dialog
        .alert(
          {
            zh: `处理完成！耗时${ms / 1000}秒`,
            en: `Request completed! Total time use: ${ms / 1000}s`,
          },
          { yesText: { zh: '下载字幕', en: 'Download Subtitle' } }
        )
        .then(() => resp.then((text) => downloadSubtitle(formData, text)))
    );
});

export default comp;
