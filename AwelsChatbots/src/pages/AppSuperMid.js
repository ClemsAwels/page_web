import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    // Charger dynamiquement le script DruidWebchat
    const script = document.createElement("script");
    script.src = "https://awels.community.druidplatform.com/v2/druid_webchat_v2.js";
    script.defer = true;
    document.body.appendChild(script);


    script.onload = () => {
      // Ajouter un délai avant l'initialisation du chatbot
      setTimeout(() => {
        if (window.DruidWebchat_v2) {
          window.DruidWebchat_v2.init({
            botId: "0f1a67d4-3178-4cd9-a402-08dcea104ccc",
            baseUrl: "https://druidapi.comm.eu.druidplatform.com",
            queryParams: "",
            conversationTokenEnabled: true,
            UI: {
              parentElement: document.querySelector(".druid-webchat-container"),
              fullscreen: true,
            },
          });
        } else {
          console.error("DruidWebchat_v2 n'est pas disponible");
        }
      }, 1);
    };

    script.onerror = () => {
      console.error("Le script DruidWebchat_v2 n'a pas pu être chargé.");
    };

    return () => {
      // Nettoyage : supprimer le script si nécessaire
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200">
      <div className="flex flex-col md:flex-row mt-8 md:mt-12 flex-grow">
        <div className="md:w-1/3 lg:w-1/4 flex flex-col items-center p-4 space-y-8">
          <div className="bg-gray-800 rounded-full shadow-lg border-4 border-blue-400">
            <img src="/logo_supermid.webp" alt="Logo" className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full"/>
          </div>

          {/* Section des Compétences */}
          <div className="text-center bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full mt-4 md:mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Compétences</h2>
            <ul className="text-gray-300 space-y-2 md:space-y-4 list-disc list-inside text-base md:text-lg">
              <li>Configuration de chatbot</li>
              <li>Résolution de problèmes</li>
              <li>Intégration de systèmes externes</li>
              <li>Analyse de performance</li>
              <li>Personnalisation avancée</li>
              <li>Aide à l'apprentissage</li>
            </ul>
          </div>
        </div>

        {/* Bloc Description du bot */}
        <div className="flex flex-col items-center w-full md:w-2/3 lg:w-3/5 max-w-full md:max-w-5xl space-y-4">
          <div className="text-center bg-gray-800 p-4 md:p-6 rounded-t-lg shadow-lg w-full">
            <h1 className="text-2xl md:text-4xl font-extrabold text-blue-400 mb-4">Bienvenue sur notre chatbot IA spécialisé sur l'EFREI !</h1>
            <p className="text-gray-300 mt-2 leading-relaxed text-sm md:text-base">
              Ce chatbot, conçu pour répondre précisément à toutes vos questions sur l'EFREI, utilise les dernières avancées en intelligence artificielle conversationnelle pour vous offrir une expérience d’assistance interactive et efficace.
            </p>
          </div>
          {/* Espace pour le chatbot */}
          <div className="druid-webchat-container bg-gray-800 p-4 md:p-4 rounded-b-lg shadow-lg w-full h-[80vh]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
