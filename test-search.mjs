// smoke test: the exported static index answers real queries
import { readFileSync } from 'node:fs';
import { staticClient } from 'fumadocs-core/search/client/orama-static';

const index = JSON.parse(readFileSync('dist/api/search', 'utf8'));
globalThis.fetch = async () => new Response(JSON.stringify(index));

const client = staticClient({ from: '/api/search' });
for (const term of ['clipboard', 'iommu', 'bluetooth', 'usb redirect']) {
  const hits = await client.search(term);
  console.log(term, '->', hits === 'empty' ? 0 : hits.length, hits === 'empty' ? '' : hits[0].url);
}
