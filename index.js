'use strict';

/**
 *
 * @param input
 * @returns {object || array}
 */
module.exports = (input) => {
	return convertToLowerCamelCase(input);
};

const convertToLowerCamelCase = (input) => {
	const output = JSON.parse(JSON.stringify(input));
	if(!Array.isArray(output)){
		lowerCamelCaseObjectConvertor(output);
	}else{
		input.forEach(output => lowerCamelCaseObjectConvertor(output));
	}
	return output;
};

const lowerCamelCaseObjectConvertor = (object) => {
	for (const key in object) {
		let newKey = key.charAt(0).toLocaleLowerCase() + key.slice(1);
		object[newKey] = object[key];
		delete object[key];
		if (typeof object[newKey] === 'object') {
			convertToLowerCamelCase(object[newKey]);
		}
	}
};
