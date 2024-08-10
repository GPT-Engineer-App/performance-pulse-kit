import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-800 flex items-center justify-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />

        <p className="text-lg text-gray-700 mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats have become 
          one of the most popular pets worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Excellent hunters with keen senses</li>
                <li>Flexible bodies and sharp retractable claws</li>
                <li>Independent yet affectionate with their owners</li>
                <li>Average lifespan of 12-18 years</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Siamese</li>
                <li>Maine Coon</li>
                <li>Persian</li>
                <li>British Shorthair</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-gray-600">
          Whether you're a cat owner or just an admirer, these furry friends never fail to captivate us with their charm and personality.
        </p>
      </div>
    </div>
  );
};

export default Index;
