### Setup

Clone this repo inside your `.bun-create` directory, usually it's located at `~/.bun-create`. If you don't have a `.bun-create` folder yet, create one by running

```sh
mkdir -p ~/.bun-create
```

#### Note:

> It's possible to change the location of the `.bun-create` folder by setting the `BUN_CREATE_DIR` environment variable. [Bun create from local template](https://bun.sh/docs/cli/bun-create#from-a-local-template)

### Usage

By running `bun create codepark-workspace <project-name>`, you can create a new project, example:

```sh
bun create codepark-workspace project-name
```

#### Output:

```
- /src/codepark.js
- /package.json
- /bunfig.toml
- /.env.local
```

### Usage with ts

Use `--ts` to name the project to use TypeScript instead of JavaScript.

```sh
bun create codepark-workspace project-name--ts
```
