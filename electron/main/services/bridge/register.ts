import { innerLog } from "../../log";
import { getLocalImageSrc } from "../../utils";
import { Observable } from "rxjs";
import {
  getObservableConfig,
  modifyObservableConfig,
  patchObservableConfig,
  resetObservableConfig,
  setObservableConfig,
} from "../config";
import { Err, Ok, Result } from "ts-results";
import { InitError } from "../../../../types";

function getMethodRegister(): Record<string, (...args: any) => any> {
  return {
    innerLog,
    getLocalImageSrc,
    setObservableConfig,
    patchObservableConfig,
    modifyObservableConfig,
    resetObservableConfig,
  };
}

async function getObservableRegistry(): Promise<
  Result<Record<string, Observable<any>>, InitError>
> {
  const register: Record<string, Observable<any>> = {};

  const configRes = await getObservableConfig();
  if (configRes.err)
    return new Err({
      type: "Config",
      msg: configRes.val,
    });
  register.config = configRes.unwrap();

  return new Ok(register);
}

export { getMethodRegister, getObservableRegistry };
