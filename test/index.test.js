const assert = require('node:assert/strict');
const { existsSync } = require('node:fs');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { test } = require('node:test');

test('la page testée contient le titre du projet', async () => {
  const projectRoot = path.join(__dirname, '..');
  const buildPath = path.join(projectRoot, 'dist', 'index.html');
  const pagePath = existsSync(buildPath)
    ? buildPath
    : path.join(projectRoot, 'src', 'index.html');
  const page = await readFile(pagePath, 'utf8');

  assert.match(page, /<title>Mon projet CI\/CD<\/title>/);
});