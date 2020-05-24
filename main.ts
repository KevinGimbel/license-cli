#!/usr/bin/env -S deno run -q --unstable --allow-read --allow-write
import {
  get,
  get_help,
  find,
  find_help,
  info,
  info_help,
  list,
  list_help,
} from "./cmd/mod.ts";
import { Darg } from "https://raw.githubusercontent.com/kevingimbel/darg/0.1/src/mod.ts";

import { writeFileStr, exists } from "https://deno.land/std@0.51.0/fs/mod.ts";

const darg = new Darg();

function main() {
  let cmd: string | undefined = Deno.args[0];
  let short_mode: boolean =
    (Deno.args.indexOf("-s") >= 0 || Deno.args.indexOf("--short") >= 0);
  let is_help: boolean = darg.is_help();

  let arg_user: string = darg.parse("user", true).unwrap();
  let arg_year: string = darg.parse("year").unwrap_or(
    new Date().getFullYear().toString(),
  );
  let arg_project: string = darg.parse("project").unwrap_or("");

  let command_input: string | undefined = Deno.args[1];

  switch (cmd) {
    case "get":
      if (is_help) {
        console.log(get_help());
      } else {
        if (command_input) {
          let license_text: string = get(
            command_input,
            arg_user,
            arg_year,
            arg_project,
          );
          writeFileStr("LICENSE", license_text);
        } else {
          console.log("Argument <code> cannot be empty");
          console.log(get_help());
        }
      }
      break;

    case "list":
      if (is_help) {
        console.log(list_help());
      } else {
        list();
      }
      break;

    case "info":
      if (is_help) {
        console.log(info_help());
      } else {
        if (command_input) {
          info(command_input);
        } else {
          console.log("Argument <code> cannot be empty");
          console.log(info_help());
        }
      }
      break;

    case "find":
      if (is_help) {
        console.log(find_help());
      } else {
        if (command_input) {
          find(command_input, short_mode);
        } else {
          console.log("Argument <code> cannot be empty");
          console.log(find_help());
        }
      }
      break;

    default:
      console.error(`Unknown command: ${cmd}.\n\n${main_help()}`);
  }
}

function main_help(): string {
  return `USAGE: license [command ] [arguments]

COMMANDS:
    get <code>        get a single license text
    list              list available licenses
    info              get info about licenses
    find <string>     find license by searching through fields

ARGUMENTS:
    <code>                  license code, e.g. license get MIT
    help, -help, --help     show help message for commands
`;
}

// If this is run as a CLI script, execute the main function
if (import.meta.main) {
  main();
}
