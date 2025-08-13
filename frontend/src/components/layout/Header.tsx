import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-2">
      {subtitle && <div className="tag">{subtitle}</div>}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold font-heading"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
