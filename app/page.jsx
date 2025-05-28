"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-200 to-purple-300 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center"
      >
        <h1 className="text-5xl font-bold text-purple-700 mb-4">
          🐝📝 Görev Zamanı!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          🎯 Hedeflerine ulaşmak için yapılacaklarını planla,
          <br />✅ Tamamla, 🧠 Hatırla, 🚀 Başar!
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/todo">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition">
              Görevlerini Görüntüle 🚀
            </button>
          </Link>
        </motion.div>

        <br />
        <Link href="/todo/add">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition"
          >
            Yeni Görev Ekle ✍️
          </motion.button>
        </Link>

        <p className="mt-6 text-sm text-gray-400">Made with 💜 by selin</p>
      </motion.div>
    </main>
  );
}
