import * as Licenses from "../data/mod.ts";

export function list_help(): string {
  return `USAGE: license list [help|-help|--help]

List all available licenses in the format "name (code)"

ARGUMENTS:
help, -help, --help     show this help message
  `;
}

export function list() {
  for (var k in Object.values(Licenses)) {
    let license: License = Object.values(Licenses)[k];
    let title = license.title;
    let spdx_id = license["spdx-id"];
    console.log(`${title} (${spdx_id})`);
  }
}
