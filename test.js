import test from 'ava';
import upperCamelCaseToLowerCamelCase from '.';

test('does it convert', t => {
		const output = upperCamelCaseToLowerCamelCase(input);
		t.deepEqual(output, expectedOutput);
});




const input = {
	"FooBar" : "NO",
	"BarFoo" : "yes",
	"Array" : [{
		"Raz" : "Baz"
	}]
};

const expectedOutput = {
	"fooBar" : "NO",
	"barFoo" : "yes",
	"array" : [{
		"raz" : "Baz"
	}]
};
