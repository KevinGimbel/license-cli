#!/usr/bin/env deno run --allow-read --allow-write --unstable
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
import { writeFileStr } from "https://deno.land/std/fs/mod.ts";

function main() {
  let cmd: string | undefined = Deno.args[0];
  let short_mode: boolean =
    (Deno.args.indexOf("-s") >= 0 || Deno.args.indexOf("--short") >= 0);
  let is_help: boolean =
    (Deno.args.indexOf("-h") >= 0 || Deno.args.indexOf("--help") >= 0 ||
      Deno.args.indexOf("help") >= 0);

  let command_input: string | undefined = Deno.args[1];

  switch (cmd) {
    case "get":
      if (is_help) {
        console.log(get_help());
      } else {
        if (command_input) {
          let license_text: string = get(command_input);
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
