import React from 'react';
import { translations } from '../../utils/translations';
import { TranslationSchema, TeamMember } from '../../types';

interface TeamProps {
  language: string;
}

const Team: React.FC<TeamProps> = ({ language }) => {
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  if (!t?.team?.members || t.team.members.length === 0) {
    return null;
  }

  return (
    <section id="team" className="py-16 bg-neutral-surface dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#ff1655] dark:text-[#ff1655] font-sour-gummy">
          {t.team?.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {t.team.members.map((member: TeamMember, index: number) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src={
                    member.image ||
                    `https://via.placeholder.com/150/cccccc/808080?text=${member.name?.charAt(0)}`
                  }
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  style={
                    member.name === 'Chamo'
                      ? {
                          objectFit: 'cover',
                          objectPosition: 'center 30%',
                          transform: 'scale(1.1)',
                        }
                      : {}
                  }
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-sour-gummy">
                {member.name}
              </h3>
              <p className="text-md text-primary dark:text-primary-light mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
