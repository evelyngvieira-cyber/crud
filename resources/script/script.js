// let nomes = ["Ana Clara" ,"Denise Martins" ,"Rayssa Giovanelly" ,"Roger Alcantara", "" ,"", "", "", "", "", "", "", "", "", "", "", "",""]

// nomes.forEach(nome => {
//     console.log(nome)
// });

// // Enquanto 
// // Enquanto a condição for verdadeira, o laço continuará se repetindo
// let nome = prompt ("Digite o nome de usuário")
// while(nome !== "Thiago"){
//     console.log ("Insira o nome correto");
//     nome = prompt("Digite o nome de usuário novamente")
// }
// let tarefas = ["Estudar","Lavar louça","Ir para aula"]
// let opção = number(prompt("Escolha uma opção a seguir"))

// let tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];
// let opcao = "";

let tarefas = ["Estudar","Lavar a louça","Ir para aula"]
let opcao = Number(prompt("Escolha uma opção a seguir:"));

while(opcao !== 0 ){
    opcao = Number(prompt(
        "== MINHA TODO LIST ==\n" +
        "Escolha uma opção:\n" +
        "01 - Cadastrar tarefa\n" +
        "02 - Listar tarefas\n" +
        "03 - Buscar tarefa\n" +
        "04 - Atualizar tarefa\n" +
        "05 - Excluir tarefa\n" +
        "06 - Filtrar tarefas\n" +
        "07 - Organizar tarefas\n" +
        "08 - Contar tarefas\n" +
        "09 - Mover tarefa para o início\n" +
        "10 - Limpar lista\n" +
        "0 - Sair"
    ));
};
    switch (opcao) {
        case "1":
            let nova = prompt("Nome da nova tarefa:");
            if (nova === "" || nova === null) { console.log("Não pode em branco!"); }
            else { tarefas.push(nova.trim()); console.log(`Adicionada: ${nova}`); }
            break;
        case "2":
            if (tarefas.length === 0) { console.log("Nenhuma tarefa."); }
            else { tarefas.forEach((t, i) => console.log(`${i + 1} - ${t}`)); }
            break;
        case "3":
            let busca = prompt("Buscar tarefa:");
            if (tarefas.includes(busca)) { console.log(`"${busca}" está cadastrada!`); }
            else { console.log(`"${busca}" NÃO encontrada.`); }
            break;
        case "4":
            let atual = prompt("Nome atual:"); let novoNome = prompt("Novo nome:");
            let pos = tarefas.indexOf(atual);
            if (pos === -1) { console.log("Não encontrada."); }
            else { tarefas[pos] = novoNome; console.log("Atualizada!"); }
            break;
        case "5":
            let excluir = prompt("Nome para excluir:");
            let idxExcluir = tarefas.findIndex(t => t === excluir);
            if (idxExcluir === -1) { console.log("Não encontrada."); }
            else { tarefas.splice(idxExcluir, 1); console.log(`"${excluir}" removida!`); }
            break;
        case "6":
            let filtro = prompt("Letra/palavra para filtrar:");
            let filtradas = tarefas.filter(t => t.toLowerCase().includes(filtro.toLowerCase()));
            console.log(filtradas.length === 0? "Nenhuma encontrada." : filtradas);
            break;
        case "7":
            let org = prompt("1-Add início(unshift) 2-Remove início(shift) 3-Remove fim(pop)");
            if (org === "1") { tarefas.unshift(prompt("Nome:")); }
            else if (org === "2") { tarefas.shift(); }
            else if (org === "3") { tarefas.pop(); }
            console.log(tarefas);
            break;
        case "8":
            if (tarefas.length === 0) { console.log("Nenhuma tarefa."); }
            else { console.log(`Você tem ${tarefas.length} tarefas.`); }
            break;
        case "9":
            let mover = prompt("Qual mover para o início?");
            let idxMover = tarefas.findIndex(t => t === mover);
            if (idxMover!== -1) { let movida = tarefas.splice(idxMover, 1)[0]; tarefas.unshift(movida); }
            console.log(tarefas);
            break;
        case "10":
            if (confirm("Apagar TUDO?")) { tarefas.splice(0, tarefas.length); console.log("Lista limpa!"); }
            break;
    }

