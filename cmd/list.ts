import * as Licenses from "../data/mod.ts";

import { display_license } from "./info.ts";

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
    display_license(license, true);
  }
}
