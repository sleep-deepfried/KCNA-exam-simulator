const stats = [
  { value: '150+', label: 'Practice Questions' },
  { value: '5', label: 'KCNA Domains' },
  { value: '0', label: 'Data Collected' },
]

const domains = [
  { name: 'Kubernetes Fundamentals', weight: 46 },
  { name: 'Container Orchestration', weight: 22 },
  { name: 'Cloud Native Architecture', weight: 16 },
  { name: 'Cloud Native Observability', weight: 8 },
  { name: 'Cloud Native App Delivery', weight: 8 },
]

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 min-h-screen">

      {/* ─── HERO ─── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 bg-kcna-primary bg-opacity-10 text-kcna-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            In collaboration with Tutorials Dojo
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
            KCNA<br />
            <span className="text-kcna-primary">Exam Dojo</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
            The offline iOS study app for the Kubernetes and Cloud Native
            Associate exam. Exams, flashcards, concept docs, and domain
            analytics — all on your device.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-700 text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>
                <span className="block text-xs opacity-75 leading-none mb-0.5">Download on the</span>
                <span className="block text-base font-semibold leading-none">App Store</span>
              </span>
            </a>
            <span className="text-sm text-gray-400">iOS 18.0 or later · Free</span>
          </div>

        </div>

        {/* Right — iPhone mockup */}
        <div className="flex justify-center md:justify-end relative">
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 70% at 60% 50%, rgba(8,145,178,0.15) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            {/* Floating chip — top-left */}
            <div className="absolute -left-10 top-16 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-semibold text-gray-700 z-10 border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-kcna-primary inline-block" />
              150+ Questions
            </div>

            {/* Floating chip — bottom-right */}
            <div className="absolute -right-8 bottom-24 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-semibold text-gray-700 z-10 border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
              5 Domains
            </div>

            {/* iPhone frame */}
            <div
              className="relative bg-gray-900 rounded-[44px] shadow-2xl"
              style={{ width: 240, height: 490, padding: 10 }}
            >
              {/* Side buttons */}
              <div className="absolute -left-[3px] top-[88px] w-[3px] h-8 bg-gray-700 rounded-l-sm" />
              <div className="absolute -left-[3px] top-[132px] w-[3px] h-10 bg-gray-700 rounded-l-sm" />
              <div className="absolute -left-[3px] top-[178px] w-[3px] h-10 bg-gray-700 rounded-l-sm" />
              <div className="absolute -right-[3px] top-[120px] w-[3px] h-14 bg-gray-700 rounded-r-sm" />

              {/* Screen */}
              <div className="w-full h-full rounded-[36px] overflow-hidden bg-gradient-to-b from-[#0891b2] to-[#0e4f61] relative">

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-gray-900 rounded-full z-10" />

                {/* Screen content */}
                <div className="absolute inset-0 pt-14 px-4 flex flex-col gap-3">
                  {/* Nav bar mock */}
                  <div className="text-center">
                    <p className="text-white text-[10px] opacity-60 font-medium">KCNA Exam Dojo</p>
                  </div>

                  {/* Score ring mock */}
                  <div className="bg-white bg-opacity-10 rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-[3px] border-white border-opacity-80 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[9px] font-bold">82%</span>
                    </div>
                    <div>
                      <p className="text-white text-[9px] font-semibold">Exam Set 1</p>
                      <p className="text-white text-[8px] opacity-60 mt-0.5">41 / 50 correct</p>
                    </div>
                  </div>

                  {/* Domain bars mock */}
                  <div className="bg-white bg-opacity-10 rounded-2xl p-3 space-y-2">
                    {['K8s Fundamentals', 'Container Orch.', 'Cloud Native Arch.'].map((d, i) => (
                      <div key={d}>
                        <div className="flex justify-between mb-0.5">
                          <span className="text-white text-[7px] opacity-70">{d}</span>
                          <span className="text-white text-[7px] font-semibold">{[88, 74, 65][i]}%</span>
                        </div>
                        <div className="h-1 bg-white bg-opacity-20 rounded-full">
                          <div
                            className="h-1 rounded-full bg-white bg-opacity-80"
                            style={{ width: `${[88, 74, 65][i]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tab bar mock */}
                  <div className="absolute bottom-4 left-3 right-3 bg-white bg-opacity-10 rounded-2xl px-2 py-2 flex justify-around">
                    {['Practice', 'Cards', 'Learn', 'History'].map((t) => (
                      <span key={t} className="text-white text-[7px] opacity-70">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="max-w-xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-5 text-center">
              <p className="text-2xl font-extrabold text-kcna-primary">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES BENTO ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Everything you need to pass</h2>

        <div className="grid grid-cols-6 gap-4">

          {/* Exam Simulator — large, gradient */}
          <div className="col-span-6 md:col-span-4 bg-gradient-to-br from-kcna-primary to-kcna-secondary rounded-2xl p-7 text-white">
            <div className="w-11 h-11 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Full Exam Simulator</h3>
            <p className="text-white text-opacity-80 text-sm leading-relaxed max-w-sm">
              Timed sessions with question flagging, navigator panel, and instant per-domain
              score breakdown. Mirrors the real KCNA experience.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Question flagging', 'Timer', 'Score breakdown', 'Weak area drill'].map((tag) => (
                <span key={tag} className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* 100% Offline — dark */}
          <div className="col-span-6 md:col-span-2 bg-gray-900 rounded-2xl p-7 text-white">
            <div className="w-11 h-11 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">100% Offline</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              No account. No network. No tracking. Everything lives on your device — private by design.
            </p>
          </div>

          {/* Flashcards */}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-exam-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Flashcard Sessions</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Quick-review decks sampled from the full question bank. Pick 10, 25, 50, or all.</p>
          </div>

          {/* Domain Analytics */}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Domain Analytics</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Per-domain score breakdown after every attempt. Know exactly where to focus.</p>
          </div>

          {/* Weak Area Drill */}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Weak Area Drill</h3>
            <p className="text-sm text-gray-500 leading-relaxed">One tap to re-practice only the domains you scored below 70% on.</p>
          </div>

          {/* Kubernetes Docs — full-width banner */}
          <div className="col-span-6 bg-purple-50 border border-purple-100 rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Built-in Kubernetes Docs</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                Concept cards for all 5 KCNA domains — Kubernetes Fundamentals, Container Orchestration,
                Cloud Native Architecture, Observability, and App Delivery. Study without switching apps.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
              {['38 topics', '5 domains', 'Offline'].map((tag) => (
                <span key={tag} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── DOMAIN COVERAGE ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10">
          <h2 className="text-xl font-bold text-white mb-1">All 5 KCNA domains covered</h2>
          <p className="text-gray-400 text-sm mb-8">Weighted to match the official CNCF exam blueprint.</p>
          <div className="space-y-5">
            {domains.map((d) => (
              <div key={d.name}>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-gray-200">{d.name}</span>
                  <span className="text-kcna-accent">{d.weight}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-kcna-primary to-kcna-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${d.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-kcna-primary to-kcna-secondary rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Ready to pass the KCNA?
          </h2>
          <p className="text-white text-opacity-80 text-base mb-8 max-w-md mx-auto">
            Download KCNA Exam Dojo and start studying today — no account, no Wi-Fi required.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-kcna-primary hover:bg-gray-100 px-7 py-3.5 rounded-xl font-semibold transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs opacity-60 leading-none mb-0.5">Download on the</span>
              <span className="block text-base font-semibold leading-none">App Store</span>
            </span>
          </a>
        </div>
      </section>

    </div>
  )
}
