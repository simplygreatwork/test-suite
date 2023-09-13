
import { test_suite_new, test_suite_run } from '../source/test-suite.js'

let suite = test_suite_new()
let { it } = suite

it('one', function() {
	return true
})

it('two', function() {
	return false
})

it('three', function() {
	return true
})

test_suite_run(suite, function(passed) {
	if (passed) console.log(`All tests passed.`)
	else console.log(`Some tests failed.`)
})
