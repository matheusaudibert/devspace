const Linguagens = [
  {
    name: "Python",
    image: "python.png",
    description: "Linguagens de programação são sistemas de comunicação que permitem aos desenvolvedores escrever instruções para computadores executarem tarefasespecíficas, usando regras e sintaxes definidas. Elas variam em seusparadigmas e métodos de execução, e são usadas em diferentes áreas comodesenvolvimento web, análise de dados e sistemas embarcados.",
    website: "https://www.python.org",
    releaseYear: 1991
  },
  {
    name: "JavaScript",
    image: "javascript.png",
    description: "JavaScript é uma linguagem de programação amplamente utilizada no desenvolvimento web, essencial para a criação de páginas interativas e dinâmicas. Ela permite aos desenvolvedores adicionar comportamentos complexos em sites, como animações e manipulação de eventos. JavaScript é uma linguagem interpretada, baseada em eventos e orientada a objetos, que opera no navegador do cliente, mas também pode ser usada no lado do servidor com ambientes como Node.js. Sua sintaxe é flexível e é um componente chave das tecnologias web modernas junto com HTML e CSS.",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    releaseYear: 1995
  },
  {
    name: "Java",
    image: "java.png",
    description: "Java é uma linguagem de programação orientada a objetos, projetada para ser portável, robusta e segura. Ela é amplamente utilizada no desenvolvimento de aplicações empresariais, sistemas móveis (especialmente Android), e aplicações web. Java é conhecida por seu princípio de 'escreva uma vez, execute em qualquer lugar', o que significa que o código Java pode ser executado em qualquer dispositivo que tenha a Java Virtual Machine (JVM) instalada. Sua sintaxe é similar à de C++, mas com algumas melhorias que facilitam o desenvolvimento e a manutenção.",
    website: "https://www.java.com/pt-BR/",
    releaseYear: 1995
  },
  {
    name: "C",
    image: "c.png",
    description: "C é uma linguagem de programação procedural, conhecida por sua eficiência e controle de baixo nível sobre recursos de hardware. Desenvolvida na década de 1970, C é amplamente utilizada para o desenvolvimento de sistemas operacionais, drivers de hardware e software de sistema devido à sua proximidade com o hardware. A sintaxe de C influenciou muitas outras linguagens de programação, e sua capacidade de manipulação direta de memória a torna ideal para aplicações onde o desempenho e o controle são críticos.",
    website: "https://en.wikipedia.org/wiki/C_(programming_language)",
    releaseYear: 1972 
  },
  {
    name: "C#",
    image: "csharp.png",
    description: "C# (pronuncia-se 'C sharp') é uma linguagem de programação desenvolvida pela Microsoft como parte da plataforma .NET. É uma linguagem orientada a objetos, moderna e versátil, utilizada para criar aplicações de desktop, web e móveis. C# combina a simplicidade da sintaxe de C e C++ com a robustez da plataforma .NET, proporcionando suporte para desenvolvimento de aplicações seguras e eficientes. É amplamente usada para criar jogos com Unity, aplicações empresariais e sistemas complexos.",
    website: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
    releaseYear: 200
  },
  {
    name: "C++",
    image: "c++.png",
    description: "C++ é uma linguagem de programação que estende a linguagem C com características orientadas a objetos, como classes e herança, além de suporte para programação genérica com templates. Desenvolvida como uma evolução de C, C++ é usada para desenvolvimento de software de sistemas, jogos, e aplicações de alto desempenho que exigem eficiência e controle detalhado sobre os recursos de hardware. Sua flexibilidade e poder fazem dela uma escolha popular para uma ampla gama de aplicações, desde sistemas embarcados até aplicações gráficas complexas.",
    website: "https://pt.wikipedia.org/wiki/C%2B%2B",
    releaseYear: 1985
  },
  {
    name: "Typescript",
    image: "typescript.png",
    description: "TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superconjunto estrito de JavaScript. Ela adiciona tipos estáticos e outros recursos de programação orientada a objetos ao JavaScript, visando melhorar a robustez e a escalabilidade do código. TypeScript compila para JavaScript, o que permite que o código seja executado em qualquer ambiente que suporte JavaScript, como navegadores e servidores. É muito utilizada em projetos de grande escala e para o desenvolvimento de aplicações web modernas.",
    website: "https://www.typescriptlang.org",
    releaseYear: 2012
  },
  {
    name: "PHP",
    image: "php.png",
    description: "PHP (Hypertext Preprocessor) é uma linguagem de programação amplamente utilizada para desenvolvimento web, especialmente no lado do servidor. PHP é projetada para gerar conteúdo dinâmico e interagir com bancos de dados. Sua sintaxe é semelhante à de C e Perl, e é conhecida por sua integração fácil com HTML. PHP é uma das linguagens mais populares para criação de sites e sistemas web, sendo usada em plataformas como WordPress e Joomla.",
    website: "https://www.php.net",
    releaseYear: 1995
  },
  {
    name: "Swift",
    image: "swift.png",
    description: "Swift é uma linguagem de programação desenvolvida pela Apple. É projetada para ser segura, rápida e moderna, substituindo Objective-C como a principal linguagem para desenvolvimento de aplicações para iOS, macOS, watchOS e tvOS. Swift combina a performance de linguagens compiladas com a simplicidade e a segurança da programação moderna, facilitando o desenvolvimento de aplicativos robustos e de alta performance para o ecossistema Apple.",
    website: "https://www.swift.org",
    releaseYear: 2014
  },
  {
    name: "Ruby",
    image: "ruby.png",
    description: "Ruby é uma linguagem de programação dinâmica e orientada a objetos, criada por Yukihiro Matsumoto. É conhecida por sua sintaxe limpa e legível, que favorece a produtividade do desenvolvedor. Ruby é popular no desenvolvimento web, especialmente com o framework Ruby on Rails, que facilita a criação de aplicações web rápidas e eficientes. A filosofia do Ruby é focada na simplicidade e na felicidade do desenvolvedor.",
    website: "https://www.ruby-lang.org/pt/",
    releaseYear: 1995
  },
  {
    name: "Go",
    image: "go.png",
    description: "Go, também conhecida como Golang, é uma linguagem de programação desenvolvida pelo Google. É projetada para ser simples, eficiente e com suporte nativo para concorrência, permitindo o desenvolvimento de sistemas escaláveis e de alto desempenho. Go é conhecida por sua sintaxe concisa, compilação rápida e forte suporte a programação paralela. É amplamente utilizada para desenvolvimento de sistemas, infraestrutura e aplicações em nuvem.",
    website: "https://go.dev",
    releaseYear: 2009 
  },
  {
    name: "Kotlin",
    image: "kotlin.png",
    description: "Kotlin é uma linguagem de programação desenvolvida pela JetBrains, projetada para ser interoperável com Java e fornecer uma alternativa moderna e concisa para o desenvolvimento na plataforma Java. É uma linguagem estaticamente tipada que suporta programação orientada a objetos e funcional. Kotlin é amplamente utilizada para o desenvolvimento de aplicações Android e é conhecida por sua sintaxe clara, segurança contra nulidade e suporte para programação funcional.",
    website: "https://kotlinlang.org",
    releaseYear: 2011
  },
  {
    name: "Haskell",
    image: "haskell.png",
    description: "Haskell é uma linguagem de programação funcional puramente baseada em teoria matemática e lógica. Desenvolvida na década de 1980 e nomeada em homenagem ao matemático Haskell Curry, a linguagem é conhecida por seu forte sistema de tipos, suporte a funções de ordem superior e avaliação preguiçosa. Haskell é amplamente utilizada em pesquisa acadêmica e em indústrias que necessitam de alta confiabilidade e segurança em sistemas complexos, como sistemas financeiros e análise de dados.",
    website: "https://www.haskell.org",
    releaseYear: 1990
  },
  {
    name: "Dart",
    image: "dart.png",
    description: "Dart é uma linguagem de programação desenvolvida pelo Google, projetada para criar aplicações web e móveis com alta performance. Dart é a linguagem principal para o desenvolvimento com o framework Flutter, que permite criar interfaces de usuário nativas para iOS e Android a partir de um único código base. Dart combina recursos de linguagens orientadas a objetos com suporte para programação assíncrona, oferecendo uma sintaxe moderna e ferramentas robustas para desenvolvimento de aplicações multiplataforma.",
    website: "https://dart.dev",
    releaseYear: 2011
  },
  {
    name: "Lua",
    image: "lua.png",
    description: "Lua é uma linguagem de programação leve e poderosa, projetada para ser embutida em outras aplicações. Desenvolvida na década de 1990, Lua é conhecida por sua simplicidade e flexibilidade, oferecendo uma sintaxe clara e uma pequena pegada de memória. É amplamente utilizada como linguagem de script em jogos, sistemas embarcados e aplicações onde a integração com C ou C++ é necessária. Lua é valorizada por sua extensibilidade e desempenho, tornando-a uma escolha popular para diversas aplicações.",
    website: "https://www.lua.org",
    releaseYear: 1993
  }
];