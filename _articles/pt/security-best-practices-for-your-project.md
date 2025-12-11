---
lang: pt
untranslated: false
title: Melhores Práticas de Segurança para o seu Projeto
description: Fortaleça o futuro do seu projeto construindo confiança por meio de práticas essenciais de segurança — desde MFA e análise de código até o gerenciamento seguro de dependências e o reporte privado de vulnerabilidades.
class: security-best-practices
order: -1
image: /assets/images/cards/security-best-practices.png
---

Bugs e novas funcionalidades à parte, a longevidade de um projeto depende não apenas da sua utilidade, mas também da confiança que ele conquista dos usuários. Medidas sólidas de segurança são fundamentais para manter essa confiança. Aqui estão algumas ações importantes que você pode adotar para melhorar significativamente a segurança do seu projeto.

## Garanta que todos os contribuidores privilegiados tenham habilitado a Autenticação Multifator (MFA)

### Um agente mal-intencionado que consiga se passar por um contribuidor privilegiado do seu projeto pode causar danos catastróficos.

Uma vez que ele obtenha acesso privilegiado, esse agente pode modificar o código para executar ações indesejadas (por exemplo, minerar criptomoedas), distribuir malware na infraestrutura dos usuários ou acessar repositórios privados para exfiltrar propriedade intelectual e dados sensíveis, incluindo credenciais de outros serviços.

A MFA fornece uma camada adicional de segurança contra sequestro de contas. Quando habilitada, é necessário fazer login com nome de usuário e senha e fornecer outra forma de autenticação que apenas você conhece ou tem acesso.

## Proteja seu código como parte do fluxo de desenvolvimento

### Vulnerabilidades de segurança no seu código são mais baratas de corrigir quando detectadas cedo no processo do que depois, quando já estão em produção.

Use uma ferramenta de Análise Estática de Segurança de Aplicações (Static Application Security Testing - SAST) para detectar vulnerabilidades de segurança em seu código. Essas ferramentas operam no nível do código e não precisam de um ambiente de execução, portanto, podem ser executadas no início do processo e integradas perfeitamente ao seu fluxo de trabalho de desenvolvimento habitual, durante as fases de compilação ou revisão de código.

É como ter um especialista examinando seu repositório e ajudando a identificar vulnerabilidades comuns que podem estar ocultas enquanto você codifica.

Como escolher sua ferramenta SAST?
Verifique a licença: algumas ferramentas são gratuitas para projetos open source, como GitHub CodeQL ou SemGrep.
Verifique a cobertura para suas linguagens.

* Escolha uma ferramenta que se integre facilmente aos seus processos e ferramentas atuais. Por exemplo, é melhor se os alertas aparecerem dentro do processo de revisão de código existente, em vez de depender de outro painel.
* Cuidado com falsos positivos — você não quer que a ferramenta atrapalhe seu fluxo desnecessariamente.
* Verifique os recursos: algumas ferramentas são muito poderosas e fazem taint tracking (exemplo: GitHub CodeQL), outras oferecem sugestões de correção geradas por IA, e outras facilitam a criação de consultas personalizadas (exemplo: SemGrep).

## Não compartilhe seus segredos

### Dados sensíveis, como chaves de API, tokens e senhas, às vezes podem ser acidentalmente enviados para o repositório.

Imagine este cenário: você é o mantenedor de um projeto de código aberto popular com contribuições de desenvolvedores em todo o mundo. Um dia, um colaborador, sem saber, envia para o repositório algumas chaves de API de um serviço de terceiros. Dias depois, alguém encontra essas chaves e as usa para acessar o serviço sem permissão. O serviço é comprometido, os usuários do seu projeto enfrentam tempo de inatividade e a reputação do seu projeto é prejudicada. Como mantenedor, você agora enfrenta a difícil tarefa de revogar os segredos comprometidos, investigar quais ações maliciosas o invasor poderia ter realizado com esse segredo, notificar os usuários afetados e implementar correções.

Para evitar esse tipo de incidente, existem soluções de "varredura de segredos" (secret scanning) que ajudam a detectar credenciais sensíveis no código. Algumas ferramentas, como GitHub Secret Scanning e Trufflehog da Truffle Security, podem impedir que você os envie para ramificações remotas (branches), e algumas ferramentas revogam automaticamente alguns segredos para você.

## Verifique e atualize suas dependências

### As dependências do seu projeto podem apresentar vulnerabilidades que comprometem a segurança do mesmo. Manter as dependências atualizadas manualmente pode ser uma tarefa demorada.

Imagine a seguinte situação: um projeto construído sobre a base sólida de uma biblioteca amplamente utilizada. Posteriormente, a biblioteca revela uma grave falha de segurança, mas os desenvolvedores do aplicativo que a utilizaram desconhecem o problema. Dados sensíveis dos usuários ficam expostos quando um invasor se aproveita dessa vulnerabilidade para roubá-los. Este não é um caso hipotético. Foi exatamente o que aconteceu com a Equifax em 2017: a empresa não atualizou sua dependência do Apache Struts após a notificação de uma vulnerabilidade grave. A vulnerabilidade foi explorada e a infame violação de dados da Equifax afetou os dados de 144 milhões de usuários.

Para evitar cenários como esse, ferramentas de Análise de Composição de Software (SCA), como Dependabot e Renovate, verificam automaticamente suas dependências em busca de vulnerabilidades conhecidas, publicadas em bancos de dados públicos como o NVD ou o GitHub Advisory Database, e criam solicitações de pull para atualizá-las para versões seguras. Manter-se atualizado com as versões mais recentes e seguras das dependências protege seu projeto de riscos potenciais.

## Entenda e gerencie os riscos das licenças de código aberto

### As licenças de código aberto vêm com termos e ignorá-los pode levar a riscos legais e de reputação.

Usar dependências de código aberto pode acelerar o desenvolvimento, mas cada pacote inclui uma licença que define como ele pode ser usado, modificado ou distribuído. [Algumas licenças são permissivas](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project), enquanto outras (como AGPL ou SSPL) impõem restrições que podem não ser compatíveis com os objetivos do seu projeto ou com as necessidades dos seus usuários.

Imagine o seguinte: você adiciona uma biblioteca poderosa ao seu projeto, sem saber que ela usa uma licença restritiva. Mais tarde, uma empresa quer adotar seu projeto, mas levanta preocupações sobre a conformidade com a licença. O resultado? Você perde a adoção, precisa refatorar o código e a reputação do seu projeto sofre um baque.

Para evitar essas armadilhas, considere incluir verificações automatizadas de licença como parte do seu fluxo de trabalho de desenvolvimento. Essas verificações podem ajudar a identificar licenças incompatíveis logo no início do processo, evitando que dependências problemáticas sejam introduzidas em seu projeto.

Outra abordagem poderosa é gerar uma Lista de Materiais de Software (SBOM). Uma SBOM lista todos os componentes e seus metadados (incluindo licenças) em um formato padronizado. Ela oferece visibilidade clara da sua cadeia de suprimentos de software e ajuda a identificar proativamente riscos de licenciamento.

Assim como as vulnerabilidades de segurança, os problemas de licenciamento são mais fáceis de corrigir quando descobertos precocemente. Automatizar esse processo mantém seu projeto saudável e seguro.

## Evite alterações indesejadas com branches protegidas

### O acesso irrestrito às suas branches principais pode levar a alterações acidentais ou maliciosas que podem introduzir vulnerabilidades ou comprometer a estabilidade do seu projeto.

Um novo colaborador obtém acesso de escrita à branch principal e, acidentalmente, envia alterações que não foram testadas. Uma grave falha de segurança é então descoberta, cortesia das últimas alterações. Para evitar tais problemas, as regras de proteção de branches garantem que as alterações não possam ser enviadas ou mescladas em branches importantes sem antes passar por revisões e verificações de status específicas. Você fica mais seguro e protegido com essa medida extra, garantindo a mais alta qualidade sempre.

## Facilite (e torne seguro) o relato de problemas de segurança

### É uma boa prática facilitar o relato de bugs pelos seus usuários, mas a grande questão é: quando esse bug tem um impacto na segurança, como eles podem relatá-lo com segurança sem torná-lo um alvo para hackers maliciosos?

Imagine a seguinte situação: um pesquisador de segurança descobre uma vulnerabilidade no seu projeto, mas não encontra uma maneira clara ou segura de relatá-la. Sem um processo definido, ele pode criar um problema público ou discuti-lo abertamente nas redes sociais. Mesmo que tenha boas intenções e ofereça uma correção, se fizer isso por meio de um pull request público, outros verão a alteração antes que ela seja incorporada! Essa divulgação pública exporá a vulnerabilidade a agentes maliciosos antes que você tenha a chance de corrigi-la, podendo levar a uma exploração de vulnerabilidade zero-day, atacando seu projeto e seus usuários.

### Política de Segurança

Para evitar isso, publique uma política de segurança. Uma política de segurança, definida em um arquivo `SECURITY.md`, detalha os passos para relatar problemas de segurança, criando um processo transparente para divulgação coordenada e estabelecendo as responsabilidades da equipe do projeto para lidar com os problemas relatados. Essa política de segurança pode ser tão simples quanto "Por favor, não publique detalhes em um problema público ou comunicado de imprensa, envie-nos um e-mail privado para security@example.com", mas também pode conter outros detalhes, como quando os usuários podem esperar receber uma resposta. Qualquer coisa que possa contribuir para a eficácia e a eficiência do processo de divulgação.

### Relatórios Privados de Vulnerabilidades

Em algumas plataformas, você pode otimizar e fortalecer seu processo de gerenciamento de vulnerabilidades, desde o recebimento até a divulgação, com issues privadas. No GitLab, isso pode ser feito com issues privadas. No GitHub, isso é chamado de Relatórios Privados de Vulnerabilidades (PVR). O PVR permite que os mantenedores recebam e tratem relatórios de vulnerabilidades, tudo dentro da plataforma GitHub. O GitHub criará automaticamente um fork privado para escrever as correções e um rascunho de aviso de segurança. Tudo isso permanece confidencial até que você decida divulgar os problemas e liberar as correções. Para fechar o ciclo, os avisos de segurança serão publicados e informarão e protegerão todos os seus usuários por meio de suas ferramentas de Autenticação Confidencial de Segurança (SCA).

### Defina seu modelo de ameaças para ajudar usuários e pesquisadores a entender o escopo

Antes que os pesquisadores de segurança possam relatar problemas de forma eficaz, eles precisam entender quais riscos estão dentro do escopo. Um modelo de ameaças simples pode ajudar a definir os limites, o comportamento esperado e as premissas do seu projeto.

Um modelo de ameaças não precisa ser complexo. Mesmo um documento simples que descreva o que seu projeto faz, em que ele confia e como ele poderia ser usado indevidamente já é bastante útil. Ele também ajuda você, como mantenedor, a pensar em possíveis armadilhas e riscos herdados de dependências upstream.

Um ótimo exemplo é o [modelo de ameaças do Node.js](https://github.com/nodejs/node/security/policy#the-nodejs-threat-model), que define claramente o que é e o que não é considerado uma vulnerabilidade no contexto do projeto.

Se você é iniciante nisso, o [Processo de Modelagem de Ameaças da OWASP](https://owasp.org/www-community/Threat_Modeling_Process) oferece uma introdução útil para criar o seu próprio.

Publicar um modelo de ameaças básico junto com sua política de segurança melhora a clareza para todos.

## Prepare um processo de resposta a incidentes simplificado

### Ter um plano básico de resposta a incidentes ajuda você a manter a calma e agir com eficiência, garantindo a segurança de seus usuários e consumidores.

A maioria das vulnerabilidades é descoberta por pesquisadores e relatada de forma privada. Mas, às vezes, um problema já está sendo explorado na internet antes mesmo de chegar até você. Quando isso acontece, seus consumidores finais são os que correm risco, e ter um plano de resposta a incidentes simplificado e bem definido pode fazer toda a diferença.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/ulisesgascon?s=180" class="pquote-avatar" alt="avatar">
  Uma vulnerabilidade é basicamente uma falha, uma configuração de segurança incorreta ou um ponto fraco em nosso sistema que pode ser explorado por terceiros para se comportarem de maneiras não intencionais.
  <p markdown="1" class="pquote-credit">
— [@UlisesGascon](https://github.com/ulisesgascon), ["O que é uma vulnerabilidade e o que não é? Entendendo os modelos de ameaça do Node.js e do Express"](https://gitnation.com/contents/what-is-a-vulnerability-and-whats-not-making-sense-of-nodejs-and-express-threat-models)
  </p>
</aside>

Mesmo quando uma vulnerabilidade é relatada de forma privada, os próximos passos são cruciais. Após receber um relatório de vulnerabilidade ou detectar atividade suspeita, o que acontece em seguida?

Ter um plano básico de resposta a incidentes, mesmo que seja apenas uma lista de verificação simples, ajuda a manter a calma e agir com eficiência quando o tempo é essencial. Também demonstra aos usuários e pesquisadores que você leva os incidentes e relatórios a sério.

Seu processo não precisa ser complexo. No mínimo, defina:

* Quem revisa e prioriza os relatórios ou alertas de segurança
* Como a gravidade é avaliada e como as decisões de mitigação são tomadas
* Quais etapas você toma para preparar uma correção e coordenar a divulgação
* Como você notifica os usuários, colaboradores ou consumidores subsequentes afetados

Um incidente ativo, se não for bem gerenciado, pode corroer a confiança dos usuários no seu projeto. Publicar este plano (ou incluir um link para ele) no seu arquivo `SECURITY.md` pode ajudar a alinhar expectativas e construir confiança.

Para inspiração, o [Express.js Security WG](https://github.com/expressjs/security-wg/blob/main/docs/incident_response_plan.md) fornece um exemplo simples, porém eficaz, de um plano de resposta a incidentes de código aberto.

Este plano pode evoluir à medida que seu projeto cresce, mas ter uma estrutura básica implementada agora pode economizar tempo e reduzir erros durante um incidente real.

## Trate a segurança como um esforço de equipe

### A segurança não é uma responsabilidade individual. Ela funciona melhor quando compartilhada por toda a comunidade do seu projeto.

Embora ferramentas e políticas sejam essenciais, uma postura de segurança robusta vem da forma como sua equipe e colaboradores trabalham juntos. Construir uma cultura de responsabilidade compartilhada ajuda seu projeto a identificar, priorizar e responder a vulnerabilidades com mais rapidez e eficácia.

Aqui estão algumas maneiras de tornar a segurança um trabalho em equipe:

* **Atribua funções claras**: Saiba quem lida com relatórios de vulnerabilidades, quem revisa atualizações de dependências e quem aprova patches de segurança.

* **Limite o acesso usando o princípio do menor privilégio**: Conceda acesso de gravação ou administrador apenas para aqueles que realmente precisam e revise as permissões regularmente.

* **Invista em educação**: Incentive os colaboradores a aprenderem sobre práticas de programação segura, tipos comuns de vulnerabilidades e como usar suas ferramentas (como SAST ou varredura secreta).

* **Promova a diversidade e a colaboração**: Uma equipe heterogênea traz um conjunto mais amplo de experiências, conhecimento sobre ameaças e habilidades criativas de resolução de problemas. Isso também ajuda a descobrir riscos que outros podem ignorar.
* **Envolva-se com as partes envolvidas**: Suas dependências podem afetar sua segurança e seu projeto afeta outras pessoas. Participe da divulgação coordenada com os mantenedores das partes envolvidas e mantenha os usuários das partes envolvidas informados quando as vulnerabilidades forem corrigidas.

A segurança é um processo contínuo, não uma configuração pontual. Ao envolver sua comunidade, incentivar práticas seguras e apoiar uns aos outros, você constrói um projeto mais forte e resiliente e um ecossistema mais seguro para todos.

## Conclusion: A few steps for you, a huge improvement for your users

These few steps might seem easy or basic to you, but they go a long way to make your project more secure for its users, because they will provide protection against the most common issues.

## Conclusão: Alguns passos para você, uma grande melhoria para seus usuários

Essas poucas etapas podem parecer fáceis ou básicas para você, mas contribuem muito para tornar seu projeto mais seguro para os usuários, pois oferecem proteção contra os problemas mais comuns.

A segurança não é estática. Reavalie seus processos periodicamente, à medida que seu projeto cresce, assim como suas responsabilidades e sua superfície de ataque.

## Contribuidores

### Muitíssimo obrigado a todos os responsáveis ​​pela manutenção que compartilharam suas experiências e dicas conosco para este guia!

Este guia foi escrito por [@nanzggits](https://github.com/nanzggits) & [@xcorail](https://github.com/xcorail) com contribuições de:

[@JLLeitschuh](https://github.com/JLLeitschuh), [@intrigus-lgtm](https://github.com/intrigus-lgtm), [@UlisesGascon](https://github.com/ulisesgascon) + muitos outros!