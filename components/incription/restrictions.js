import { useState } from 'react';

const PhoneInput = () => {
    const [phone, setPhone] = useState('');
  
    const formatPhoneNumber = (text) => {
      // Supprimer les caractères non numériques
      const cleanedText = text.replace(/\D/g, '');
      
      // Ajouter un espace après chaque deux chiffres
      const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1 ');
  
      // Limiter à 10 chiffres
      const limitedText = formattedText.slice(0, 12); // Pour 10 chiffres et 2 espaces
  
      setPhone(limitedText);
    };
  };


export default PhoneInput;