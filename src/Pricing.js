import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Pricing = () => {
    const Card = ({ title, price, description, features, bgColor, textColor, buttonColor, lineColor, circleBgColor, tickColor }) => (
        <div className={`h-auto w-80 flex justify-center items-center rounded-2xl ${bgColor} m-4`}>
            <div className={`flex flex-col ${textColor}`}>
                <div className="flex flex-row items-center pl-4">
                    <p className="font-semibold rounded-t py-2 mr-20">{title}</p>
                    {title === "GROWTH" && <p className="text-xs text-black font-semibold bg-green-300 rounded-full py-1 px-4">Popular</p>}
                </div>
                <div className="flex flex-row items-center pl-4 gap-3">
                    <div className="flex flex-row gap-1">
                        <p className="text-5xl font-semibold">{price}</p>
                    </div>
                    <div className="relative h-24 w-24">
                        <div className="absolute bottom-6 right-11">/month</div>
                    </div>
                </div>
                <p className='px-4 py-2 text-sm font-thin'>{description}</p>
                <div className={`col-span-11 h-[0.5px] ${lineColor} bg-opacity-50 mx-4`}></div>
                <div className="grid grid-cols-12 px-4 gap-y-3 pt-10">
                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <div style={{ backgroundColor: circleBgColor }} className="rounded-full p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={tickColor} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="col-span-11 text-sm flex items-center font-semibold pl-2">{feature}</div>
                        </React.Fragment>
                    ))}
                    <div className="col-span-12 mt-5 mb-5">
                        <button className={`rounded-full  ${buttonColor} font-semibold w-full py-3`}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Header />
            <div className="min-h-screen p-10 flex flex-col items-center">
                <div className="text-center text-black text-3xl font-bold mt-10 mb-8 border-b-2 border-green-800">Pricing</div>
                <div className='text-center text-green-500 text-xl font-semibold mb-8'>Affordable pricing plans</div>
                <div className="flex flex-wrap justify-center">
                    <Card
                        title="BASIC"
                        price="₹99"
                        description="For small businesses"
                        features={[
                            "Basic features",
                            "Up to 100,000 tracked visits",
                            "Email support",
                            "Web access only",
                            "Up to 3 team members"
                        ]}
                        bgColor="bg-white"
                        textColor="text-green-500"
                        buttonColor="text-white bg-green-500"
                        lineColor="bg-green-500"
                        circleBgColor="#38a169" // Tailwind's green-500 color
                        tickColor="white"
                    />
                    <Card
                        title="GROWTH"
                        price="₹199"
                        description="Best for growing businesses"
                        features={[
                            "Everything on Basic plan",
                            "Up to 1,000,000 tracked visits",
                            "Premium support",
                            "Mobile app",
                            "Up to 10 team members"
                        ]}
                        bgColor="bg-green-500"
                        textColor="text-white"
                        buttonColor="bg-white text-green-500"
                        lineColor="bg-white"
                        circleBgColor="white"
                        tickColor="green"
                    />
                    <Card
                        title="ENTERPRISE"
                        price="₹399"
                        description="For established businesses"
                        features={[
                            "Everything on Growth plan",
                            "Unlimited tracked visits",
                            "Dedicated support",
                            "Mobile and web access",
                            "Up to 20 team members"
                        ]}
                        bgColor="bg-white"
                        textColor="text-green-500"
                        buttonColor="text-white bg-green-500"
                        lineColor="bg-green-500"
                        circleBgColor="#38a169" // Tailwind's green-500 color
                        tickColor="white"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pricing;
