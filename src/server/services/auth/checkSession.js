import UnauthorisedError from "../../../errors/UnauthorisedError"

function checkSession({session, hasRole = []}) {
  if (!session) throw new UnauthorisedError()

  if(hasRole.length > 0) {
    const hasValidRole = hasRole.includes(session?.role);
    if(!hasValidRole) throw new UnauthorisedError();
  }

  return true;
}

export default checkSession;