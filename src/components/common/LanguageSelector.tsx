import { useTranslation } from 'react-i18next';
import ChFlag from '../../assets/flags/ch.svg';
import GbFlag from '../../assets/flags/gb.svg';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('de')} aria-label="Deutsch">
        <img src={ChFlag} alt="Swiss Flag" className="w-6 h-6" />
      </button>
      <button onClick={() => changeLanguage('en')} aria-label="English">
        <img src={GbFlag} alt="UK Flag" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LanguageSelector; 