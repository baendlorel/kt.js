const zh = {};

const en: typeof zh = {};

export const dict = window.location.href.includes('en-US') ? en : zh;
