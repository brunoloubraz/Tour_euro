'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      id: 1,
      title: 'Uma Jornada Fascinante pela Alemanha: Encantos Além da História',
      text: `Ao percorrer as pitorescas paisagens da Alemanha, mergulhei em uma experiência que transcendeu fronteiras geográficas e temporais. Este país europeu não é apenas um testemunho vivo da história, mas também um destino que cativa com sua diversidade cultural e beleza natural.
      Descobrindo o Passado nas Ruas de Berlim:
      Minha aventura começou na vibrante Berlim, onde a história ganha vida a cada esquina. Diante do icônico Portão de Brandemburgo, senti a grandiosidade que permeia a capital alemã. Os vestígios do Muro de Berlim ecoam lembranças de uma era dividida, enquanto os museus de classe mundial oferecem uma imersão profunda na trajetória complexa do país.
      Cidades Encantadoras e Castelos de Contos de Fadas:
      À medida que me afastei da agitação urbana, encontrei-me cercado por cidades encantadoras e paisagens de contos de fadas. Rothenburg ob der Tauber, com suas ruas de paralelepípedos e casas com fachadas pitorescas, transportou-me para um cenário de conto de fadas. Enquanto isso, os majestosos castelos, como o de Neuschwanstein, emergem imponentes contra o cenário alpino, testemunhas silenciosas de um passado nobre.
      Sabores que Deliciam o Paladar:
      Explorar a culinária alemã foi uma jornada deliciosa. Desde as salsichas tradicionais, como a Bratwurst, até os pretzels de dar água na boca e as cervejas artesanais, cada refeição foi uma celebração dos sabores locais. Os mercados de alimentos frescos proporcionaram uma autêntica experiência gastronômica, revelando a riqueza dos ingredientes regionais.
      Natureza que Inspira Paz Interior:
      A Alemanha revelou-se não apenas como um tesouro de história e cultura, mas também como um paraíso natural. As florestas exuberantes da Floresta Negra, os vinhedos do Vale do Reno e os lagos serenos da Baviera ofereceram um refúgio tranquilo. Caminhar por trilhas cercadas por uma beleza intocada foi um lembrete constante da harmonia entre o homem e a natureza.
      Conclusão: Uma Viagem para Recordar:
      Minha jornada pela Alemanha transcendeu a simples visita a um país. Fui envolvido pela rica herança histórica, encantado pela arquitetura encantadora e nutrido pela hospitalidade local. Cada momento passado neste país deixou uma marca indelével em minha memória, transformando uma simples viagem em uma experiência enriquecedora que continuará a inspirar-me por muitos anos.`,
      photo: '../API/images_posts/Berlim.jpg',
      createdAt: new Date(),
      userId: 1,
    },
    {
      id: 2,
      title: 'A Magia de Paris e Além: Minha Experiência Encantadora pela França',
      text: `Ao explorar a França, mergulhei em um conto de encanto e sofisticação que só este país pode proporcionar. Das elegantes avenidas de Paris aos campos de lavanda da Provença, cada momento foi uma celebração do romance, da arte e do estilo de vida francês.
      Descobrindo Paris, a Cidade Luz:
      Paris, a inigualável "Cidade Luz", revelou-se um espetáculo de beleza arrebatadora. Passear pelas margens do Rio Sena, contemplar a majestosa Torre Eiffel iluminada à noite e perder-me nos corredores do Louvre foram experiências que transcendem a descrição. A arquitetura imponente e os jardins encantadores fizeram de cada rua parisiense uma obra de arte por si só.
      Vinhedos da Borgonha e Charme na Provença:
      Além da efervescência parisiense, descobri a França rural e pitoresca. Os vinhedos intermináveis da Borgonha ofereceram degustações que enriqueceram meu paladar, enquanto os campos de lavanda da Provença deslumbraram com suas cores vibrantes e fragrâncias sedutoras. Cada região contava sua própria história, enraizada na tradição e no amor pela terra.
      Gastronomia que Inspira:
      Os banquetes gastronômicos foram uma experiência sensorial inesquecível. Desde os croissants frescos e cafés aromáticos nas brasseries parisienses até os pratos refinados da alta cozinha, a França conquistou meu coração através do estômago. Os mercados locais, repletos de queijos irresistíveis, charcuterie e vinhos divinos, eram verdadeiros paraísos para os amantes da culinária.
      Castelos do Vale do Loire e Mistérios de Mont Saint-Michel:
      Os majestosos castelos do Vale do Loire pareciam saídos de contos de fadas, cada um contando sua própria história de nobreza e elegância. A visita ao lendário Mont Saint-Michel, erguido como uma joia no meio do oceano, foi uma jornada espiritual e arquitetônica que transcendia séculos de história.
      Conclusão: Uma Viagem ao Coração da Elegância:
      Minha viagem pela França não foi apenas uma jornada geográfica, mas uma imersão na elegância, na cultura e no estilo de vida francês. Cada cidade, vila e paisagem contou uma história única, e cada encontro com a rica herança do país deixou-me enfeitiçado. A França, em toda a sua diversidade, é um destino que permanece eternamente gravado na minha memória como uma experiência verdadeiramente encantadora.`,
      photo: '../API/images_posts/paris.jpeg',
      createdAt: new Date(),
      userId: 2,
    },
  ], { timestamps: false })
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
