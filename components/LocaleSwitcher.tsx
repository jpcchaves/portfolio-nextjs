import { i18n } from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages = [
    { code: "en", translateKey: "english" },
    { code: "pt", translateKey: "portuguese" },
  ];

  const changeLanguage = async (i18n: i18n, language: string) => {
    window.localStorage.setItem("MY_LANGUAGE", language);
    await i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const LANGUAGE_SELECTOR_ID = "language-selector";
  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const selectedLanguage = languages.find(
    (language) => language.code === i18n.language
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className=" shadow-none"
        id={LANGUAGE_SELECTOR_ID}
      >
        <span
          className={`fi fi-${
            selectedLanguage?.code === "pt" ? "br" : "us"
          } fis] }`}
        />
      </button>

      {isOpen && (
        <div
          className="origin-bottom-left absolute"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="grid  bg-transparent shadow rounded" role="none">
            {languages.map((language, index) => {
              return (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(i18n, language.code)}
                  className={`block px-4 py-2 items-center inline-flex bg-gradient-to-r from-transparent to-transparent shadow-none`}
                  role="menuitem"
                >
                  {language.code === "pt" && (
                    <span className={`fi fi-br fib`} />
                  )}
                  {language.code === "en" && (
                    <span className={`fi fi-us fib`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default LocaleSwitcher;
