export default function PrivacyPolicy() {
  return (
    <div className="p-5 leading-relaxed text-gray-800 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 05/12/2024
      </p>
      <p className="mb-6">
        <strong>Last Updated:</strong> 05/12/2024
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <h3 className="text-xl font-medium mb-2">1.1 Personal Information</h3>
        <ul className="list-disc pl-5">
          <li>Account Data: Name, email address, username, and password.</li>
          <li>
            Tournament Data: Player profiles, team names, match results, and
            statistics.
          </li>
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">
          1.2 Automatically Collected Information
        </h3>
        <ul className="list-disc pl-5">
          <li>Device Data: IP address, browser type, operating system.</li>
          <li>
            Usage Data: Pages visited, time spent on the platform, and other
            interactions.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5">
          <li>Provide and maintain the platform.</li>
          <li>Facilitate tournament creation and management.</li>
          <li>Communicate updates, notifications, and announcements.</li>
          <li>Analyze usage trends to improve our services.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <p>
          We will never sell or rent your data. However, we may share your data:
        </p>
        <ul className="list-disc pl-5">
          <li>With service providers who assist in delivering our services.</li>
          <li>If required by law enforcement or legal obligations.</li>
          <li>
            To protect the rights, safety, and property of our users and
            platform.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement industry-standard measures to protect your data,
          including encryption and secure access protocols. However, no method
          of transmission over the internet is completely secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p>You may have the following rights depending on your location:</p>
        <ul className="list-disc pl-5">
          <li>Access: Request a copy of the data we hold about you.</li>
          <li>
            Correction: Request correction of inaccurate or incomplete data.
          </li>
          <li>Deletion: Request deletion of your data.</li>
          <li>Opt-Out: Unsubscribe from marketing communications.</li>
        </ul>
        <p>Contact us at [Insert Contact Email] to exercise these rights.</p>
      </section>
    </div>
  );
}
