export function idConverter(id: string) {
  const numberId = +id;
  if (!Number.isInteger(numberId)) throw new Error("It's not a valid ID!");
  return numberId;
}

export function errorMessageHandler(error: any) {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    throw new Error("Something went wrong!");
  }
}
