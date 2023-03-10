import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Return_only_number from "../../js/Return_only_number";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const Signup = () => {
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  let [nid_number, set_nid_number] = useState("");

  function handleKeyup(e) {
    let x = Return_only_number(e.target.value);
    e.target.value = x;

    set_nid_number(x);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push("/home");
  }

  if (session) {
    router.push("/home");
  }

  return (
    <>
      <Head>
        <title>Shop Manager | Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <div className="signup-body">
        <form
          className="form1"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="txt-c-01 for-sign-up">
            <div>
              <Image
                className="chobi"
                src="/img/logo.png"
                width={60}
                height={60}
                alt="logo"
              />
            </div>

            <div>
              <h1 className="create-txt-h1">Create a new account</h1>
              <p className="deep">Your secret our prority.</p>
            </div>
          </div>

          <input type="text" placeholder="Shop's Name" required />
          <div style={{ display: "flex" }} className="names-container">
            <span>
              <input
                type="text"
                placeholder="First name"
                required
                style={{ width: "100%" }}
              />
            </span>

            <span>
              <input
                type="text"
                placeholder="Surname"
                required
                style={{ width: "100%" }}
              />
            </span>
          </div>

          <input type="text" placeholder="Shop Address" required />
          <input
            type="text"
            placeholder="NID Number"
            required
            onKeyUp={(e) => {
              handleKeyup(e);
            }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            onKeyUp={(e) => {
              handleKeyup(e);
            }}
          />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <p className="gender-p">
            <input type="radio" name="Gender" id="Male" />
            <label htmlFor="Male">Male</label>
            <input type="radio" name="Gender" id="Female" />
            <label htmlFor="Female">Female</label>
            <input type="radio" name="Gender" id="Custom" />
            <label htmlFor="Custom">Custom</label>
          </p>

          <div className="checkbox-container">
            <input type="checkbox" required />
            <p>
              By clicking this, you agree to our Terms & conditions.You may
              receive SMS notifications from us and can opt out at any time.
            </p>
          </div>

          <input className="log-in" type="submit" value="Register" />
        </form>

        <p className="already-acccount-class">
          Already have an Account!
          <Link href="./">Login</Link>
        </p>

        <div>
          {session && (
            <>
              <p>{session.user.email}</p>
              <button
                onClick={() => {
                  signOut();
                }}
              >
                signOut
              </button>
            </>
          )}
          {!session && (
            <button
              onClick={() => {
                signIn();
              }}
            >
              signIn
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);

  return {
    props: { session },
  };
};
