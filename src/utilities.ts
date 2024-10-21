import * as N3 from 'n3';

export function prefixer<Prefix extends string>(
  base: N3.NamedNode<Prefix> | Prefix,
) {
  return <Suffix extends string>(
    local: Suffix,
  ): N3.NamedNode<`${Prefix}${Suffix}`> =>
    N3.DataFactory.namedNode(
      `${typeof base === 'string' ? base : base.value}${local}`,
    );
}
