import React from 'react';

const Contato = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Contato</h1>
            <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Entre em Contato Conosco</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="nome">Nome</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            required 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="mensagem">Mensagem</label>
                        <textarea 
                            id="mensagem" 
                            name="mensagem" 
                            rows="4" 
                            required 
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Enviar
                    </button>
                </form>
            </div>
            <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold">Dados de Contato</h3>
                <p className="mt-2">Telefone: (11) 1234-5678</p>
                <p className="mt-1">E-mail: contato@criticasdecinema.com</p>
                <p className="mt-1">Endereço: Rua das Fitas, 123, São Paulo, SP</p>
            </div>
        </div>
    );
};

export default Contato;
