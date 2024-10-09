import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Aqui você faria a requisição para sua API de criação de conta
    console.log('Criando conta para:', email);
    navigate('/login');
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleCreateAccount}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
