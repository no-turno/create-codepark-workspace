console.log('preinstall', Bun.argv[1].includes('--ts'))


if (Bun.argv[1].includes('--ts')) {
    Bun.$`mv src/codepark.js src/codepark.ts`.text()
}
