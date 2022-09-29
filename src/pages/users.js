import useGetSession from "../hooks/useGetSession";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  const { data: session } = useGetSession({ required: true });
  return <>{session && <UsersTable />}</>;
}
