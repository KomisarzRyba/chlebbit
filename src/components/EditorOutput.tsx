'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const Output = dynamic(
	async () => (await import('editorjs-react-renderer')).default,
	{ ssr: false }
);

interface EditorOutputProps {
	content: any;
}

const style = {
	paragraph: {
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
	},
};

const renderers = {
	image: CustomImageRenderer,
	code: CustomCodeRenderer,
};

const EditorOutput: React.FC<EditorOutputProps> = ({ content }) => {
	return (
		<Output
			data={content}
			className='text-sm'
			style={style}
			renderers={renderers}
		/>
	);
};

function CustomImageRenderer({ data }: any) {
	const src = data.file.url;

	return (
		<div className='relative w-full min-h-[15rem]'>
			<Image alt='post image' className='object-contain' fill src={src} />
		</div>
	);
}

function CustomCodeRenderer({ data }: any) {
	return (
		<pre className='bg-slate-900 border border-slate-500 rounded-md p-4'>
			<code className='text-slate-100 text-sm'>{data.code}</code>
		</pre>
	);
}

export default EditorOutput;
