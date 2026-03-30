import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const menuItems = [
  { name: "म:म", english: "Momo", price: "Rs 120", emoji: "🥟" },
  { name: "चाउमिन", english: "Chowmein", price: "Rs 100", emoji: "🍜" },
  { name: "कफी", english: "Coffee", price: "Rs 50", emoji: "☕" },
  { name: "चिया", english: "Tea", price: "Rs 20", emoji: "🍵" },
];

const groceryItems = [
  { name: "दैनिक आवश्यक सामान", icon: "🛒" },
  { name: "सुपथ मूल्य", icon: "💰" },
];

const comboOffers = [
  { text: "Chowmein + Tea = Rs 110", emoji: "🍜🍵" },
  { text: "Momo + Coffee = Rs 150", emoji: "🥟☕" },
];

const whyUs = [
  { text: "सस्तो मूल्य", icon: "💸" },
  { text: "ताजा र स्वादिष्ट खाना", icon: "😋" },
  { text: "छिटो सेवा", icon: "⚡" },
  { text: "भरोसायोग्य पसल", icon: "🌟" },
];

const reviews = [
  { text: '"यहाँको म:म एकदम स्वादिलो छ 😋"', author: "राम प्रसाद" },
  { text: '"सस्तो र राम्रो सेवा"', author: "सीता देवी" },
  { text: '"दैनिक किनमेलको लागि बेस्ट ठाउँ"', author: "हरि बहादुर" },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1604908176997-431bf7d6c9c2?w=600",
    alt: "Momo",
    id: "momo",
  },
  {
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    alt: "Chowmein",
    id: "chowmein",
  },
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
    alt: "Coffee",
    id: "coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1556912167-f556f1f39f8a?w=600",
    alt: "Shop",
    id: "shop",
  },
];

const MAPS_LINK = "https://maps.app.goo.gl/dE6bL4KGX6GnvKFF9";

function CardBox({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white border border-border rounded-[10px] shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function OrderModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState("");

  const handleOrder = () => {
    if (!name || !phone || !items) {
      alert("कृपया सबै जानकारी भर्नुहोस्।");
      return;
    }
    const msg = `नमस्ते! म अनलाइन अर्डर गर्न चाहन्छु।%0A%0Aनाम: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0Aअर्डर: ${encodeURIComponent(items)}`;
    window.open(`https://wa.me/9779816401411?text=${msg}`, "_blank");
    onClose();
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: modal backdrop close on click
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
      data-ocid="order.modal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          className="font-mukta font-bold text-2xl mb-5 text-center"
          style={{ color: "#800000" }}
        >
          🛵 Online Order
        </h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="order-name"
              className="font-mukta text-sm font-semibold text-gray-700 block mb-1"
            >
              तपाईंको नाम *
            </label>
            <input
              id="order-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="नाम लेख्नुहोस्"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
              data-ocid="order.input"
            />
          </div>
          <div>
            <label
              htmlFor="order-phone"
              className="font-mukta text-sm font-semibold text-gray-700 block mb-1"
            >
              Phone नम्बर *
            </label>
            <input
              id="order-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98XXXXXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="order-items"
              className="font-mukta text-sm font-semibold text-gray-700 block mb-1"
            >
              अर्डर विवरण *
            </label>
            <textarea
              id="order-items"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              placeholder="जस्तै: Momo x2, Tea x1..."
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 resize-none"
              data-ocid="order.textarea"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
            data-ocid="order.cancel_button"
          >
            रद्द गर्नुहोस्
          </button>
          <button
            type="button"
            onClick={handleOrder}
            className="flex-1 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ background: "#25D366" }}
            data-ocid="order.submit_button"
          >
            WhatsApp मा पठाउनुहोस् 📲
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="min-h-screen bg-white font-roboto pb-16">
      {/* Sticky Header */}
      <header
        data-ocid="header.section"
        className="sticky top-0 z-50 flex items-center justify-between px-5 py-3 shadow-md"
        style={{ background: "#800000" }}
      >
        <h1
          className="font-poppins font-semibold text-white"
          style={{ fontSize: "18px" }}
        >
          उत्तरायणी किराना तथा नास्ता पसल
        </h1>
        <nav className="hidden sm:flex gap-1 items-center">
          <a
            href="#about"
            className="text-white text-sm px-3 py-1 rounded hover:bg-white/20 transition-colors"
            data-ocid="nav.link"
          >
            About
          </a>
          <a
            href="#menu"
            className="text-white text-sm px-3 py-1 rounded hover:bg-white/20 transition-colors"
            data-ocid="nav.link"
          >
            Menu
          </a>
          <a
            href="#contact"
            className="text-white text-sm px-3 py-1 rounded hover:bg-white/20 transition-colors"
            data-ocid="nav.link"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setShowOrder(true)}
            className="ml-2 text-sm font-semibold px-4 py-1.5 rounded-md transition-all duration-300 hover:scale-105"
            style={{ background: "#ff4500", color: "#fff" }}
            data-ocid="nav.open_modal_button"
          >
            Order Now 🛵
          </button>
        </nav>
        <a href="tel:9816401411" className="sm:hidden text-white text-xl">
          📞
        </a>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center text-white"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1604908176997-431bf7d6c9c2?w=1400') center/cover no-repeat",
          padding: "80px 20px",
          minHeight: "420px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="font-poppins font-bold mb-4"
            style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
          >
            ताजा नास्ता र सस्तो किराना – तपाईंको आफ्नै पसल!
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Momo, Chowmein, Coffee देखि दैनिक किराना सामान सबै एउटै ठाउँमा
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowOrder(true)}
              className="inline-block font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
              style={{ background: "#ff4500", color: "#fff" }}
              data-ocid="hero.open_modal_button"
            >
              🛵 Online Order गर्नुहोस्
            </button>
            <a
              href="tel:9816401411"
              className="inline-block font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                border: "2px solid white",
              }}
            >
              अहिले सम्पर्क गर्नुहोस्
            </a>
            <a
              href="#menu"
              className="inline-block font-semibold px-6 py-3 rounded-md border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
            >
              Menu हेर्नुहोस्
            </a>
          </div>
        </motion.div>
      </section>

      {/* Today Special Section */}
      <section className="py-10 px-5 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-mukta font-semibold text-center mb-6 text-3xl"
            style={{ color: "#800000" }}
          >
            🔥 Today Special
          </h2>
          <div className="flex justify-center">
            <CardBox className="p-6 text-center max-w-xs w-full">
              <div className="text-4xl mb-3">🥟☕</div>
              <p
                className="font-mukta font-bold text-xl"
                style={{ color: "#ff4500" }}
              >
                Momo + Coffee = Rs 150
              </p>
              <p className="text-sm text-gray-500 mt-1">आजको स्पेशल अफर!</p>
            </CardBox>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-mukta font-semibold text-center mb-6 text-3xl"
            style={{ color: "#800000" }}
          >
            हाम्रो बारेमा
          </h2>
          <p className="text-center text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
            हामी HJFP+V7P, Khutahat, Sunwal-२ मा रहेको एक भरोसायोग्य स्थानीय पसल हौं
            जहाँ तपाईंले सुपथ मूल्यमा दैनिक किराना सामान र स्वादिष्ट ताजा नास्ता पाउनुहुन्छ।
            हामी सधैं "घर जस्तै feel" र विश्वासिलो सेवा दिन प्रतिबद्ध छौं।
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-mukta font-semibold text-center mb-8 text-3xl"
            style={{ color: "#800000" }}
          >
            नास्ता Menu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {menuItems.map((item, i) => (
              <CardBox key={item.name} className="p-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  data-ocid={`menu.item.${i + 1}`}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3
                    className="font-mukta font-semibold text-lg mb-0.5"
                    style={{ color: "#800000" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">{item.english}</p>
                  <p className="font-semibold" style={{ color: "#ff4500" }}>
                    {item.price}
                  </p>
                </motion.div>
              </CardBox>
            ))}
          </div>

          <h2
            className="font-mukta font-semibold text-center mb-8 text-3xl"
            style={{ color: "#800000" }}
          >
            किराना सामान
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            {groceryItems.map((item, i) => (
              <CardBox key={item.name} className="p-6 text-center">
                <div data-ocid={`grocery.item.${i + 1}`}>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p
                    className="font-mukta font-semibold text-lg"
                    style={{ color: "#800000" }}
                  >
                    {item.name}
                  </p>
                </div>
              </CardBox>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Combo Offers Section */}
      <section className="py-16 px-5" style={{ background: "#fdf5f5" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-mukta font-semibold text-center mb-8 text-3xl"
              style={{ color: "#800000" }}
            >
              🎁 Combo Offers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {comboOffers.map((offer, i) => (
                <CardBox key={offer.text} className="p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    data-ocid={`combo.item.${i + 1}`}
                  >
                    <div className="text-3xl mb-3">{offer.emoji}</div>
                    <p
                      className="font-mukta font-bold text-xl"
                      style={{ color: "#ff4500" }}
                    >
                      {offer.text}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Special Combo Deal 🎉
                    </p>
                  </motion.div>
                </CardBox>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-mukta font-semibold text-center mb-8 text-3xl"
              style={{ color: "#800000" }}
            >
              किन हामी?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {whyUs.map((item, i) => (
                <CardBox key={item.text} className="p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    data-ocid={`whyus.item.${i + 1}`}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p
                      className="font-mukta font-semibold"
                      style={{ color: "#800000" }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                </CardBox>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-mukta font-semibold text-center mb-8 text-3xl"
            style={{ color: "#800000" }}
          >
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <CardBox key={r.author} className="p-6">
                <div data-ocid={`review.item.${i + 1}`}>
                  <p className="text-gray-700 italic mb-3 text-lg">{r.text}</p>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#800000" }}
                  >
                    — {r.author}
                  </p>
                  <div className="mt-2 text-yellow-400 text-lg">★★★★★</div>
                </div>
              </CardBox>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-5" style={{ background: "#fdf5f5" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-mukta font-semibold text-center mb-8 text-3xl"
              style={{ color: "#800000" }}
            >
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-[10px] shadow-card"
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-5 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-mukta font-semibold text-center mb-8 text-3xl"
            style={{ color: "#800000" }}
          >
            सम्पर्क गर्नुहोस्
          </h2>
          <div className="text-center mb-6 space-y-3 text-lg">
            <p className="text-gray-700">📍 HJFP+V7P, Khutahat, Sunwal 2</p>
            <p>
              📞{" "}
              <a
                href="tel:9816401411"
                className="font-semibold hover:underline"
                style={{ color: "#800000" }}
              >
                ९८१६४०१४११
              </a>
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 font-semibold px-5 py-2 rounded-md text-white hover:opacity-90 transition-opacity"
              style={{ background: "#800000" }}
            >
              📍 Google Maps मा हेर्नुहोस्
            </a>
          </div>
          <div className="rounded-[10px] overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0000000000005!2d83.60000000000001!3d27.700000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995950000000001%3A0x0!2zMjfCsDQyJzAwLjAiTiA4M8KwMzYnMDAuMCJF!5e0!3m2!1sen!2snp!4v1610000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Uttarayani Shop Location"
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 px-5 text-center text-white"
        style={{ background: "#800000" }}
      >
        <p className="font-mukta mb-2">
          उत्तरायणी किराना तथा नास्ता पसल | Fresh &amp; Hygienic | Supath Price
          &amp; Local Taste
        </p>
        <p className="text-sm opacity-75">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            className="underline hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      {/* Bottom Sticky Bar */}
      <div
        className="fixed bottom-0 left-0 w-full z-50 flex"
        data-ocid="sticky.panel"
      >
        <a
          href="tel:9816401411"
          className="flex-1 flex flex-col items-center justify-center py-3 text-white font-semibold text-sm gap-0.5 hover:brightness-110 transition-all"
          style={{ background: "#ff0000" }}
          data-ocid="sticky.link"
        >
          <span className="text-xl">📞</span>
          <span>Call</span>
        </a>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 text-white font-semibold text-sm gap-0.5 hover:brightness-110 transition-all"
          style={{ background: "#800000" }}
          data-ocid="sticky.link"
        >
          <span className="text-xl">📍</span>
          <span>Map</span>
        </a>
        <button
          type="button"
          onClick={() => setShowOrder(true)}
          className="flex-1 flex flex-col items-center justify-center py-3 text-white font-semibold text-sm gap-0.5 hover:brightness-110 transition-all"
          style={{ background: "#ff4500" }}
          data-ocid="sticky.open_modal_button"
        >
          <span className="text-xl">🛒</span>
          <span>Order</span>
        </button>
      </div>

      <AnimatePresence>
        {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
      </AnimatePresence>
    </div>
  );
}
