import * as Licenses from "../data/mod.ts";

const NOT_FOUND_ERROR_MSG = "License Not Found.";

export function get_help(): string {
  return `USAGE: license get <code>
  
Write out a license text to the file LICENSE

ARGUMENTS:
    <code>                  license code, e.g. license get MIT
                            run "license list" to see all codes
    help, -help, --help     show this help message
`;
}

// get
export function get(
  a: string,
  arg_user: string,
  arg_year: string,
  arg_project: string,
): string {
  return load_license(a, arg_user, arg_year, arg_project);
}

// load_license
function load_license(
  name: string,
  arg_user: string,
  arg_year: string,
  arg_project: string,
): string {
  // TODO(kevin): These need to be retrieved from env or config / cli args
  const date = arg_year;
  const copyright_name = arg_user;
  const project = arg_project;

  let license_text: string = load_license_text(name);
  let clean_text: string = "";

  clean_text = license_text
    .replace(/\[year\]/gi, date)
    .replace(/\[yyyy\]/gi, date)
    .replace(
      /\[fullname\]/gi,
      copyright_name,
    )
    .replace(
      /\[name of copyright owner\]/gi,
      copyright_name,
    )
    .replace(
      /\[project\]/gi,
      project,
    );

  return clean_text;
}

function load_license_text(name: string): string {
  const l_lower: string = name.toLowerCase();

  let license_text: string = "";

  switch (l_lower) {
    case "mit":
      license_text = Licenses.MIT.text;
      break;
    case "0bsd":
      license_text = Licenses._0BSD.text;
      break;
    case "bsd-2-clause":
      license_text = Licenses.BSD_2_CLAUSE.text;
      break;
    case "cc-by-4.0":
      license_text = Licenses.CC_BY_4_0.text;
      break;
    case "epl-1.0":
      license_text = Licenses.EPL_1_0.text;
      break;
    case "gpl-3.0":
      license_text = Licenses.GPL_3_0.text;
      break;
    case "odbl-1.0":
      license_text = Licenses.ODBL_1_0.text;
      break;
    case "upl-1.0":
      license_text = Licenses.UPL_1_0.text;
      break;
    case "afl-3.0":
      license_text = Licenses.AFL_3_0.text;
      break;
    case "bsd-3-clause-clear":
      license_text = Licenses.BSD_3_CLAUSE_CLEAR.text;
      break;
    case "cc-by-sa-4.0":
      license_text = Licenses.CC_BY_SA_4_0.text;
      break;
    case "epl-2.0":
      license_text = Licenses.EPL_2_0.text;
      break;
    case "isc":
      license_text = Licenses.ISC.text;
      break;
    case "mpl-2.0":
      license_text = Licenses.MPL_2_0.text;
      break;
    case "ofl-1.1":
      license_text = Licenses.OFL_1_1.text;
      break;
    case "vim":
      license_text = Licenses.VIM.text;
      break;
    case "agpl-3.0":
      license_text = Licenses.AGPL_3_0.text;
      break;
    case "bsd-3-clause":
      license_text = Licenses.BSD_3_CLAUSE.text;
      break;
    case "cc0-1.0":
      license_text = Licenses.CC0_1_0.text;
      break;
    case "eupl-1.1":
      license_text = Licenses.EUPL_1_1.text;
      break;
    case "lgpl-2.1":
      license_text = Licenses.LGPL_2_1.text;
      break;
    case "ms-pl":
      license_text = Licenses.MS_PL.text;
      break;
    case "osl-3.0":
      license_text = Licenses.OSL_3_0.text;
      break;
    case "wtfpl":
      license_text = Licenses.WTFPL.text;
      break;
    case "apache-2.0":
      license_text = Licenses.APACHE_2_0.text;
      break;

    case "bsd-4-clause":
      license_text = Licenses.BSD_4_CLAUSE.text;
      break;
    case "cecill-2.1":
      license_text = Licenses.CECILL_2_1.text;
      break;

    case "eupl-1.2":
      license_text = Licenses.EUPL_1_2.text;
      break;

    case "lgpl-3.0":
      license_text = Licenses.LGPL_3_0.text;
      break;

    case "ms-rl":
      license_text = Licenses.MS_RL.text;
      break;
    case "postgresql":
      license_text = Licenses.POSTGRESQL.text;
      break;

    case "artistic-2.0":
      license_text = Licenses.ARTISTIC_2_0.text;
      break;
    case "bsl-1.0":
      license_text = Licenses.BSL_1_0.text;
      break;

    case "ecl-2.0":
      license_text = Licenses.ECL_2_0.text;
      break;

    case "gpl-2.0":
      license_text = Licenses.GPL_2_0.text;
      break;

    case "lppl-1.3c":
      license_text = Licenses.LPPL_1_3C.text;
      break;

    case "ncsa":
      license_text = Licenses.NCSA.text;
      break;

    case "unlicense":
      license_text = Licenses.UNLICENSE.text;
      break;

    default:
      license_text = NOT_FOUND_ERROR_MSG;
  }

  return license_text;
}
