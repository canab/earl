import { expect as earl } from '../../index'
import { testMatcher, testMatcherFormat } from '../../test/matchers'
import { TEST_VALUES } from '../../test/values'
import { negative } from './negative'

describe(negative.name, () => {
  testMatcherFormat(earl.negative(), 'negative()')

  testMatcher(
    negative(),
    [-Number.EPSILON, -0.5, -1, -4, -11, -10.5, -100, -12356.789, -Infinity],
    [
      0,
      NaN,
      Number.EPSILON,
      0.5,
      1,
      4,
      11,
      10.5,
      100,
      12356.789,
      Infinity,
      TEST_VALUES.filter((x) => typeof x !== 'number'),
    ],
  )
})