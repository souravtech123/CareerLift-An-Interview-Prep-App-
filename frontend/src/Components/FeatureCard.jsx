export default function FeatureCard({ icon, title, description }) {
    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-2xl hover:scale-105 transition-transform w-64 text-center">
        {/* Icon */}
        <img src={icon} alt={title} className="w-30 h-30 rounded-2xl mb-4" />
        {/* Title */}
        <h3 className="font-semibold text-xl">{title}</h3>
  
        {/* Description */}
        <p className="text-gray-500 mt-2 text-sm">{description}</p>
      </div>
    );
  }
  