import { useState } from "react";
import { getSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Input from "../components/Input";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function SignIn() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("email", { email: email || "daniel.gardiner.tech@gmail.com" });
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <Layout>
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
