import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-[80vh]"
                style={{
                    backgroundImage: "url(/assets/Banner-min.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-left flex justify-start">
                    <div className="max-w-md ml-8 text-left">  {/* Added margin-left for some space */}
                        <h1 className="mb-5 text-5xl font-bold text-white">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn text-black rounded-full p-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
