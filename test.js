module.exports = {
  test: function (fn, testCases) {
    const failingTests = [];
    testCases.forEach(([params, expectedResult], idx) => {
      if (typeof expectedResult === 'object') {
        // Only Arrays right now
        const actualResult = fn(...params);
        if (!actualResult || !expectedResult.sort().every((item, idx) => {
          console.log("item", item)
          return item === actualResult[idx]
        })) {
          failingTests.push(`${idx + 1}: ${fn.name}(${params.join(', ')}) \n\t returned ${fn(...params)} \n\t expected ${JSON.stringify(expectedResult)}\n`)
        }
      } else {
        if (fn(...params) !== expectedResult) {
          failingTests.push(`${idx + 1}: ${fn.name}(${params.join(', ')})\n \t returned ${fn(...params)} \n\t expected ${expectedResult}\n`)
        }
      }
    });

    if (failingTests.length === 0) {
      console.log('All tests passed!');
    } else {
      const single = failingTests.length === 1;
      console.log(`\nERROR: There ${single ? 'is' : 'are'} ${failingTests.length} failing ${single ? 'test' : 'tests'}\n`);
      failingTests.forEach((msg) => { console.log(msg) });
    }
  }
}