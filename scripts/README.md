# generator.ts

This script is used to generate the license TypeScript files. Each license is represented by a TypeScript file in the `data` directory. The content comes from the open source project "choosealicense.com", the source code can be found on GitHub at [https://github.com/github/choosealicense.com](https://github.com/github/choosealicense.com).

## Usage

Copy over the files from the choosealicense.com directory.

```
$ cp choosealicense.com/_licenses/* license-files/
```

Then run the script on every file.

```bash
for f in $(ls license-files); do deno run --allow-read --allow-write --unstable generator.ts license-files/$f; done
```

The generated files will be placed in `../data`.