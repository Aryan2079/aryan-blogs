// Flips `draft: true` to `draft: false` for posts whose frontmatter date has arrived.
// Run daily by .github/workflows/publish-scheduled.yml. Exits 0 and prints the files it changed.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = 'data/blog'
const today = new Date().toISOString().slice(0, 10)
let changed = 0

for (const name of readdirSync(dir).filter((f) => f.endsWith('.mdx'))) {
  const path = join(dir, name)
  const text = readFileSync(path, 'utf8')
  const date = text.match(/^date:\s*'?(\d{4}-\d{2}-\d{2})'?/m)?.[1]
  if (!date || date > today || !/^draft:\s*true\s*$/m.test(text)) continue
  writeFileSync(path, text.replace(/^draft:\s*true\s*$/m, 'draft: false'))
  console.log(`published ${name} (${date})`)
  changed++
}
console.log(`${changed} post(s) published for ${today}`)
