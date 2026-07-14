import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');

mkdirSync(join(dist, 'server'), { recursive: true });
mkdirSync(join(dist, '.openai'), { recursive: true });

copyFileSync(join(root, '.openai', 'hosting.json'), join(dist, '.openai', 'hosting.json'));

writeFileSync(
  join(dist, 'server', 'index.js'),
  `import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../client', import.meta.url));
const port = Number(process.env.PORT || 3000);

const types = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
};

function resolveAsset(url) {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname);
  const clean = normalize(pathname).replace(/^(\\.\\.[/\\\\])+/, '');
  const candidate = join(root, clean);
  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }
  return join(root, 'index.html');
}

createServer((request, response) => {
  const file = resolveAsset(request.url || '/');
  response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
  createReadStream(file).pipe(response);
}).listen(port);
`
);
