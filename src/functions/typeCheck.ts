import { JsTypes } from "../enums";

/**

Checks if the type of the given parameter matches the expected type.
@param {object} options - An object that contains the parameter name, the expected type, and an optional error message.
@param {string} options.paramName - The name of the parameter to be checked.
@param {string} options.expectedType - The expected type of the parameter.
@param {string} options.errorMessage - An optional custom error message to be thrown if the type check fails.
@throws {TypeError} - If the type of the parameter does not match the expected type.
*/
function typeCheck({
  paramName,
  expectedType,
  errorMessage,
}: {
  paramName: string;
  expectedType: JsTypes;
  errorMessage?: any;
}): void {
  const actualType = typeof paramName;
  const defaultErrorMessage = `Parameter "${paramName}" must be of type "${expectedType}", but got "${actualType}"`;

  if (actualType !== expectedType) {
    throw new TypeError(`${errorMessage || defaultErrorMessage}`);
  }
}

function typeCheckJs({
  paramName,
  expectedType,
  paramType,
  errorMessage,
}: {
  paramName: string;
  paramType: JsTypes;
  expectedType: JsTypes;
  errorMessage?: any;
}): void {
  const actualType = paramType;

  const defaultErrorMessage = `Parameter "${paramName}" must be of type "${expectedType}", but got "${actualType}"`;

  if (actualType !== expectedType) {
    throw new TypeError(`${errorMessage || defaultErrorMessage}`);
  }
}

function typeCheckFunc(func: Function, expectedTypes: Array<string>): void {
  const paramTypes = func
    .toString()
    .match(/\(([^)]*)\)/)![1]
    .split(",");
  const numParams = paramTypes.length;

  if (numParams !== expectedTypes.length) {
    throw new TypeError(
      `Function requires ${expectedTypes.length} arguments, but ${numParams} provided`
    );
  }

  for (let i = 0; i < numParams; i++) {
    const paramType = paramTypes[i].trim();
    const expectedType = expectedTypes[i].trim();

    if (paramType !== expectedType) {
      throw new TypeError(
        `Argument ${
          i + 1
        } must be of type ${expectedType}, but got ${paramType}`
      );
    }
  }
}

export { typeCheck, typeCheckJs, typeCheckFunc };
