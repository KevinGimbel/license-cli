# license
> Find and generate LICENSE files

<!-- BEGIN mktoc -->
- [Status: WIP](#status-wip)
- [Install](#install)
- [Usage](#usage)
  - [get a license](#get-a-license)
  - [list all available licenses](#list-all-available-licenses)
  - [find a license](#find-a-license)
  - [get info about a license](#get-info-about-a-license)
- [Acknowledgment](#acknowledgment)
- [License](#license)
<!-- END mktoc -->

## Status: WIP

This project is still `WORK IN PROGRESS` as I try to understand Deno better. You can install and use it but there may be breaking changes in the way it works.

## Install

```bash
deno install -n license  --unstable --allow-read --allow-write https://raw.githubusercontent.com/kevingimbel/license-cli/master/main.ts
```

## Usage

### get a license

Will write the license text to a file named LICENSE.

```bash
$ license get MIT
```

### list all available licenses

The output format is `License Name (spdx-id)`

```bash
$ license list
Academic Free License v3.0 (AFL-3.0)
GNU Affero General Public License v3.0 (AGPL-3.0)
Apache License 2.0 (Apache-2.0)
Artistic License 2.0 (Artistic-2.0)
BSD 2-Clause "Simplified" License (BSD-2-Clause)

```

### find a license

Searches trough license metadata. Searched fields: `Limitations`, `Conditions`, `Permissions`, `Title`, and `Description`.

```bash
$ license find private-use
```

### get info about a license

Search is fuzzy, so entering `license info apache` will output info about all licenses having "apache" somewhere in the name.

```bash
$ license info apache
```

Multiple results
```bash
$ license info gpl

========================================
GNU Affero General Public License v3.0 (AGPL-3.0)
Description:
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.

Conditions:  include-copyright, document-changes, disclose-source, network-use-disclose, same-license
Limitations: liability, warranty
Permissions: commercial-use, modifications, distribution, patent-use, private-use


========================================
GNU General Public License v2.0 (GPL-2.0)
Description:
The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.

Conditions:  include-copyright, document-changes, disclose-source, same-license
Limitations: liability, warranty
Permissions: commercial-use, modifications, distribution, private-use

Used by (selection):
             AliSQL - https://github.com/alibaba/AliSQL/blob/master/COPYING
             Discourse - https://github.com/discourse/discourse/blob/master/LICENSE.txt
             Joomla! - https://github.com/joomla/joomla-cms/blob/staging/LICENSE.txt
```

## Acknowledgment

The license data comes from the [choosealicense.com](https://github.com/github/choosealicense.com) project. Huge thanks for the license texts and meta data that make this project work!

## License

See LICENSE file