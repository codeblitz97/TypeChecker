import { JsTypes, typeCheck } from "../out";

const aFunction = (msg: string, ...optional: any[]) => {
  typeCheck({ paramName: msg, expectedType: JsTypes.String });
  let output = msg;

  if (optional.length > 0) {
    output += optional.join(" ");
  }

  return output;
};

export { aFunction };
