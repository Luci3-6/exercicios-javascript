/* mudei: nova paleta de cores */
:root {
    --cor-fundo: #111827;
    --cor-principal: #7c3aed;
    --cor-card: #1f2937;
    --cor-texto: #f9fafb;
    --cor-destaque: #a78bfa;
}/* mudei: fundo e cor do texto */
body {
    font-family: Arial, sans-serif;
    background-color: var(--cor-fundo);
    margin: 0;
    color: var(--cor-texto);
}

/* mudei: nova cor do cabeçalho */
header {
    background-color: var(--cor-principal);
    color: white;
    text-align: center;
    padding: 30px;
}/* mudei: cards mais largos e com novo visual */
.filme {
    padding: 20px;
    border-radius: 12px;
    width: 260px;
    color: var(--cor-texto);
    background-color: var(--cor-card);
    transition: all 0.3s ease;
}/* mudei: novo efeito hover com elevação */
.filme:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.4);
    border: 1px solid var(--cor-destaque);
    cursor: pointer;
}/* mudei: nova cor para Ação */
.acao {
    background-color: #991b1b;
}

/* mudei: nova cor para Drama */
.drama {
    background-color: #1d4ed8;
}

/* mudei: nova cor para Ficção */
.ficcao {
    background-color: #6d28d9;
}

/* mudei: nova cor para Animação */
.animacao {
    background-color: #047857;
}

/* mudei: nova cor para Romance */
.romance {
    background-color: #be185d;
}