import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, DiscIcon as Discord } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-gray-100">
      <header className="border-b border-gray-900 bg-gradient-to-r from-black via-gray-950 to-black">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 typewriter"
          >
            Project Epick
          </Link>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-gradient-to-r hover:from-red-600 hover:to-red-700 from-red-500 to-red-600 border-0 text-white
                        transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(239,68,68,0.7)] hover:scale-110
                        relative overflow-hidden group"
              onClick={() => window.open("https://www.youtube.com/@projectepick", "_blank")}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              <span className="relative z-10 flex items-center">
                <Youtube className="mr-2 h-4 w-4" />
                YouTube
              </span>
            </Button>
            <Button
              variant="outline"
              className="bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-700 from-indigo-500 to-indigo-600 border-0 text-white
                        transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.7)] hover:scale-110
                        relative overflow-hidden group"
              onClick={() => window.open("https://example.com", "_blank")}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              <span className="relative z-10 flex items-center">
                <Discord className="mr-2 h-4 w-4" />
                Discord
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-32 text-center bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl font-bold mb-6 font-mono bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 typewriter">
              Project Epick IDE
            </h1>
            <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Elevate your coding experience with our powerful and intuitive IDE.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white
                          transition-all duration-300 hover:shadow-[0_0_50px_10px_rgba(239,68,68,0.7)] hover:scale-110
                          min-w-[200px] py-6 text-lg relative overflow-hidden group"
                onClick={() => window.open("https://www.youtube.com/@projectepick", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></span>
                <span className="relative z-10 flex items-center justify-center w-full">
                  <Youtube className="mr-2 h-5 w-5" />
                  Watch Tutorial
                </span>
              </Button>
              <Button
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white
                          transition-all duration-300 hover:shadow-[0_0_50px_10px_rgba(99,102,241,0.7)] hover:scale-110
                          min-w-[200px] py-6 text-lg relative overflow-hidden group"
                onClick={() => window.open("https://example.com", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></span>
                <span className="relative z-10 flex items-center justify-center w-full">
                  <Discord className="mr-2 h-5 w-5" />
                  Join Community
                </span>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_50%,#ffffff22,transparent)]" />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 font-mono bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 typewriter">
              Join Our Community
            </h2>
            <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Connect with other developers and stay updated with the latest features.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white
                          transition-all duration-300 hover:shadow-[0_0_50px_10px_rgba(239,68,68,0.7)] hover:scale-110
                          min-w-[200px] py-6 text-lg relative overflow-hidden group"
                onClick={() => window.open("https://www.youtube.com/@projectepick", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></span>
                <span className="relative z-10 flex items-center justify-center w-full">
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </span>
              </Button>
              <Button
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white
                          transition-all duration-300 hover:shadow-[0_0_50px_10px_rgba(99,102,241,0.7)] hover:scale-110
                          min-w-[200px] py-6 text-lg relative overflow-hidden group"
                onClick={() => window.open("https://example.com", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></span>
                <span className="relative z-10 flex items-center justify-center w-full">
                  <Discord className="mr-2 h-5 w-5" />
                  Join Discord
                </span>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_50%,#ffffff22,transparent)]" />
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-t from-black to-gray-950 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Project Epick IDE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

