import { useState } from "react";
import { getSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Layout from "../../components/Layout";
import Button from "../../components/buttons/Button";
import Input from "../../components/Input";
import { checkNoSession } from "../../server/services/auth";

export async function getServerSideProps({ req, res }) {
  try {
    const session = await getSession({ req });
    checkNoSession({ session });

    return {
      props: {
        session,
      },
    };
  } catch (e) {
    console.error(e);

    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default function SignInPage({ session }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("email", {
      email: email || "daniel.gardiner.tech+superadmin@gmail.com",
    });
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <Layout session={session}>
      <form onSubmit={handleSubmit}>
        <div className="max-w-sm">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <Input
            type="text"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mt-2">
          <Button className="">Submit</Button>
        </div>
      </form>
    </Layout>
  );
}
