module.exports = {

  prompts: false,

  // Aqui estão as variáveis que serão acessadas pelos templates
  templateData: {

    // Informações da ONG
    conf: {
	  disqus: "ongboilerplate",
      name: "Minha ong",
      description: "Descrição simples da ONG",
//      address: "Boulevard Kukulcan, 30",
      city: "Minha Cidade",
      state: "Meu estado"
    },

    // Informações do site
    site: {
      theme: "default",
      url: "http://confboilerplate.com"
//      ,googleanalytics: "UA-33656081-1"
    },

    // Sessões ativas do site
    // comente com '//' para desativar
    // Você também pode mudar a ordem de aparição no site
    sections: [
      'about',        // Quem somos?
      'initiatives',  // Iniciativas
      'help',         // Como ajudar?
      'members',      // Membros, pessoas
      'schedule',     // Agenda
      'contact',      // Contato
      //'location',     // Localização
      'partners'      // Parceiros, apoio
    ],

    // Use para traduzir os nomes das sessões ou mudar para algo que te sirva melhor
    labels: {
      about: "Quem somos?",
      initiatives: "Iniciativas",
      help: "Como ajudar?",
      members: "Associados",
      schedule: "Agenda",
      contact: "Contato",
      location: "Localização",
      partners: "Apoio"
    },

    members: [
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Lorem ipsum Adipisicing et velit commodo reprehenderit nostrud deserunt mollit irure ut aliquip incididunt mollit qui minim occaecat cupidatat commodo culpa consectetur nisi do commodo proident elit in consequat velit nostrud dolor sed proident sit mollit est consectetur et velit minim qui elit velit ea ut velit aliqua esse dolore cupidatat fugiat velit qui exercitation reprehenderit cillum eiusmod est et eiusmod cillum aliquip nostrud sit aliquip commodo consectetur aliquip eu ut eu nisi ad do eu est magna minim amet amet in minim cillum magna pariatur veniam cupidatat labore ullamco enim reprehenderit dolore cillum voluptate deserunt Duis proident officia reprehenderit laboris id do consequat Ut nulla voluptate deserunt nostrud ex in ex ex qui qui proident esse laboris commodo ullamco voluptate do et cillum magna veniam enim consectetur id aliquip reprehenderit ex in ad sit eu reprehenderit sint labore in quis occaecat sit proident elit id aute voluptate fugiat incididunt non cillum commodo exercitation irure nisi ullamco nostrud sunt incididunt nostrud est aute sed in non sed exercitation ex sed sunt aute ullamco eu irure cillum fugiat Ut dolore proident non enim aute in amet labore est anim nulla ea sint labore ut sit culpa incididunt deserunt mollit mollit elit laborum commodo dolor fugiat enim ut nisi quis dolor nisi consectetur consequat sunt laborum ut dolore elit commodo dolor minim aliquip Excepteur in aute eiusmod in elit ut minim cillum dolore aliqua nisi sed Ut ad.",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      }
    ],

    // List of Sponsors
    // sponsors: [
    //   {
    //     name: "Eventick",
    //     logo: "themes/yellow-swan/img/sponsor.png",
    //     url: "http://eventick.com.br"
    //   }
    // ],

    // List de parceiros e apoios
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};