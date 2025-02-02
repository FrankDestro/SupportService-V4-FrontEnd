import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importando a localidade em português
import './Clock.css'; // Importando o arquivo CSS

const Relogio: React.FC = () => {
  const [hora, setHora] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [diaSemana, setDiaSemana] = useState<string>(''); // Estado para o dia da semana

  useEffect(() => {
    const atualizarRelogio = () => {
      const agora = new Date();
      setHora(format(agora, 'HH:mm:ss', { locale: ptBR })); // Formato de hora com localidade
      setData(format(agora, 'dd/MM/yyyy', { locale: ptBR })); // Formato de data com localidade

      // Capitalizar a primeira letra do dia da semana
      const dia = format(agora, 'EEEE', { locale: ptBR });
      setDiaSemana(dia.charAt(0).toUpperCase() + dia.slice(1)); // Capitalizando a primeira letra
    };

    const intervalo = setInterval(atualizarRelogio, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relogio-container">
      <div className="relogio-dia-semana">{diaSemana} {data} </div> 
      <div className="relogio-data"></div>
      <div className="relogio-hora">{hora}</div>
    </div>
  );
};

export default Relogio;
