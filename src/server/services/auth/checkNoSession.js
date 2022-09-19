import UnauthorisedError from "../../../errors/UnauthorisedError"

function checkNoSession({session}) {
  if (session) throw new UnauthorisedError()

  return true;
}

export default checkNoSession;