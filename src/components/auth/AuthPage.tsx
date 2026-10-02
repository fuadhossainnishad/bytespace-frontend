import Link from "next/link";
import { AuthShowcase } from "@/components/auth/AuthShowcase";

type AuthMode = "login" | "register";

type AuthField = {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: "name" | "email" | "current-password" | "new-password";
};

const pageContent: Record<AuthMode, {
  eyebrow: string;
  heading: string;
  promoHeading: string;
  promoBody: string;
  action: string;
  prompt: string;
  linkLabel: string;
  linkHref: string;
  fields: AuthField[];
}> = {
  login: {
    eyebrow: "Sign In",
    heading: "Welcome Back",
    promoHeading: "Sign in with ease",
    promoBody: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    action: "Sign In",
    prompt: "New user?",
    linkLabel: "Create an account",
    linkHref: "/register",
    fields: [
      { id: "login-email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
      { id: "login-password", label: "Password", type: "password", placeholder: "********", autoComplete: "current-password" },
    ],
  },
  register: {
    eyebrow: "Create an Account",
    heading: "Welcome to ByteSpace",
    promoHeading: "Sign up and come in",
    promoBody: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
    action: "Continue",
    prompt: "Already have an account?",
    linkLabel: "Login",
    linkHref: "/login",
    fields: [
      { id: "register-name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
      { id: "register-email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
      { id: "register-password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
    ],
  },
};

type AuthPageProps = { mode: AuthMode };

export function AuthPage({ mode }: AuthPageProps) {
  const content = pageContent[mode];

  return (
    <main className="auth-page">
      <div className="auth-grid" aria-hidden="true" />
      <div className="auth-layout">
        <aside className="auth-aside">
          <Link className="auth-brand" href="/" aria-label="ByteSpace home">
            <img src="/assets/bytespace-symbol.svg" alt="" width="29" height="32" />
            <span>ByteSpace</span>
          </Link>
          <div className="auth-promo">
            <p className="auth-promo-heading">{content.promoHeading}</p>
            <p>{content.promoBody}</p>
          </div>
          <AuthShowcase />
        </aside>

        <section className="auth-panel" aria-labelledby="auth-heading">
          <div className="auth-panel-inner">
            <div className="auth-primary">
              <div className="auth-heading">
                <p>{content.eyebrow}</p>
                <h1 id="auth-heading">{content.heading}</h1>
              </div>
              <div className="auth-fields" role="group" aria-labelledby="auth-heading">
                {content.fields.map((field) => (
                  <div className="auth-field" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                    />
                  </div>
                ))}
                <button className="auth-submit" type="button">{content.action}</button>
              </div>
            </div>

            <div className={`auth-panel-footer${mode === "register" ? " auth-panel-footer--register" : ""}`}>
              {mode === "login" && (
                <>
                  <div className="auth-divider">
                    <span aria-hidden="true" />
                    <p>or</p>
                    <span aria-hidden="true" />
                  </div>
                  <div className="auth-social" role="group" aria-label="Other sign in options">
                    <button type="button" aria-label="Continue with Facebook">
                      <img src="/assets/auth-facebook.svg" alt="" width="40" height="40" />
                    </button>
                    <button type="button" aria-label="Continue with Google">
                      <img src="/assets/auth-google.svg" alt="" width="40" height="40" />
                    </button>
                  </div>
                </>
              )}
              <p className="auth-switch">
                <span>{content.prompt}</span>
                <Link href={content.linkHref}>{content.linkLabel}</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
