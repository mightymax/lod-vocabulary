# Linked open Data Vocabularies

This repository allows you to use widely used vocabularies in your Javascript/Typescript projects. It uses the [Zazuko RDF Vocabularies repository](https://github.com/zazuko/rdf-vocabularies) as a base to generate Typescript files. The `rdf-vocabularies` repository includes NQuads, which are queried for labels and descriptions using a [SPARQL query](./query.rq). The resulting bindings are then used to generate Typescript files.


## Usage

First install the package in your project:
```bash
npm i lod-vocabularies
```

Then in your Typescript file (example):
```ts
import { sdo } from 'lod-vocabularies'
console.log(sdo.Person)
```

IDE's such as Visual Studio Code will show additional information taken from the vocabulary:
<img src="Scherm­afbeelding 2024-10-22 om 07.40.44.png">

## Developers
To generate the vocabularies, follow these steps:
```bash
git clone https://github.com/mightymax/lod-vocabulary.git
cd lod-vocabulary
npm i
npm run build
npm run build:vocabs
```

## Missing vocabularies
Not all vocabulaires are parsed correctly, for those vocabularies that do not return any binding, no vocabulary is created.

Currently, these vocabularies are missing becasue the SPARQL query does not return any bindings:
- constant: http://qudt.org/vocab/constant/
- dig: http://www.ics.forth.gr/isl/CRMdig/
- discipline: http://qudt.org/vocab/discipline/
- dtype: http://www.linkedmodel.org/schema/dtype#
- geof: http://www.opengis.net/def/function/geosparql/
- geor: http://www.opengis.net/def/rule/geosparql/
- gml: http://www.opengis.net/ont/gml#
- ma: http://www.w3.org/ns/ma-ont#
- prefix: http://qudt.org/vocab/prefix/
- qkdv: http://qudt.org/vocab/dimensionvector/
- quantitykind: http://qudt.org/vocab/quantitykind/
- rdfa: http://www.w3.org/ns/rdfa#
- shsh: http://www.w3.org/ns/shacl-shacl#
- sou: http://qudt.org/vocab/sou/
- stat: http://www.w3.org/ns/posix/stat#
- unit: http://qudt.org/vocab/unit/
- xhv: http://www.w3.org/1999/xhtml/vocab#
- xsd: http://www.w3.org/2001/XMLSchema#
- rif: http://www.w3.org/2007/rif#
- v: http://rdf.data-vocabulary.org/#
- wdr: http://www.w3.org/2007/05/powder#
- xml: http://www.w3.org/XML/1998/namespace/

