import Navbar from '@/features/home/components/Navbar';
import Header from '@/features/home/components/Header';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <h1>Welcome to Our Store</h1>
      </main>
    </div>
  );
}