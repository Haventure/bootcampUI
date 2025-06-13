import React from "react";

const languages = [
   "English", "English (UK)", "Afrikaans", "العربية", "Čeština", "Dansk", "Deutsch", "Ελληνικά", "Español", "Español (España)", "فارسی", "Suomi", "Français", "עברית", "Bahasa Indonesia", "Italiano", "日本語", "한국어", "Bahasa Melayu", "Norsk", "Nederlands", "Polski"
];

const LanguageSelector: React.FC = () => {
  return (
    <div className="text-[#a8a8a8] text-xs mt-[12px] mr-[6px] flex items-center justify-center gap-2.5">
      <select className="bg-transparent w-[5%] outline-none border-0 p-1 rounded">
        {languages.map((lang, idx) => (
          <option key={idx} value={lang} className="text-black outline-none border-0">
            {lang}
          </option>
        ))}
      </select>
      <span>© 2025 Instagram from Meta</span>
    </div>
  );
};

export default LanguageSelector;
