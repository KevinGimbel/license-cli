import * as Licenses from "../data/mod.ts";

export function info_help(): string {
  return `USAGE: license info <code> [help|-help|--help]

Get more information on a specific license

ARGUMENTS:
    <code>                  license code, e.g. "license info mit" or
                            "license apache", "license info gpl"
                            works with a "best match" so may return 
                            multiple licenses
    help, -help, --help     show this help message
  `;
}

export function info(name: string) {
  let lowercase_code: string = name.toLowerCase();

  for (let k in Object.values(Licenses)) {
    let license: License = Object.values(Licenses)[k];
    let spdx_id = license["spdx-id"];

    if (spdx_id.toLowerCase().indexOf(lowercase_code) >= 0) {
      display_license(license);
    }
  }
}

export function display_license(license: License, short?: boolean) {
  let title = license.title;
  let spdx_id = license["spdx-id"];
  if (short) {
    console.log(`${title} (${spdx_id})`);
  } else {
    console.log("========================================");
    console.log(`${title} (${spdx_id})`);
    console.log(`Description:\n${license.description}`);
    console.log("");
    console.log(`Conditions:  ${license.conditions.join(", ")}`);
    console.log(`Limitations: ${license.limitations.join(", ")}`);
    console.log(`Permissions: ${license.permissions.join(", ")}`);
    if (license.using) {
      console.log("\nUsed by (selection):");
      for (let index in license.using) {
        let user = Object.keys(license.using[index]);
        let source = Object.values(license.using[index]);
        console.log(`             ${user} - ${source}`);
      }
    }
    console.log("");
    console.log("");
  }
}
