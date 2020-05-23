#!/usr/bin/env -S deno run -q --unstable --allow-read=. --allow-write=../data
import { load } from "https://deno.land/x/js_yaml_port@3.14.0/js-yaml.js";
import {
  readFileStr,
  writeFileStr,
} from "https://deno.land/std@0.51.0/fs/mod.ts";
import { basename } from "https://deno.land/std@0.52.0/path/mod.ts";
import { License } from "../data/types.ts";

async function convert_license_file_to_json(filename: string) {
  let license_as_obj: License = {
    title: "",
    "spdx-id": "",
    description: "",
    how: "",
    using: [""],
    permissions: [""],
    conditions: [""],
    limitations: [""],
    text: "",
  };
  let file = await readFileStr(filename);
  let front_matter = file.match(/^---[\s\S]+?---/i)?.toString();
  let license_text = file.split("---")[2];

  if (front_matter) {
    license_as_obj = {
      text: license_text.toString(),
      ...load(front_matter.substr(0, front_matter.length - 3)),
    };
    // license_as_obj.text = license_text.toString();
  }

  await write_ts_file(filename, license_as_obj);
}

function filename_to_variable_name(filepath: string): string {
  let filename = basename(filepath).replace(".txt", "");
  if (parseInt(filename[0]) >= 0) {
    filename = "_" + filename;
  }
  return filename.replace(/\./g, "_").replace(/-/g, "_").replace(".txt", "");
}

async function write_ts_file(filename: string, data: object) {
  let license_name_upper = filename_to_variable_name(filename).toUpperCase();
  let content = `
// This file is auto generated. See scripts/generator.ts
import { License } from './types.ts';
export const ${license_name_upper}: License = ${JSON.stringify(data, null, 2)}
`;
  await writeFileStr(
    `../data/${filename_to_variable_name(filename)}.ts`,
    content,
  );
}

function main() {
  convert_license_file_to_json(Deno.args[0]);
}

// If this is run as a CLI script, execute the main function
if (import.meta.main) {
  main();
}
