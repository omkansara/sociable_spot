import React from 'react';
import Sittinglady from './components/UI/Sittinglady';

const About = () => {
    const teamMembers = [
        {
            name: 'Khushi Shah',
            position: 'CEO',
            bgColor: '#D2F6D5'
            //image: TeamMember1
        },
        {
            name: 'Priyank Joshi',
            position: 'CTO',
            bgColor: '#D2F6D5'
            // image: TeamMember2
        },
        {
            name: 'Mann Dave',
            position: 'Developer',
            bgColor: '#D2F6D5'
            //image: TeamMember3
        },
        {
            name: 'Om',
            position: 'Developer',
            bgColor: '#D2F6D5'
            //image: TeamMember4
        },
        {
            name: 'Megh',
            position: 'Developer',
            bgColor: '#D2F6D5'
            //image: TeamMember5
        },

    ];

    return (
        <div>
            <div className="about-us-page min-h-screen p-10">
                <section className="about-section flex items-center justify-between mb-20">
                    <div className="w-1/2">
                        <Sittinglady />
                    </div>
                    <div className="w-1/2 pl-10">
                        <h1 className="text-3xl font-semibold text-center mt-2 mb-4">Our Story</h1>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula.
                            Morbi mattis pretium eros, ut mollis lorem pharetra nec. Duis vestibulum eget ligula at elementum.
                        </p>
                    </div>
                </section>

                <section className="about-section flex items-center justify-between mb-20">
                    <div className="w-1/2 pr-10">
                        <h1 className="text-3xl font-semibold text-center mb-4">Our Mission</h1>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula.
                            Morbi mattis pretium eros, ut mollis lorem pharetra nec. Duis vestibulum eget ligula at elementum.
                        </p>
                    </div>
                    <div className="w-1/2 pl-10">
                        <h1 className="text-3xl font-semibold text-center mb-4">Our Vision</h1>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula.
                            Morbi mattis pretium eros, ut mollis lorem pharetra nec. Duis vestibulum eget ligula at elementum.
                        </p>
                    </div>
                </section>

                {/* Team Members Section */}
                <section className="team-members-section mt-8">
                    <h1 className="text-3xl font-semibold text-center mb-8">Our Team Members</h1>
                    <div className="grid grid-cols-2 ml-80 mr-40">
                        {/* First row with two columns */}
                        {teamMembers.slice(0, 2).map((member, index) => (
                            <div key={index} className="member-frame flex flex-col items-center" style={{ backgroundColor: member.bgColor, height: '250px', width: '200px' }}>
                                <div className="member-content p-4">
                                    <img src={member.image} alt={member.name} className="rounded-full border border-black mb-2 w-32 h-32 object-cover" />
                                    <h2 className="text-lg font-semibold text-center">{member.name}</h2>
                                    <p className="text-sm text-center">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second row with three columns */}
                    <div className="grid grid-cols-3 ml-40 mr-40 mt-8">
                        {teamMembers.slice(2).map((member, index) => (
                            <div key={index} className="member-frame flex flex-col items-center" style={{ backgroundColor: member.bgColor, height: '250px', width: '200px' }}>
                                <div className="member-content p-4">
                                    <img src={member.image} alt={member.name} className="rounded-full border border-black mb-2 w-32 h-32 object-cover" />
                                    <h2 className="text-lg font-semibold text-center">{member.name}</h2>
                                    <p className="text-sm text-center">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </div>
    );
}

export default About;
