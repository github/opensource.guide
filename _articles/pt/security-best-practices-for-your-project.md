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

Para evitar esse tipo de incidente, existem soluções de  “varredura secreta" (secret scanning) que ajudam a detectar credenciais sensíveis no código. Algumas ferramentas, como GitHub Secret Scanning e Trufflehog da Truffle Security, podem impedir que você os envie para ramificações remotas (branches), e algumas ferramentas revogam automaticamente alguns segredos para você. 

## Verifique e atualize suas dependências

### As dependências do seu projeto podem conter vulnerabilidades que comprometem a segurança geral. Manter dependências atualizadas manualmente pode ser uma tarefa demorada.

Imagine um projeto construído sobre uma biblioteca amplamente usada. Mais tarde, essa biblioteca descobre um grande problema de segurança, mas os desenvolvedores que a utilizam não ficam sabendo. Dados sensíveis de usuários são expostos quando um atacante explora essa falha. Este não é um caso teórico. Foi exatamente o que aconteceu com a Equifax em 2017: quando deixaram de atualizar a dependência do Apache Struts após a notificação de uma vulnerabilidade crítica. O resultado foi uma violação massiva que afetou 144 milhões de usuários.

Para evitar cenários assim, ferramentas de Análise de Composição de Software (Software Composition Analysis - SCA) como Dependabot e Renovate verificam automaticamente as dependências em busca de vulnerabilidades conhecidas publicadas em bancos de dados como o NVD ou o GitHub Advisory Database, e criam pull requests para atualizá-las para versões seguras. Manter-se atualizado com versões seguras protege seu projeto de riscos potenciais.

## Evite alterações indesejadas com branches protegidas

### Acesso irrestrito a branches principais pode causar alterações acidentais ou maliciosas que introduzem vulnerabilidades ou comprometem a estabilidade do projeto.

Um novo contribuidor recebe permissão de escrita na branch principal e, sem querer, envia alterações não testadas. Uma grave falha de segurança é então descoberta nessas mudanças. Para evitar isso, as regras de proteção de branch garantem que alterações não possam ser enviadas ou mescladas em branches críticas sem passar por revisões e verificações de status definidas. Essa camada extra garante mais segurança e qualidade a cada entrega.

## Configure um mecanismo para recebimento de relatórios de vulnerabilidade 

### É uma boa prática facilitar o reporte de bugs pelos usuários, mas a grande questão é: quando o bug tem impacto em segurança, como eles podem reportar isso com segurança, sem expor você a atacantes?

Imagine: um pesquisador de segurança descobre uma vulnerabilidade no seu projeto, mas não encontra uma forma segura de reportá-la. Sem um processo definido, ele pode abrir uma issue pública ou comentar em redes sociais. Mesmo que bem-intencionado, se ele enviar uma pull request pública com a correção, outros verão o problema antes que você possa resolvê-lo. Essa divulgação pública pode expor a vulnerabilidade a agentes maliciosos antes que você tenha a chance de resolvê-la, levando potencialmente a uma exploração de dia zero, atacando seu projeto e seus usuários.

### Política de Segurança 

Para evitar isso, publique uma política de segurança. Uma política de segurança, definida em um arquivo `SECURITY.md`, detalha as etapas para relatar problemas de segurança, criando um processo transparente para divulgação coordenada e estabelecendo as responsabilidades da equipe do projeto para resolver os problemas relatados. Essa política de segurança pode ser tão simples quanto “Por favor, não publique detalhes em issues ou PRs públicos, envie-nos um e-mail privado para security@example.com”, mas também pode conter outros detalhes, como quando eles devem esperar receber uma resposta sua. Qualquer coisa que possa ajudar na eficácia e eficiência do processo de divulgação.

### Relato Privado de Vulnerabilidades

Em algumas plataformas, você pode otimizar e fortalecer seu processo de gerenciamento de vulnerabilidades, desde a recepção até a divulgação, com questões privadas (private issues). No GitLab, isso pode ser feito com questões privadas. No GitHub, isso é chamado de relatório privado de vulnerabilidade (Private Vulnerability Reporting - PVR). O PVR permite que os mantenedores recebam e tratem relatórios de vulnerabilidade, tudo dentro da plataforma GitHub. O GitHub criará automaticamente um fork privado para escrever as correções e um rascunho de aviso de segurança. Tudo isso permanece confidencial até que você decida divulgar as questões e lançar as correções. Para fechar o ciclo, os avisos de segurança serão publicados e informarão e protegerão todos os seus usuários por meio da ferramenta SCA.

## Conclusão: alguns passos simples, um grande avanço para seus usuários

Esses poucos passos podem parecer básicos, mas representam um enorme ganho em segurança para seus usuários, pois fornecem proteção contra os problemas mais comuns.

## Contribuidores

### Agradecimentos a todos os mantenedores que compartilharam suas experiências e dicas para este guia!

Este guia foi escrito por [@nanzggits](https://github.com/nanzggits) e [@xcorail](https://github.com/xcorail) com contribuições de:  

[@JLLeitschuh](https://github.com/JLLeitschuh)  
[@intrigus-lgtm](https://github.com/intrigus-lgtm) + muitos outros!
