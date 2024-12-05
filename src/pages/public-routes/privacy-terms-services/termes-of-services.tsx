export default function TermsOfService() {
  return (
    <div className="p-5 leading-relaxed text-gray-800 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p className="mb-6">
        <strong>Last Updated:</strong> [Insert Date]
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By creating an account, participating in tournaments, or using any
          part of the platform, you agree to be bound by these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
        <ul className="list-disc pl-5">
          <li>
            You must be at least 13 years old (or the minimum age of digital
            consent in your country).
          </li>
          <li>You must have the legal authority to agree to these Terms.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. User Responsibilities
        </h2>
        <p>You agree to:</p>
        <ul className="list-disc pl-5">
          <li>
            Provide accurate and truthful information during registration.
          </li>
          <li>Use the platform only for lawful purposes.</li>
          <li>
            Respect other users and refrain from harassment or abusive behavior.
          </li>
          <li>
            Refrain from exploiting or interfering with the platform’s
            operations.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Prohibited Activities
        </h2>
        <ul className="list-disc pl-5">
          <li>Impersonate another person or entity.</li>
          <li>Post harmful, obscene, or unlawful content.</li>
          <li>
            Use bots or automation tools to manipulate tournament results.
          </li>
          <li>Attempt to bypass or disrupt platform security measures.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Disclaimer of Warranties
        </h2>
        <p>
          The platform is provided "as is" and "as available." We do not
          guarantee that the platform will be error-free or uninterrupted.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p>
          Serezin Gaming is not liable for direct, indirect, or consequential
          damages arising from your use of the platform.
        </p>
      </section>
    </div>
  );
}
