import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { Navbar } from './Navbar';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chlebbit',
	description: 'Najchlebsza appka społecznościowa',
	viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
	children,
	authModal,
}: {
	children: React.ReactNode;
	authModal: React.ReactNode;
}) {
	return (
		<html lang='en' className={inter.className} suppressHydrationWarning>
			<body className='min-h-screen antialiased'>
				<Providers>
					<Navbar />
					{authModal}
					<div className='container mx-auto h-full pt-24'>
						{children}
					</div>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
