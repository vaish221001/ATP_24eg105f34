import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 px-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
              Welcome to Blog App
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Share your thoughts, explore ideas, and connect with amazing stories from people around the world. Discover fresh articles, follow authors, and join the conversation in a modern blogging space.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            <div className="bg-slate-950/70 border border-white/10 rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-3">Explore Articles</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Browse the latest published articles and read stories on a wide range of topics.
              </p>
            </div>
            <div className="bg-slate-950/70 border border-white/10 rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-3">Write Your Story</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Create new posts as an author, publish your work, and share your perspective with the community.
              </p>
            </div>
            <div className="bg-slate-950/70 border border-white/10 rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-3">Manage Your Profile</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Keep your account details up to date and track the articles you follow or have written.
              </p>
            </div>
            <div className="bg-slate-950/70 border border-white/10 rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-3">Join the Community</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connect with other readers and authors. Stay inspired by new stories every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
