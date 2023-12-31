import React from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import UserAuthForm from './UserAuthForm';

const SignIn = () => {
	return (
		<div className='container w-full mx-auto flex flex-col justify-center space-y-6 sm:w-96'>
			<div className='flex flex-col space-y-2 text-center'>
				<Icons.logo className='w-6 h-6 mx-auto' />
				<h1 className='text-2xl font-semibold tracking-tight'>
					Welcome back!
				</h1>
				<p className='text-sm max-w-xs mx-auto'>
					By continuing you are setting up a Chlebbit account and you
					agree to our User Agreement and Privacy Policy.
				</p>
				<UserAuthForm />
				<p className='px-8 text-center text-sm'>
					New to Chlebbit?{' '}
					<Link
						href='/sign-up'
						className='hover:text-accent-foreground underline'>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
