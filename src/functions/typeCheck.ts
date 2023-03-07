import { JsTypes } from "../enums";
function typeCheck({
  paramName,
  expectedType,
}: {
  paramName: string;
  expectedType: JsTypes;
}): void {
  const actualType = typeof paramName;

  if (actualType !== expectedType) {
    throw new TypeError(
      `Parameter "${paramName}" must be of type "${expectedType}", but got "${actualType}"`
    );
  }
}

export { typeCheck };
