const config = Bun.file("template.package.json")

await Bun.write('package.json', JSON.stringify({
    ...(await config.json()),
    main: "./src/codepark.ts"
}, null, 2).replaceAll("./src/codepark.js", "./src/codepark.ts"))

Bun.write('tsconfig.json', JSON.stringify(
    {
        "compilerOptions": {
            "lib": ["ES2022", "dom", "dom.iterable", "webworker"],
            "target": "ES2022",
            "module": "ES2022",
            "moduleDetection": "force",
            "jsx": "react",
            "allowJs": true,
            "moduleResolution": "bundler",
            "allowImportingTsExtensions": true,
            "verbatimModuleSyntax": true,
            "noEmit": true,
            "skipLibCheck": true,
            "strict": true,
            "noFallthroughCasesInSwitch": true,
            "forceConsistentCasingInFileNames": true
        }
    },
    null, 2
))

await Bun.write('.env.local', await Bun.file('.env.example').text())

await Bun.$`rm -rf template.package.json`.text()
await Bun.$`rm -rf .env.example`.text()
await Bun.$`rm -rf scripts`.text()
