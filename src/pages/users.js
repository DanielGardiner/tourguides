import useGetSession from "../hooks/useGetSession";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  const { data: session } = useGetSession({ required: true });

  if (!session) return null;

  return <UsersTable />;
}
