
if (Bun.argv[1].includes('--ts')) {
    await Bun.$`mv src/codepark.js src/codepark.ts`.text()
}

await Bun.$`rm README.md`.text()
