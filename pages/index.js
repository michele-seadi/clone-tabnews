import { useEffect, useState } from "react";

function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateClock() {
      let d = new Date();
      setTime(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
    }

    const interval = setInterval(updateClock, 1000);

    // Chama a função uma vez para definir o tempo imediatamente
    updateClock();

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 id="demo">Plataforma de testes: Aprendizagem WEB Mensagem 5! {time}</h1>
  );
}

export default Home;
