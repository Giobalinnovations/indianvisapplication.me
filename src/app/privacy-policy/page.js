const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative">
              Privacy Policy
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
              <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>
            </h1>
          </div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We believe in making privacy simple and natural. Here&apos;s how we
            protect your information throughout your visa application journey.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Information Collection
              </h2>
            </div>
            <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-xl border border-primary/10">
                <h3 className="font-medium text-primary mb-4">
                  Personal Details
                </h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Full name and nationality
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Passport information
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Contact details
                  </li>
                </ul>
              </div>
              <div className="bg-background/50 p-6 rounded-xl border border-primary/10">
                <h3 className="font-medium text-primary mb-4">
                  Travel Information
                </h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Travel dates
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Visit purpose
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Stay details
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Data Protection
              </h2>
            </div>
            <div className="ml-16 bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-primary font-medium mb-2">
                    Encryption
                  </div>
                  <p className="text-secondary text-sm">
                    Bank-grade security protocols
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-medium mb-2">
                    Access Control
                  </div>
                  <p className="text-secondary text-sm">
                    Strict authorization policies
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-medium mb-2">
                    Monitoring
                  </div>
                  <p className="text-secondary text-sm">
                    24/7 security surveillance
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Information Sharing
              </h2>
            </div>
            <div className="ml-16 bg-white p-6 rounded-xl border border-primary/10">
              <p className="text-secondary mb-6">
                Your information is shared only with:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-primary font-medium">
                      Visa Authorities
                    </h3>
                    <p className="text-secondary text-sm">
                      Official processing requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-accent font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-primary font-medium">
                      Service Partners
                    </h3>
                    <p className="text-secondary text-sm">
                      Under strict confidentiality agreements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Your Rights
              </h2>
            </div>
            <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-xl">
                <h3 className="text-primary font-medium mb-4">
                  Access & Control
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li>• View your personal data</li>
                  <li>• Request corrections</li>
                  <li>• Download your information</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-xl">
                <h3 className="text-primary font-medium mb-4">
                  Privacy Choices
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li>• Update preferences</li>
                  <li>• Manage consent</li>
                  <li>• Request deletion</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="text-center">
            <p className="text-secondary mb-4">
              Questions about your privacy? Contact our dedicated privacy team.
            </p>
            <p className="text-sm text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
