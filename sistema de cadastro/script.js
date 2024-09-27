// Array de alunos (inicialmente vazio)
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

// Função para cadastrar um novo aluno
document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;

    const novoAluno = { nome, idade, curso, emails };
    alunos.push(novoAluno);

    // Salva os alunos no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Redireciona para a página de lista
    // window.location.href = 'lista_alunos.html';
    window.open('lista_alunos.html', '_blank');
});
document.getElementById('toggleTheme').addEventListener('click', function() {
    const body = document.body;
    const container = document.querySelector('.container');
    const inputs = document.querySelectorAll('input');
    const buttons = document.querySelectorAll('button');
    const headings = document.querySelector('h1');
    const links = document.querySelectorAll('a');
    const tables = document.querySelectorAll('table');
    
    body.classList.toggle('dark');
    body.classList.toggle('light');
    container.classList.toggle('dark');
    container.classList.toggle('light');
    headings.classList.toggle('dark');
    headings.classList.toggle('light');
    
    inputs.forEach(input => {
        input.classList.toggle('dark');
        input.classList.toggle('light');
    });
    
    buttons.forEach(button => {
        button.classList.toggle('dark');
        button.classList.toggle('light');
    });
    
    links.forEach(link => {
        link.classList.toggle('dark');
        link.classList.toggle('light');
    });
    
    tables.forEach(table => {
        table.classList.toggle('dark');
    });
});
