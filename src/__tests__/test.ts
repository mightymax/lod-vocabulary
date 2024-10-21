import { sdo, missingVocabularies } from '../index.js';
import { DataFactory } from 'n3';
import prefixes from '@zazuko/prefixes';
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const { assert, expect } = chai;

const load = async (prefix: string) =>
  await import(`../vocabularies/${prefix}.js`)
    .then((module) => {
      if (
        typeof module.default !== 'object' ||
        Object.keys(module.default).length === 0
      ) {
        throw new Error('Module should have a default export');
      }
    })
    .then(() => prefix);

describe('Testing vocabulaires', () => {
  it('SDO should have a Person', () => {
    assert.equal(sdo.Person.value, 'https://schema.org/Person');
    assert.equal(
      DataFactory.namedNode('https://schema.org/Person').equals(sdo.Person),
      true,
    );
  });

  it('should load vocabularies', async () => {
    for (const prefix of Object.keys(prefixes).filter(
      (prefix) => !missingVocabularies.includes(prefix),
    )) {
      expect(await load(prefix)).to.equal(prefix);
    }
  });
  it('should fail on missing prefixes', async () => {
    for (const prefix of Object.keys(prefixes).filter((prefix) =>
      missingVocabularies.includes(prefix),
    )) {
      await expect(load(prefix)).to.be.rejectedWith(
        Error,
        undefined,
        `${prefix} should not have been loaded`,
      );
    }
  });
});
