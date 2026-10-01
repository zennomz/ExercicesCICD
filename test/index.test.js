const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { test } = require('node:test');

test('la page source contient le titre du projet', async () => {
  const page = await readFile(path.join(__dirname, '..', 'src', 'index.html'), 'utf8');

  assert.match(page, /<title>Mon projet CI\/CD<\/title>/);
});