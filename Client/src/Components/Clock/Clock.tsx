import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Relogio: React.FC = () => {
  const [hora, setHora] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [diaSemana, setDiaSemana] = useState<string>(''); 
  useEffect(() => {
    const atualizarRelogio = () => {
      const agora = new Date();
      setHora(format(agora, 'HH:mm:ss', { locale: ptBR })); 
      setData(format(agora, 'dd/MM/yyyy', { locale: ptBR })); 

      const dia = format(agora, 'EEEE', { locale: ptBR });
      setDiaSemana(dia.charAt(0).toUpperCase() + dia.slice(1));
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
