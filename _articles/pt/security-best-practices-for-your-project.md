---
lang: pt
title: Melhores práticas de segurança para o seu projeto
description: Fortaleça o futuro do seu projeto construindo confiança por meio de práticas essenciais de segurança — desde a autenticação multifator (MFA) e varredura de código até o gerenciamento seguro de dependências e o relato privado de vulnerabilidades.
class: security-best-practices
order: -1
image: /assets/images/cards/security-best-practices.png
---

Deixando de lado bugs e novos recursos, a longevidade de um projeto depende não apenas de sua utilidade, mas também da confiança que ele conquista junto aos usuários. Medidas de segurança robustas são fundamentais para manter essa confiança. Aqui estão algumas ações importantes que você pode adotar para melhorar significativamente a segurança do seu projeto.

## Garanta que todos os contribuidores com privilégios ativem a autenticação multifator (MFA)

### Um agente malicioso que consiga assumir a conta de um contribuidor com privilégios causará danos catastróficos.

Ao obter acesso privilegiado, esse atacante pode modificar seu código para executar ações indesejadas (como minerar criptomoedas), distribuir malware para a infraestrutura dos seus usuários ou acessar repositórios privados para roubar propriedade intelectual e dados sensíveis, incluindo credenciais de outros serviços.

O MFA adiciona uma camada extra de proteção contra o roubo de contas. Com ele ativado, além de informar seu usuário e senha, você precisa fornecer uma segunda forma de autenticação que apenas você possui ou tem acesso.

## Integre a segurança ao seu fluxo de desenvolvimento (Workflow)

### Vulnerabilidades de código são muito mais baratas e fáceis de corrigir quando detectadas no início do processo, antes de chegarem à produção.

Utilize uma ferramenta de Teste Estático de Segurança de Aplicações (SAST) para identificar falhas no seu código. Essas ferramentas analisam diretamente o código-fonte, sem precisar de um ambiente de execução. Por isso, podem rodar logo nas primeiras etapas e se integrar perfeitamente ao seu fluxo de trabalho atual, seja durante a compilação (build) ou nas revisões de código (code review).

É como ter um especialista experiente revisando seu repositório, ajudando a encontrar vulnerabilidades comuns que poderiam passar despercebidas durante o desenvolvimento.

Como escolher sua ferramenta SAST?
Verifique a licença: Várias ferramentas são gratuitas para projetos open source, como o GitHub CodeQL e o Semgrep.
Verifique a cobertura para a(s) linguagem(ns) do projeto.

* Escolha uma que se integre facilmente às ferramentas e processos que você já usa. Por exemplo, é muito mais prático visualizar os alertas diretamente na sua ferramenta de revisão de código do que precisar abrir um painel externo.
* Cuidado com falsos positivos! A ferramenta deve ajudar, e não atrasar o seu trabalho sem motivo.
* Avalie os recursos: algumas ferramentas são extremamente poderosas e realizam o rastreamento de contaminação (*taint tracking*, análise de fluxo de dados sensíveis, como o GitHub CodeQL), outras oferecem sugestões de correção geradas por IA, e há as que facilitam a criação de regras personalizadas (como o Semgrep).

## Não compartilhe os seus segredos

### Dados sensíveis, como chaves de API, tokens e senhas, podem acabar indo parar acidentalmente nos seus commits.

Imagine o seguinte cenário: Você mantém um projeto de código aberto (open source) popular, que recebe contribuições do mundo todo. Um belo dia, um desenvolvedor realiza um commit acidental de  chaves de API de um serviço de terceiros. Pouco tempo depois, alguém encontra essas chaves e as utiliza para acessar o serviço sem permissão. O serviço é comprometido, os usuários enfrentam indisponibilidade e a reputação do projeto vai por água abaixo. Como mantenedor, você agora tem a dor de cabeça de revogar as credenciais vazadas, investigar o que o atacante fez com elas, notificar os usuários afetados e lançar correções.
 
 Para evitar situações como essa, existem soluções de "varredura de segredos" (*secret scanning*) para detectar esses dados sensíveis no seu código. Ferramentas como o GitHub Secret Scanning e o TruffleHog (da Truffle Security) conseguem bloquear o *push* desses dados para as *branches* remotas e, em alguns casos, até revogar as chaves automaticamente para você.

## Monitore e atualize suas dependências

### As dependências do seu projeto podem conter vulnerabilidades que comprometem a segurança da sua aplicação. Atualizá-las manualmente é uma tarefa que pode consumir tempo.

Imagine a seguinte situação: um projeto foi construído sobre uma biblioteca super popular. Tempos depois, descobre-se uma falha crítica de segurança nessa biblioteca, mas as equipes que a utilizam na aplicação não ficam sabendo. Dados sensíveis de usuários ficam expostos e um atacante explora a brecha para roubá-los. Isso não é só teoria: foi exatamente o que aconteceu com a Equifax em 2017. Eles falharam em atualizar o Apache Struts após o alerta de uma vulnerabilidade grave. A falha foi explorada e o megavazamento afetou os dados de 144 milhões de usuários.

Para evitar esse tipo de cenário, ferramentas de Análise de Composição de Software (SCA), como Dependabot e Renovate, verificam automaticamente suas dependências em busca de vulnerabilidades registradas em bancos de dados públicos (como o NVD ou o GitHub Advisory Database) e abrem Pull Requests para atualizá-las para versões seguras. Manter suas bibliotecas em dia é a melhor defesa contra riscos potenciais.

## Entenda e gerencie os riscos das licenças Open Source

### Licenças de código aberto possuem regras, e ignorá-las pode gerar riscos legais e problemas de reputação.

Usar pacotes open source acelera o desenvolvimento, mas cada um deles vem com uma licença que dita como o código pode ser usado, modificado e distribuído. [Algumas licenças são permissivas](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project), enquanto outras (como AGPL ou SSPL) impõem restrições que podem bater de frente com os objetivos do seu projeto ou com as necessidades de seus usuários.

Imagine a seguinte situação: você adiciona uma biblioteca poderosa ao seu projeto, sem saber que ela utiliza uma licença restritiva. Mais tarde, uma empresa quer adotar o seu projeto, mas levanta preocupações sobre a conformidade da licença. O resultado? Você perde a oportunidade de adoção, precisa refatorar o código e a reputação do seu projeto é prejudicada.

Para evitar esses problemas, considere incluir verificações automatizadas de licenças como parte do seu fluxo de trabalho de desenvolvimento. Essas verificações podem ajudar a identificar licenças incompatíveis logo no início do processo, evitando que dependências problemáticas sejam introduzidas no seu projeto.

Outra abordagem poderosa é a geração de uma Lista de Materiais de Software (Software Bill of Materials ou SBOM). Uma SBOM relaciona todos os componentes e seus metadados (incluindo licenças) em um formato padronizado. Ela proporciona visibilidade clara da sua cadeia de suprimentos de software e ajuda a identificar proativamente riscos relacionados a licenciamento.

Assim como as vulnerabilidades de segurança, problemas de licenciamento são mais fáceis de corrigir quando descobertos precocemente. Automatizar esse processo mantém seu projeto saudável e seguro.

## Evite alterações indesejadas com branches protegidas

### O acesso irrestrito às branches principais pode resultar em alterações acidentais ou maliciosas, quebrando a estabilidade do projeto ou introduzindo vulnerabilidades.

Um novo colaborador obtém permissão de escrita na branch principal e, acidentalmente, envia alterações que não foram testadas. Em seguida, descobre-se uma falha de segurança crítica decorrente dessas alterações recentes. Para evitar problemas desse tipo, as regras de proteção de branch garantem que alterações não possam ser enviadas ou mescladas em branches importantes sem antes passar por revisões e cumprir verificações de status específicas. Com essa medida adicional em vigor, você ganha mais segurança e tranquilidade, assegurando sempre uma qualidade de alto nível.

## Facilite (e torne seguro) o relato de problemas de segurança

### É uma boa prática facilitar o relato de bugs pelos usuários, mas a grande questão é: quando esse bug tem impacto na segurança, como eles podem relatá-lo a você com segurança, sem torná-lo um alvo para hackers maliciosos?

Imagine a seguinte situação: um pesquisador de segurança descobre uma vulnerabilidade no seu projeto, mas não encontra uma maneira clara ou segura de relatá-la. Na ausência de um processo definido, ele pode acabar criando uma *issue* pública ou discutindo o assunto abertamente nas redes sociais. Mesmo que ele tenha boas intenções e ofereça uma correção, se o fizer por meio de um *pull request* público, outras pessoas verão a falha antes mesmo de ela ser incorporada ao código! Essa exposição pública deixará a vulnerabilidade visível para agentes maliciosos antes que você tenha a chance de corrigi-la, o que pode resultar em um *exploit* do tipo *zero-day* que ataque o seu projeto e os seus usuários.

### Políticas de Segurança.

Para evitar isso, publique uma política de segurança. Uma política de segurança, definida em um arquivo `SECURITY.md`, detalha os passos para relatar questões de segurança, criando um processo transparente de divulgação coordenada e estabelecendo as responsabilidades da equipe do projeto em relação ao tratamento dos problemas relatados. Essa política de segurança pode ser tão simples quanto "Por favor, não publique detalhes em uma *issue* pública ou *PR*; envie-nos um e-mail privado para security@example.com", mas também pode incluir outras informações, como o prazo esperado para uma resposta da sua parte. Enfim, qualquer coisa que contribua para a eficácia e a eficiência do processo de divulgação.

### Relato Privado de Vulnerabilidades.

Em algumas plataformas, você pode otimizar e fortalecer seu processo de gerenciamento de vulnerabilidades, desde o recebimento do relato até a divulgação pública, utilizando *issues* privadas. No GitLab, isso é feito por meio de *issues* privadas. No GitHub, o recurso é chamado de *Private Vulnerability Reporting* (Relato Privado de Vulnerabilidades ou PVR). O PVR permite que os mantenedores recebam e tratem relatos de vulnerabilidades, tudo dentro da própria plataforma GitHub. O GitHub cria automaticamente um *fork* privado para a implementação das correções e um rascunho de comunicado de segurança (*security advisory*). Todo esse processo permanece confidencial até que você decida divulgar as vulnerabilidades e disponibilizar as correções. Por fim, os comunicados de segurança são publicados, informando e protegendo todos os seus usuários por meio de suas ferramentas de Análise de Composição de Software (*Software Composition Analysis* ou SCA).

### Defina seu modelo de ameaças para ajudar usuários e pesquisadores a entender o escopo.

Antes que pesquisadores de segurança possam relatar problemas de forma eficaz, eles precisam entender quais riscos estão no escopo. Um modelo de ameaças simplificado pode ajudar a definir os limites, o comportamento esperado e as premissas do seu projeto.

Um modelo de ameaças não precisa ser complexo. Mesmo um documento simples, descrevendo o que seu projeto faz, em que ele confia e como pode ser utilizado indevidamente, já é de grande valia. Além disso, ele ajuda você, como mantenedor, a refletir sobre possíveis problemas e riscos herdados de dependências de terceiros.

Um excelente exemplo é o [modelo de ameaças do Node.js](https://github.com/nodejs/node/security/policy#the-nodejs-threat-model), que deixa muito claro o que é e o que não é considerado uma falha de segurança no contexto do projeto deles.

Se você nunca fez isso, o [Processo de Modelagem de Ameaças da OWASP](https://owasp.org/www-community/Threat_Modeling_Process) é um ótimo ponto de partida.

Publicar um modelo de ameaças básico juntamente com a sua política de segurança aumenta a clareza para todos.

## Prepare um plano simples de resposta a incidentes

### Ter um plano básico de resposta a incidentes ajuda você a manter a calma e agir com eficiência, garantindo a segurança de seus usuários e consumidores.

A maioria das vulnerabilidades é descoberta por pesquisadores e relatada de forma privada. No entanto, às vezes, uma falha já está sendo explorada em ambiente real antes de chegar até você. Quando isso ocorre, são os seus usuários e consumidores downstream que correm riscos, e contar com um plano de resposta a incidentes ágil e bem definido pode fazer uma diferença crucial.


<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/ulisesgascon?s=180" class="pquote-avatar" alt="avatar">
  Uma vulnerabilidade é basicamente uma falha, uma má configuração de segurança ou um ponto fraco em nosso sistema que pode ser explorado por terceiros para se comportar de maneiras não intencionais.
  <p markdown="1" class="pquote-credit">
— [@UlisesGascon](https://github.com/ulisesgascon), ["O que é uma Vulnerabilidade e o que não é? Entendendo os Modelos de Ameaças do Node.js e Express"](https://gitnation.com/contents/what-is-a-vulnerability-and-whats-not-making-sense-of-nodejs-and-express-threat-models)
  </p>
</aside>

Mesmo quando uma vulnerabilidade é relatada de forma privada, os próximos passos são importantes. Depois de receber um relatório de vulnerabilidade ou detectar atividade suspeita, o que acontece em seguida?

Ter um plano básico de resposta a incidentes, mesmo que seja apenas uma lista de verificação simples, ajuda você a manter a calma e a agir com eficiência quando o tempo é crucial. Isso também demonstra aos usuários e pesquisadores que você trata incidentes e relatos com seriedade.

Seu processo não precisa ser complexo. No mínimo, defina:

* Quem analisa e faz a triagem de relatórios ou alertas de segurança  
* Como a gravidade é avaliada e como as decisões de mitigação são tomadas  
* Quais etapas você segue para preparar uma correção e coordenar a divulgação  
* Como você notifica usuários, colaboradores ou consumidores downstream afetados

Um incidente mal conduzido pode destruir a confiança da comunidade. Documentar o processo (ou criar um link para ele) no seu `SECURITY.md` ajuda a alinhar expectativas e construir credibilidade.

Para se inspirar, o [Security WG do Express.js](https://github.com/expressjs/security-wg/blob/main/docs/incident_response_plan.md) tem um exemplo simples, porém extremamente eficaz, de plano de resposta a incidentes para open source.

Este plano pode evoluir à medida que seu projeto cresce, mas contar com uma estrutura básica desde já pode economizar tempo e reduzir erros durante um incidente real.

## Trate a segurança como um esforço em equipe

### A segurança não é uma responsabilidade individual. Ela funciona melhor quando compartilhada com a comunidade do seu projeto.

Embora ferramentas e políticas sejam essenciais, uma postura de segurança sólida deriva da forma como sua equipe e seus colaboradores trabalham juntos. Construir uma cultura de responsabilidade compartilhada ajuda seu projeto a identificar, triar e responder a vulnerabilidades de maneira mais rápida e eficaz.

Aqui estão algumas maneiras de transformar a segurança em um trabalho de equipe:

* **Defina papéis claros**: Saiba quem lida com relatórios de vulnerabilidade, quem analisa atualizações de dependências e quem aprova patches de segurança.
* **Limite o acesso usando o princípio do privilégio mínimo**: Conceda acesso de gravação ou de administrador apenas a quem realmente precisa e revise as permissões regularmente.
* **Invista em educação**: Incentive os colaboradores a aprender sobre práticas de codificação segura, tipos comuns de vulnerabilidade e como utilizar suas ferramentas (como SAST ou varredura de segredos).
* **Promover a diversidade e a colaboração**: Uma equipe heterogênea traz um conjunto mais amplo de experiências, consciência de ameaças e habilidades criativas para a resolução de problemas. Também ajuda a identificar riscos que outros poderiam deixar passar.
* **Comunique-se com o ecossistema (upstream e downstream)**: A sua segurança depende dos pacotes que você usa, e quem usa o seu pacote depende da sua segurança. Participe de divulgações coordenadas com os mantenedores das suas dependências e não deixe seus usuários no escuro quando lançar uma correção.

A segurança é um processo contínuo, não uma configuração realizada uma única vez. Ao envolver sua comunidade, incentivar práticas seguras e apoiar uns aos outros, vocês constroem um projeto mais forte e resiliente, além de um ecossistema mais seguro para todos.

## Conclusão: Alguns passos para você, uma enorme melhoria para seus usuários.

Estes poucos passos podem parecer simples ou básicos, mas contribuem significativamente para tornar seu projeto mais seguro para os usuários, pois oferecem proteção contra os problemas mais comuns.

A segurança não é estática. Revise seus processos periodicamente à medida que o projeto cresce; com o crescimento, também aumentam suas responsabilidades e a superfície de ataque.

## Contribuidores

### Muito obrigado a todos os mantenedores que compartilharam suas experiências e dicas conosco para este guia!

Este guia foi escrito por [@nanzggits](https://github.com/nanzggits) e [@xcorail](https://github.com/xcorail) com contribuições de: 

[@JLLeitschuh](https://github.com/JLLeitschuh), [@intrigus-lgtm](https://github.com/intrigus-lgtm), [@UlisesGascon](https://github.com/ulisesgascon) e muitos outros!
