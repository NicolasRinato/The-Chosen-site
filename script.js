let imagens = [
    "jesus.png" ,"pedro.webp", "andre.jpg", "joao.jpg", "mateus.jpg", "tome.webp", "felipe.jpg"
    ,"nathanael.jpg", "judast.webp", "tiagome.jpeg", "zelote.jpg", "judasi.webp", "tiagoma.jpg"
]

let personagens = 
[   "Jesus Cristo", "Simão Pedro", "André", "João", "Mateus", "Tomé"
    ,"Felipe", "Nathanael", "Judas Tadeu", "Tiago Menor"
    ,"Simão Zelote", "Judas Iscariotes", "Tiago Maior"
]

let ator = 
[   "Jonathan Roumie", "Shahar Isaac", "Noah James", "George H. Xanthis."
    ,"Paras Patel", "Joey Vahedi", "Reza Diako"
    ,"Austin Reed Alleman", "Giovani Cairo", "Jordan Walker Ross"
    ,"Alaa Safi", "Luke Dimyan", "Abe Bueno-Jallad"
]

let descricao = 
[
    "Jesus Cristo — o Filho de Deus, Messias prometido e mestre espiritual. Na série, é retratado como um homem compassivo, humano e acessível, mas também com profunda autoridade e sabedoria divina. É o centro da narrativa, responsável por transformar a vida dos discípulos e revelar o amor de Deus por meio de seus milagres e ensinamentos."
    ,"Simão, pescador em Cafarnaum, irmão de André; em certo momento Jesus lhe dá o nome “Pedro” (que significa “rocha”)."
    ,"Irmão mais novo de Simão Pedro, também pescador, entusiasta da missão de Jesus."
    ,"Filho de Zebedeu, irmão de “Big James”, pescador, parte do círculo interno de Jesus."
    ,"Ex-cobrador de impostos (publicano) em Cafarnaum, excluído pela comunidade judaica, chamado por Jesus para segui-lo."
    ,"Ex-atendente/fornecedor de banquetes (na série ele era “caterer”), daquele tipo que gosta de lógica e números. Na Bíblia, é conhecido como “Tomé o incrédulo”."
    ,"Amigo de André, de Betsaida; um dos discípulos de João Batista antes de seguir Jesus."
    ,"Ex-arquiteto de Cesaréia Filipo, de Cana; amigo de Felipe."
    ,"Ex-pedreiro de pedra em Betsaida; um dos apóstolos menos destacados na Bíblia, mas a série dá mais vida a ele."
    ,"O “pequeno” Tiago, filho de Alfeu; na série representado como alguém que estava para entrar no coro do Templo em Jerusalém."
    ,"Ex-zelote de Asquelom (movimento nacionalista judaico) — alguém com passado político/militante."
    ,"Apóstolo que se torna traidor na narrativa bíblica; na série ele é retratado com mais nuance — não apenas vilão, mas alguém complexo."
    ,"Irmão de João, filho de Zebedeu; pescador também, parte do círculo íntimo."
]

let particularidade = 
[
    "A série mostra um Jesus mais próximo e real, que sorri, ri, se emociona e se cansa, tornando-o mais humano e relacionável. Jonathan Roumie ficou conhecido mundialmente por sua atuação sensível e respeitosa, sendo elogiado por transmitir serenidade e empatia. Ele mesmo é cristão praticante e já afirmou que o papel transformou sua vida pessoal e espiritual."
    ,"Na série, Peter é retratado como alguém impulsivo, com dúvidas, mas chamado para liderança."
    ,"André aparece como alguém pronto para servir, impulsivo em defender Jesus."
    ,"Na série, João está aprendendo a controlar sua impulsividade e está envolvido no registro dos eventos."
    ,"Ele lida com rejeição, busca aceitação e encontra uma nova família através de Jesus."
    ,"Na série, Thomas lida com dúvida — especialmente quando algo que ama se perde (na trama: sua promessa de casamento, etc.)."
    ,"Na série ele é retratado partindo de uma amizade com André e questionamentos espirituais que o levam a seguir Jesus."
    ,"Representa alguém fora da pesca/tradição comum dos apóstolos — o que dá uma diversidade à equipe."
    ,"O ator mencionou que teve que inventar um pouco da história de Thaddeus porque a Bíblia fala pouco sobre ele."
    ,"Mais jovem/aprendiz, trazendo outra dinâmica ao grupo."
    ,"Traz o elemento de tensão e paixão pela causa, o que gera conflito e crescimento."
    ,"Representa a traição, o conflito interno, o arrependimento — a narrativa ganha profundidade pelo olhar da série."
    ,"Na série, lado de liderança junto com Pedro e João, lida com expectativas, mistérios da fé."
]

let indice = 0

function atualizaPerson() {
    let imagemTroca = document.querySelector("img#personagem-info")
    imagemTroca.setAttribute('src',`Imagens/${imagens[indice]}`)
    let personagemTroca = document.querySelector("h3#p-info")
    personagemTroca.innerHTML = `${personagens[indice]}`
    let atorTroca = document.querySelector("p#p-info1")
    atorTroca.innerHTML = `<strong>Ator:</strong> ${ator[indice]}`
    let descTroca = document.querySelector("p#p-info2")
    descTroca.innerHTML = `<strong>Descrição:</strong> ${descricao[indice]}`
    let particularidadeTroca = document.querySelector("p#p-info3")
    particularidadeTroca.innerHTML = `<strong>Particularidade:</strong> ${particularidade[indice]}`
}

function nextPerson() {
    if (indice >= personagens.length - 1) {
        indice = 0
    } else {
        indice+= 1
    }
    atualizaPerson()
}

function backPerson() {
    if (indice <= 0) {
        indice = personagens.length - 1
    } else {
        indice -= 1
    }
    atualizaPerson()
}