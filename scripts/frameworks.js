const frameworks = [
    {
        name: "React",
        image: "react.webp",
        description: "React é um framework JavaScript de código aberto, desenvolvido pelo Facebook, amplamente utilizado para construir interfaces de usuário (UIs) em aplicações web. Ele se destaca por seu conceito de componentes reutilizáveis, que permite aos desenvolvedores criar UIs de maneira modular e eficiente. Um dos principais recursos do React é o Virtual DOM, que otimiza a atualização e renderização de componentes, resultando em um desempenho superior. React é altamente popular em projetos que requerem UIs dinâmicas e interativas, sendo compatível com várias bibliotecas e ferramentas dentro do ecossistema JavaScript.",
        website: "https://reactjs.org/"
    },
    {
        name: "Angular",
        image: "angular.png",
        description: "Angular é um framework JavaScript de código aberto, desenvolvido pelo Google, utilizado para construir aplicações web de página única (SPAs). Ele é conhecido por sua arquitetura baseada em componentes e por utilizar TypeScript, proporcionando um ambiente robusto para o desenvolvimento de aplicações escaláveis. Com recursos integrados como injeção de dependência e roteamento, Angular é ideal para projetos de grande porte que exigem uma estrutura sólida e manutenível.",
        website: "https://angular.dev"
    },
    {
        name: "Vue",
        image: "vue.png",
        description: "Vue.js é um framework JavaScript progressivo que facilita a criação de interfaces de usuário e SPAs. Ele é conhecido por sua simplicidade, flexibilidade e curva de aprendizado suave, permitindo aos desenvolvedores integrar Vue.js em projetos existentes ou construir aplicações completas. Com uma arquitetura baseada em componentes e um ecossistema de ferramentas que suportam desenvolvimento de ponta a ponta, Vue.js é popular tanto para projetos pequenos quanto grandes.",
        website: "https://vuejs.org"
    },
    {
        name: "Django",
        image: "django.png",
        description: "Django é um framework web de alto nível para Python, conhecido por seguir o princípio 'batteries-included' (tudo incluído). Ele fornece uma estrutura robusta e segura para o desenvolvimento rápido de aplicações web, com recursos integrados para administração, autenticação, e ORM (mapeamento objeto-relacional). Django é ideal para projetos que requerem escalabilidade e uma arquitetura bem definida, como portais web e plataformas de e-commerce.",
        website: "https://www.djangoproject.com"
    },
    {
        name: "Flask",
        image: "flask.png",
        description: "Flask é um microframework web para Python que oferece simplicidade e flexibilidade na construção de aplicações web. Ele é minimalista, fornecendo apenas os componentes essenciais necessários para o desenvolvimento web, permitindo que os desenvolvedores adicionem extensões conforme necessário. Flask é ideal para projetos pequenos a médios, onde a personalização e o controle sobre a arquitetura da aplicação são prioridades.",
        website: "https://flask.palletsprojects.com/en/3.0.x/"
    },
    {
        name: "Ruby on Rails",
        image: "ruby_on_rails.png",
        description: "Ruby on Rails, ou simplesmente Rails, é um framework web de código aberto para Ruby, conhecido por sua convenção sobre configuração e desenvolvimento ágil. Rails simplifica o desenvolvimento web ao fornecer estruturas pré-configuradas para a construção de aplicações, com forte foco em produtividade e padrões de design. É amplamente utilizado para construir MVPs, startups e plataformas web complexas, graças à sua eficiência e estrutura coesa.",
        website: "https://rubyonrails.org"
    },
    {
        name: "Express",
        image: "express.png",
        description: "Express.js é um framework minimalista e flexível para Node.js, usado para construir aplicações web e APIs. Ele fornece uma fina camada de recursos essenciais para desenvolvimento web, permitindo que os desenvolvedores criem estruturas customizadas conforme as necessidades do projeto. Express.js é altamente popular para o desenvolvimento de aplicações em tempo real e microservices, devido à sua simplicidade e integração direta com o ecossistema Node.js.",
        website: "https://expressjs.com"
    },
    {
        name: "Laravel",
        image: "laravel.png",
        description: "Laravel é um framework PHP de código aberto que se destaca por sua sintaxe elegante e ferramentas integradas para tarefas comuns, como roteamento, autenticação e caching. Ele facilita o desenvolvimento rápido de aplicações web robustas, com um foco em boas práticas e manutenibilidade. Laravel é amplamente utilizado para construir aplicações web modernas e escaláveis, com recursos como Eloquent ORM e suporte para desenvolvimento API-first.",
        website: "https://laravel.com"
    },
    {
        name: "Bootstrap",
        image: "bootstrap.png",
        description: "Bootstrap é um framework front-end de código aberto que fornece uma coleção de componentes e utilitários CSS e JavaScript para criar interfaces web responsivas e modernas. Ele é amplamente utilizado para acelerar o desenvolvimento de interfaces, oferecendo um design consistente e suporte a diferentes dispositivos e tamanhos de tela. Bootstrap é ideal para desenvolvedores que precisam criar rapidamente layouts e componentes de interface de alta qualidade.",
        website: "https://getbootstrap.com"
    },
    {
        name: "jQuery",
        image: "jquery.png",
        description: "jQuery é uma biblioteca JavaScript leve que simplifica o desenvolvimento de scripts client-side ao fornecer uma API fácil de usar para manipulação de DOM, eventos, animações e chamadas AJAX. Embora menos utilizado em novos projetos modernos devido ao surgimento de frameworks como React e Vue.js, jQuery continua popular para adicionar interatividade rápida a páginas web existentes, graças à sua compatibilidade e simplicidade.",
        website: "https://jquery.com"
    },
    {
        name: "Flutter",
        image: "flutter.png",
        description: "Flutter é um framework de código aberto desenvolvido pelo Google para criar aplicações móveis, web e desktop com uma única base de código. Utilizando a linguagem Dart, Flutter se destaca por sua capacidade de criar interfaces de usuário nativas e altamente performáticas, com widgets personalizáveis e uma arquitetura reativa. É especialmente popular para o desenvolvimento de aplicativos móveis, oferecendo uma experiência consistente em iOS e Android.",
        website: "https://flutter.dev"
    },
    {
        name: "Next",
        image: "next.png",
        description: "Next.js é um framework para React que facilita a construção de aplicações web com renderização híbrida, combinando server-side rendering (SSR) e static site generation (SSG). Ele oferece uma estrutura otimizada para SEO, desempenho e experiência do usuário, com funcionalidades como roteamento automático e suporte a API routes. Next.js é amplamente utilizado para desenvolver aplicações web modernas e escaláveis, especialmente em projetos que exigem alta performance e SEO-friendly.",
        website: "https://nextjs.org"
    }
];