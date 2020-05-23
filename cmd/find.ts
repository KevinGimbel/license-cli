import * as Licenses from "../data/mod.ts";
import { display_license } from "./info.ts";

export function find_help(): string {
  return `USAGE: license find <search-string> [help|-help|--help]

Find a license by searching through its Limitations, Conditions,
Permissions, Title, and Description fields.

ARGUMENTS:
    <search-string>         the string to search for in the fields mentioned
                            above.
    -s, --short             Only show license title and code
    help, -help, --help     show this help message

EXAMPLE:

$ license find private-use
========================================
Academic Free License v3.0 (AFL-3.0)
Description:
The Academic Free License is a variant of the Open Software License that does not require that the source code of derivative works be disclosed. It contains explicit copyright and patent grants and reserves trademark rights in the author.

Conditions:  include-copyright, document-changes
Limitations: trademark-use, liability, warranty
Permissions: commercial-use, modifications, distribution, private-use, patent-use


========================================
GNU Affero General Public License v3.0 (AGPL-3.0)
Description:
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.

Conditions:  include-copyright, document-changes, disclose-source, network-use-disclose, same-license
Limitations: liability, warranty
Permissions: commercial-use, modifications, distribution, patent-use, private-use
[...]
  `;
}

export function find(code: string, short?: boolean): void {
  let lowercase_code: string = code.toLowerCase();

  if (lowercase_code == undefined) {
    console.log("<search-string> is required.");
    return;
  }

  for (let k in Object.values(Licenses)) {
    let license: License = Object.values(Licenses)[k];

    if (
      license.conditions.indexOf(lowercase_code) ||
      license.description.indexOf(lowercase_code) >= 0 ||
      license.limitations.indexOf(lowercase_code) >= 0 ||
      license.permissions.indexOf(lowercase_code) >= 0 ||
      license.title.indexOf(lowercase_code) >= 0
    ) {
      display_license(license, short);
    }
  }
}
