let dados = [
    {
      titulo: "Alexandrite",
      descricao: "O laser Alexandrite é uma tecnologia de depilação a laser que utiliza um comprimento de onda específico para atingir a melanina presente nos pelos, tornando-o altamente eficaz na remoção de pelos escuros e grossos. Sua penetração na pele é mais superficial em comparação a outros tipos de laser, o que o torna ideal para tratar pelos mais finos e áreas sensíveis como o rosto. Com um sistema de resfriamento avançado, o tratamento com laser Alexandrite é mais confortável e rápido, proporcionando resultados visíveis em poucas sessões.",
      link: "https://espacolaser.com.br/blogdamel/como-funciona-o-laser-alexandrite",
      tags: "tecnologias candela"
    },
    {
      titulo: "Diodo",
      descricao: "O laser de diodo é um dos tipos de laser mais utilizados na depilação a laser, conhecido por sua versatilidade e eficácia em diferentes tipos de pele e pelos. Ele possui um comprimento de onda que penetra mais profundamente na pele, atingindo o folículo piloso e inibindo o crescimento do pelo. O laser de diodo é indicado para todos os tipos de pele e pelos, inclusive os mais claros e finos.",
      link: "https://laserdream.com.br/depilacao-a-laser-diodo-entenda-como-funciona-esta-alternativa/#:~:text=O%20laser%20de%20diodo%20funciona,o%20crescimento%20de%20novos%20pelos.",
      tags: "LightSheer duet tecnologias",
    },
    {
      titulo: "ND:YAG",
      descricao: "O laser ND:YAG é ideal para tratar pelos em peles mais escuras e bronzeadas, pois seu comprimento de onda é capaz de penetrar profundamente na pele sem causar danos à melanina. Ele é especialmente indicado para a depilação de áreas delicadas como o rosto e virilha, e também para a remoção de pelos encravados.",
      link: "https://espacolaser.com.br/blogdamel/laser-nd-yag",
      tags: "tecnologias"
    },
    {
      titulo: "Rubi",
      descricao: "O laser de rubi foi um dos primeiros tipos de laser utilizados para depilação, mas ainda é eficaz para remover pelos superficiais e em peles claras. Ele possui um comprimento de onda mais curto que outros tipos de laser, o que limita sua penetração na pele. Apesar de ser menos utilizado atualmente, o laser de rubi ainda pode ser uma opção para alguns casos específicos.",
      link: "https://espacolaser.com.br/blogdamel/conheca-os-tipos-mais-comuns-de-laser-na-depilacao",
      tags: "tecnologias"
    },
    {
      titulo: "Soprano ICE",
      descricao: "O Soprano Ice utiliza a tecnologia de diodo laser para remover pelos indesejados de forma eficaz e duradoura. Este equipamento resfria a pele durante o tratamento, tornando o procedimento praticamente indolor. O resfriamento por contato garante conforto e proteção, minimizando o risco de queimaduras e outros desconfortos. Essa tecnologia é adequada para todos os tipos de pele, incluindo peles bronzeadas, ampliando as possibilidades de tratamento ao longo do ano.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 4 semanas antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.",
      link: "https://laserdream.com.br/depilacao-a-laser-com-soprano-ice-tudo-que-voce-precisa-saber-para-compreender-este-tratamento-e-suas-principais-caracteristicas/#:~:text=Conhe%C3%A7a%20o%20Soprano%20Ice,resultados%20vis%C3%ADveis%20ap%C3%B3s%20poucas%20sess%C3%B5es.",
      tags: "aparelho gel"
    }, 
    {
      titulo: "LightSheer",
      descricao: "É um dos equipamentos mais avançados para a depilação a laser. É um equipamento que utiliza a tecnologia de laser de diodo, que é considerada a mais eficaz para a remoção de pelos. O laser de diodo emite uma luz de alta intensidade que é absorvida pela melanina do pelo, destruindo o folículo piloso e inibindo o crescimento. Oferece resultados rápidos, seguros e duradouros, sendo indicada para todos os tipos de pele e pelos.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 4 semanas antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.",
      link: "https://clinicalev.com.br/tecnologia/lightsheer/",
      tags: "equipamento aparelho",
    },
    {
      titulo: "GentleLase",
      descricao: "O GentleLase da Candela é um dos equipamentos mais renomados no mercado de depilação a laser. Ele utiliza a tecnologia de laser Alexandrita, que possui um comprimento de onda de 755nm, sendo especialmente eficaz para pelos finos e claros em peles mais claras. A alta afinidade da melanina do pelo por essa luz permite uma destruição precisa do folículo piloso, proporcionando resultados duradouros e seguros. O sistema de resfriamento integrado ao equipamento garante maior conforto durante o procedimento, reduzindo o desconforto e a possibilidade de queimaduras.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 4 semanas antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.",
      link: "https://www.skintec.com.br/gentlelase-pro",
      tags: "aparelho candela espaçolaser"
    },
    {
      titulo: "Galaxy Fiber",
      descricao: "O Galaxy Fiber é um equipamento de depilação a laser que se destaca pela sua tecnologia e eficiência. Ele utiliza a tecnologia de laser de diodo, que é reconhecida por sua alta performance na remoção de pelos. O comprimento de onda do laser de diodo é selecionado para atingir a melanina do pelo de forma precisa, destruindo o folículo piloso e inibindo o crescimento. Essa tecnologia, combinada com a alta velocidade do Galaxy Fiber, permite sessões mais rápidas e resultados visíveis em menos tempo. Além disso, o sistema de resfriamento do equipamento garante maior conforto durante o procedimento, tornando a experiência mais agradável para o paciente.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 15 dias antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.", 
      link: "https://criolaser.com.br/aparelho-galaxy-fiber-laser-de-diodo/",
      tags: "equipamento aparelho cuidados"
    },
    {
      titulo: "Ácrus",
      descricao: "O Ácrus é um equipamento de depilação a laser que se destaca por sua versatilidade e tecnologia avançada. Ele utiliza a tecnologia Triple Wave, que combina três comprimentos de onda diferentes: Alexandrita (755nm), Diodo (808nm) e Nd:YAG (1064nm). Essa combinação permite tratar uma ampla variedade de tipos de pele e pelos, desde os mais finos e claros até os mais escuros e grossos. A tecnologia Triple Wave do Ácrus oferece resultados eficazes e duradouros, personalizando o tratamento de acordo com as necessidades de cada paciente.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 4 semanas antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.", 
      link: "https://www.blog.medsam.com.br/acrus-htm-laser-epilacao-ponteira-triple-wave",
      tags: "aparelho cuidados"
    },
    {
      titulo: "Hakon",
      descricao: "O Hakon é um equipamento de depilação a laser que se destaca pela sua tecnologia inovadora. Ele utiliza a tecnologia 4D, que combina quatro comprimentos de onda diferentes: Rubi (694nm), Alexandrita (755nm), Diodo (808nm) e ND-YAG (1064nm). Essa combinação única permite tratar uma ampla variedade de tipos de pele e pelos, desde os mais claros e finos até os mais escuros e grossos. Ao emitir os quatro comprimentos de onda simultaneamente, o Hakon garante uma eficácia máxima na destruição dos folículos pilosos, proporcionando resultados duradouros e personalizados para cada paciente.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 15 dias antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.", 
      link: "https://www.medicalsan.com.br/produtos/hakon/",
      tags: "aparelho cuidados"
    },
    {
      titulo: "Milesman Premium",
      descricao: "O Milesman Premium é um equipamento de depilação a laser altamente eficaz que utiliza a tecnologia de laser de diodo. Essa tecnologia, com comprimento de onda de 808nm, é especificamente projetada para atingir a melanina do pelo, destruindo o folículo piloso e inibindo o crescimento. Com alta potência e sistema de resfriamento avançado, o Milesman Premium garante resultados rápidos e duradouros, sendo indicado para todos os tipos de pele. Sua alta taxa de repetição permite tratar áreas maiores em menos tempo, tornando o procedimento mais eficiente e confortável para o paciente.",
      cuidadosPrevios: "Evitar depilação com cera ou pinça 4 semanas antes do tratamento. Evitar exposição solar intensa nos dias que antecedem e sucedem a sessão.", 
      link: "https://clinicadragianna.com.br/tecnologia/laser-de-diodo-milesman/#:~:text=O%20que%20%C3%A9%20o%20Laser,resfriada%2C%20que%20alivia%20a%20dor.",
      tags: "aparelho"
    }
  ];
