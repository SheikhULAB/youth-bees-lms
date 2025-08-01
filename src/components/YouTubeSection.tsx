import { Play } from "lucide-react";

export const YouTubeSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Watch our platform overview and discover how we're transforming education
          </p>
        </div>
        
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0JxRGtZMhcY"
            title="Platform Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-2 shadow-lg">
            <Play className="h-4 w-4 text-white fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
};