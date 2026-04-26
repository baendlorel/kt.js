import fs from 'node:fs';
import path from 'node:path';
import { dtm, type CommonPackageJson } from './utils.js';

export const loadTemplate = (json: CommonPackageJson) => {
  const text = fs.readFileSync(path.join(import.meta.dirname, 'comment-template.md'), 'utf-8');
  const __YEAR__ = new Date().getFullYear();
  const __NAME__ = json.name;
  const __AUTHOR__ = json.author.name;
  const __EMAIL__ = json.author.email;
  const __VERSION__ = json.version;
  const __LICENSE__ = json.license;
  const __REPOSITORY_URL__ = json.repository.url;
  const __DESCRIPTION__ = json.description.replace(/\n/g, '\n * \n * ');
  const __LAST_UPDATE__ = dtm();

  return text
    .replace(/__YEAR__/g, String(__YEAR__))
    .replace(/__NAME__/g, __NAME__)
    .replace(/__AUTHOR__/g, __AUTHOR__)
    .replace(/__EMAIL__/g, __EMAIL__)
    .replace(/__VERSION__/g, __VERSION__)
    .replace(/__LICENSE__/g, __LICENSE__)
    .replace(/__REPOSITORY_URL__/g, __REPOSITORY_URL__)
    .replace(/__DESCRIPTION__/g, __DESCRIPTION__)
    .replace(/__LAST_UPDATE__/g, __LAST_UPDATE__);
};
