export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(
  arg: string,
  callBack: LoggerServiceCallback
) {
  if (!arg) {
    callBack('Invalid argument!');
    return;
  }
  callBack(`called with are ${arg}`);
  return arg.toUpperCase();
}
