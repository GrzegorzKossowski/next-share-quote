import Feed from '@components/Feed';
import Image from 'next/image';

export default function Home() {
    return (
        <section className='w-full h-screen'>
            <div className='component flex flex-col items-center justify-center h-full'>
                <h1 className='blue_gradient text-5xl font-extrabold md:text-6xl'>
                    Discover & Share
                </h1>
                <h3 className='orange_gradient text-2xl font-bold md:text-3xl mt-5'>
                    Your Best and Amazing Quotes
                </h3>
                <p className='max-w-md text-center md:max-w-3xl mt-5 text-lg md:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis voluptate corporis perferendis earum quasi soluta
                    impedit, magnam veritatis enim optio nemo, adipisci ex minus
                    sapiente explicabo quos. Inventore, enim repellendus.
                </p>
            </div>
        </section>
    );
}
