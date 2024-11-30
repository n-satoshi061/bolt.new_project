import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to My App
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a modern Next.js application built with best practices.
      </p>
      <div className="space-x-4">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
}