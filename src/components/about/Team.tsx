import React from 'react';
import { translations } from '../../utils/translations';
import { TranslationSchema } from '../../types';

interface TeamProps {
  language: string;
}

const Team: React.FC<TeamProps> = ({ language }) => {
  const t = translations[language as keyof typeof translations] as TranslationSchema;

  return (
    <section id="team" className="py-16 bg-neutral-surface">
      <div className="container mx-auto px-4">
        <h2 className="headline2 text-center mb-12">{t.team?.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chamo - CEO */}
          {t.team?.ceo && (
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary rounded-full"></div>
                <img
                  src={
                    t.team.ceo.image ||
                    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
                  }
                  alt={`${t.team.ceo.name} - ${t.team.ceo.role}`}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
                />
              </div>
              <h3 className="headline5 font-bold">{t.team.ceo.name}</h3>
              <p className="headline6 text-primary mb-2">{t.team.ceo.role}</p>
              <p className="body1 text-gray-600 max-w-xs mx-auto">{t.team.ceo.description}</p>
            </div>
          )}

          {/* Ana Silva - Care Manager */}
          {t.team?.manager && (
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-info rounded-full"></div>
                <img
                  src={
                    t.team.manager.image ||
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80'
                  }
                  alt={`${t.team.manager.name} - ${t.team.manager.role}`}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
                />
              </div>
              <h3 className="headline5 font-bold">{t.team.manager.name}</h3>
              <p className="headline6 text-info mb-2">{t.team.manager.role}</p>
              <p className="body1 text-gray-600 max-w-xs mx-auto">{t.team.manager.description}</p>
            </div>
          )}

          {/* Rafael Costa - Trainer */}
          {t.team?.trainer && (
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-success rounded-full"></div>
                <img
                  src={
                    t.team.trainer.image ||
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  }
                  alt={`${t.team.trainer.name} - ${t.team.trainer.role}`}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
                />
              </div>
              <h3 className="headline5 font-bold">{t.team.trainer.name}</h3>
              <p className="headline6 text-success mb-2">{t.team.trainer.role}</p>
              <p className="body1 text-gray-600 max-w-xs mx-auto">{t.team.trainer.description}</p>
            </div>
          )}
        </div>

        {t.team?.button && (
          <div className="text-center mt-12">
            <button className="btn-primary">{t.team.button}</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
