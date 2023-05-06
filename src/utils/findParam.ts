import { NextApiRequest } from "next";

export default function findParam(request: NextApiRequest, paramName: string): { exist: boolean, param?: unknown } {
  const { searchParams } = new URL(request.url as string);
  const value = searchParams.get(paramName);

  console.log(value);

  return {
    exist: value !== undefined,
    param: value
  };
}