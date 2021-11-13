---
lang: fr
title: Bonnes pratiques pour les responsables
description: Facilitez-vous la vie en tant que responsable Open Source, de la documentation des processus à l'exploitation de votre communauté.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Que signifie &ecirc;tre un responsable

Si vous gérez un projet Open Source utilisé par beaucoup de personnes, vous avez peut-être remarqué que vous passez moins de temps à coder tandis que vous répondez à d'autres problèmes.

Au début d'un projet, vous expérimentez de nouvelles idées et prenez des décisions en fonction de ce que vous voulez. Et au fur et à mesure que votre projet gagne en popularité, vous travaillerez de plus en plus avec vos utilisateurs et vos contributeurs.

Maintenir un projet open-source, c'est plus que coder: Des autres tâches souvent inattendues vont arriver, et elles sont tout aussi importantes pour un projet en croissance. Nous avons rassemblé quelques moyens pour vous faciliter la vie, de la documentation des processus à l'exploitation de votre communauté.

## Documentez vos processus

Écrire et documenter est l'une des activités les plus importantes que vous pouvez faire en tant que responsable.

La documentation clarifie non seulement votre propre pensée, mais elle aide les autres à comprendre ce dont vous avez besoin ou ce que vous attendez, avant même de le demander.

Rédiger de la documentation rend plus facile de dire non quand quelque chose ne rentre pas dans votre champ d'application. Cela facilite également la tâche des gens. Vous ne savez jamais qui pourrait lire ou utiliser votre projet.

Même si vous n'utilisez pas des paragraphes entiers, utiliser déjà des listes de points est mieux que de ne pas écrire du tout.

N'oubliez pas de garder votre documentation à jour. Si vous n'êtes pas toujours en mesure le faire, supprimez votre documentation obsolète ou indiquez qu'elle est obsolète afin que les contributeurs sachent que l'information présente ne reflète pas toujours la réalité et que des mises à jour sont bienvenues.

### Décrivez la vision de votre projet

Commencez par écrire les objectifs de votre projet. Ajoutez-les à votre fichier README ou créez un fichier distinct appelé VISION. S'il y a d'autres artefacts qui pourraient aider, comme une feuille de route de projet, rendez-les aussi publics.

Avoir une vision claire et documentée vous permet de rester concentré et vous aide à éviter le «glissement de portée» des contributions des autres.

Par exemple, @lord a découvert que le fait d'avoir une vision de projet l'aidait à déterminer les demandes pour lesquelles il devait passer du temps. En tant que nouveau responsable, il a regretté de ne pas s'en tenir à la portée de son projet quand il a obtenu sa première demande de fonctionnalité pour [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  J'ai foiré. Je n'ai pas fait l'effort de trouver une solution complète. Au lieu d'une solution à moitié finie, j'aurais aimé dire "Je n'ai pas le temps pour cela maintenant, mais je vais l'ajouter à la liste à long terme".
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Communiquez vos attentes

Les règles peuvent être angoissantes à écrire. Parfois, vous pourriez avoir l'impression de surveiller le comportement des autres ou de tuer dans l'oeuf tout le plaisir.

Écrit et appliqué équitablement, cependant, de bonnes règles habilitent les responsables. Elles vous empêchent d'être entraînés à faire des choses que vous ne voulez pas faire.

La plupart des personnes qui découvrent votre projet ne savent rien de vous ou de votre situation. Ils peuvent supposer que vous êtes payé pour travailler dessus, surtout si c'est quelque chose qu'ils utilisent régulièrement et dont ils dépendent. Peut-être qu'à un moment donné, vous avez consacré beaucoup de temps à votre projet, mais maintenant vous êtes occupé avec un nouvel emploi ou votre situation personnelle ou familiale a changé.

Tout cela est parfaitement normal ! Assurez-vous simplement que les autres personnes en prennent connaissance.

Si le maintien de votre projet se fait à temps partiel ou de façon purement volontaire, soyez toujours honnête quant au temps dont vous disposez. Ce n'est pas la même chose que le temps que vous estimez nécessaire au projet ou combien de temps les autres vous demandent.

Voici quelques règles qui méritent d'être notées :

* Comment une contribution est-elle examinée et acceptée (_A-t-elle besoin de tests ? Un modèle de question ?_)
* Les types de contributions que vous acceptez (_Vous voulez seulement de l'aide pour une partie de votre code ?_)
* Lorsqu'il est approprié de faire un suivi (_par exemple, "Vous pouvez vous attendre à recevoir une réponse d'un responsable dans les 7 jours. Toutefois si vous n'avez pas encore de retour, n'hésitez pas à revenir vers nous."_)
* Combien de temps vous consacrez au projet (_par exemple, "Nous ne consacrons que 5 heures par semaine à ce projet"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), et [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sont plusieurs exemples de projets avec des règles de base pour les responsables et les contributeurs.

### Maintenez la communication publique

N'oubliez pas de documenter aussi vos interactions. Partout où vous pouvez, gardez la communication sur votre projet publique. Si quelqu'un tente de vous contacter en privé pour discuter d'une demande de fonctionnalité ou d'un besoin de support, dirigez-le poliment vers un canal de communication public, telle qu'une liste de diffusion ou un outil de suivi des problèmes.

Si vous rencontrez d'autres responsables, ou prenez une décision importante en privé, documentez ces conversations en public, même si cela ne concerne que la publication de vos notes.

De cette façon, toute personne qui rejoint votre communauté aura accès à la même information que quelqu'un là depuis des années.

## Apprennez &agrave; dire non

Vous avez rédigé des informations. Idéalement, tout le monde lira votre documentation, mais en réalité, vous devrez rappeler aux autres que cette connaissance existe.

Cependant, tout noter contribue à dépersonnaliser les situations lorsque vous devez appliquer vos règles.

Dire non n'est pas amusant, mais _"Votre contribution ne correspond pas aux critères de ce projet"_ est moins personnelle que _"Je n'aime pas votre contribution"_.

Dire non s'applique à de nombreuses situations que vous rencontrerez en tant que responsable : des demandes de fonctionnalités qui ne correspondent pas à la portée, quelqu'un qui déraille dans une discussion, ou qui fait un travail inutile pour les autres.

### Gardez la conversation amicale

L'un des endroits les plus importants où vous devez savoir dire non est sur les issues et la file d'attente des pull requests. En tant que responsable du projet, vous recevrez inévitablement des suggestions que vous ne souhaitez pas accepter.

Peut-être que la contribution modifie la portée de votre projet ou ne correspond pas à votre vision. Peut-être que l'idée est bonne, mais la mise en œuvre est mauvaise.

Peu importe la raison, il est possible de gérer avec tact les contributions qui ne répondent pas aux normes de votre projet:

Si vous recevez une contribution que vous ne voulez pas accepter, votre première réaction pourrait être de l'ignorer ou de prétendre que vous ne l'avez pas vue. Cela pourrait nuire aux sentiments de l'autre et même démotiver d'autres contributeurs potentiels dans votre communauté.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  La clé pour gérer le support des projets Open Source à grande échelle est de continuer à faire bouger les issues. Essayez d'éviter que les issues stagnent. Si vous êtes un développeur iOS, vous savez à quel point il peut être frustrant de soumettre des radars. Vous pourriez entendre revenir 2 ans plus tard, et on vous dit d'essayer à nouveau avec la dernière version d'iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Ne laissez pas une contribution indésirable ouverte parce que vous avez un sentiment de culpabilité ou que vous voullez être gentil. Au fil du temps, vos issues laissées sans réponse et les pull requests rendront le travail sur votre projet beaucoup plus stressant et intimidant.

Il est préférable de fermer immédiatement les contributions que vous ne voulez pas accepter. Si votre projet souffre déjà d'un important retard, @steveklabnik propose des suggestions pour [comment trier efficacement les issues](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Deuxièmement, ignorer les contributions envoie un signal négatif à votre communauté. Contribuer à un projet peut être intimidant, surtout s'il s'agit de la première fois. 

IMPORTANT: Même si vous n'acceptez pas une contribution, remerciez la personne qui a pris de son temps pour votre projet et remerciez-la de son intérêt. C'est un gros compliment!

Si vous ne voulez pas accepter une contribution:

* **Remerciez la personne** pour sa contribution
* **Expliquez pourquoi cela ne rentre pas** dans la portée du projet et proposez des suggestions d'amélioration claires, si vous le pouvez. Soyez gentil, mais ferme.
* **Référencez vers la documentation pertinente**, si vous l'avez. Si vous remarquez des demandes répétées pour des choses que vous ne voulez pas accepter, ajoutez-les dans votre documentation pour éviter de devoir vous répéter.
* **Fermez la demande**

Vous ne devriez pas avoir besoin de plus de 1 à 2 phrases pour répondre. Par exemple, lorsqu'un utilisateur de [celery](https://github.com/celery/celery/) a signalé une erreur liée à Windows, @berkerpeksag [a répondu ainsi](https://github.com/celery/celery/issues/3383):

![Capture d'écran de celery](/assets/images/best-practices/celery.png)

Si la pensée de dire non vous terrifie, vous n'êtes pas seul. Comme @jessfraz [le met](https://blog.jessfraz.com/post/the-art-of-closing/):

> J'ai parlé à des responsables de plusieurs projets open source différents, Mesos, Kubernetes, Chromium, et ils sont tous d'accord que l'un des aspects les plus difficiles d'un responsable est de dire "Non" aux correctifs que vous ne voulez pas.

Ne vous sentez pas coupable de ne pas vouloir accepter la contribution de quelqu'un. La première règle de l'open source, [selon](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Non est temporaire, oui est pour toujours."_. Alors que l'empathie avec l'enthousiasme d'une autre personne est une bonne chose, rejeter une contribution n'est pas la même chose que rejeter la personne qui a fait cette contribution.

En fin de compte, si une contribution n'est pas suffisante, vous n'êtes pas obligé de l'accepter. Soyez gentil et réactif lorsque les gens contribuent à votre projet, mais n'acceptez que les changements qui, selon vous, amélioreront votre projet. Et plus souvent vous pratiquez le non, plus cela devient facile. Garanti.

### Soyez pro-actif

Pour réduire le volume des contributions non désirées, expliquez le processus de soumission et d'acceptation des contributions de votre projet dans votre guide.

Si vous recevez trop de contributions de faible qualité, demandez aux contributeurs de faire un peu de travail à l'avance, par exemple:

* Remplir une issue ou un modèle de PR / checklist
* Ouvrir une issue avant de soumettre une PR

S'ils ne respectent pas vos règles, fermez immédiatement l'issue en les référant à votre documentation.

Bien que cette approche puisse sembler dure au début, être proactif est réellement bénéfique pour les deux parties. Cela réduit le risque que quelqu'un consacre beaucoup d'heures de travail à une pull request et qui seront  perdues parce que vous n'allez pas l'accepter. Et cela rend votre charge de travail plus facile à gérer.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Idéalement, expliquez-leur dans un fichier CONTRIBUTING.md comment ils peuvent obtenir une meilleure indication de ce qui serait ou ne serait pas accepté avant qu'ils commencent leur travail.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Parfois, quand vous dites non, votre contributeur potentiel peut se fâcher ou critiquer votre décision. Si leur comportement devient hostile, [prenez des mesures pour désamorcer la situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) ou même supprimez-le de votre communauté s'il ne souhaite pas collaborer de manière constructive.

### Embrassez le mentorat

Peut-être que quelqu'un dans votre communauté soumet régulièrement des contributions qui ne répondent pas aux normes de votre projet. Il peut être frustrant pour les deux parties de passer à plusieurs reprises par des rejets.

Si vous voyez que quelqu'un est enthousiaste à propos de votre projet, mais qu'il a besoin d'un peu de polish, soyez patient. Expliquer clairement dans chaque situation pourquoi ses contributions ne répondent pas aux attentes du projet. Essayez de le diriger vers une tâche plus facile ou moins ambiguë, comme une question marquée _"bonne premiere issue"_, pour se faire la main. Si vous avez le temps, envisagez de l'encadrer à travers sa (ou ses) première(s) contribution(s), ou de trouver quelqu'un dans votre communauté disposé à le faire à votre place.

## Tirez parti de votre communauté

Vous n'avez pas à tout faire vous-même. La communauté de votre projet existe pour une raison ! Même si vous n'avez pas encore de communauté de contributeurs actifs, si vous avez beaucoup d'utilisateurs, mettez-les au travail.

### Partagez la charge de travail

Si vous cherchez d'autres personnes, commencez par le demander.

Lorsque vous voyez de nouveaux contributeurs faire des contributions répétées, reconnaissez leur travail en offrant plus de responsabilités. Documentez comment les autres peuvent devenir des leaders s'ils le souhaitent.

Encourager les autres à [partager la propriété du projet](/fr/building-community/#partager-la-propri%C3%A9t%C3%A9-de-votre-projet) peut réduire considérablement votre charge de travail, comme l'a découvert @lmccart sur son projet, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Je disais: "Oui, n'importe qui peut être impliqué, vous n'avez pas besoin d'avoir beaucoup d'expertise en codage (...)". Nous avions des gens qui s'inscrivaient pour venir à un événement et à ce moment là je me suis vraiment demandé: est-ce possible, j'ai vraiment dit ça? Il y aura 40 personnes qui vont se présenter, et ce n'est pas comme si je pouvais m'asseoir avec chacune d'entre elles... Mais les gens se sont réunis, et ça a tout simplement fonctionné. Dès qu'une personne a compris quelque chose, elle peut l'enseigner à son voisin.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Si vous avez besoin de quitter votre projet, que ce soit pour faire une pause ou de façon définitive, il n'y a pas de honte à demander à quelqu'un d'autre de vous remplacer.

Si d'autres personnes sont enthousiastes à l'égard de sa direction, donnez leur l'autorisation de s'engager ou remettez officiellement le contrôle à quelqu'un d'autre. Si quelqu'un a forké votre projet et le maintient activement ailleurs, envisagez de créer un lien vers ce fork de votre projet d'origine. C'est génial qu'autant de gens veulent que votre projet continue à vivre !

@progrium [a trouvé que](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) en documentant la vision de son projet, [Dokku](https://github.com/dokku/dokku), cela l'a aidé à atteindre ces objectifs même après s'être retiré du projet:

> J'ai écrit une page wiki décrivant ce que je voulais et pourquoi je le voulais. Pour une raison ou une autre, j'ai été surpris de constater que les responsables ont commencé à faire avancer le projet dans cette direction ! Est-ce arrivé exactement comment je l'aurai fait ? Pas toujours. Mais cela rapprochait le projet de ce que j'avais écrit.

### Laissez les autres construire les solutions dont ils ont besoin

Si un contributeur potentiel a une opinion différente sur ce que votre projet devrait faire, vous pouvez l'encourager doucement à travailler sur son propre fork.

Forker un projet ne doit pas être une mauvaise chose. Être capable de copier et de modifier des projets est l'une des meilleures choses à propos de l'open source. Encourager les membres de votre communauté à travailler sur leur propre fork peut leur fournir le débouché créatif dont ils ont besoin, sans entrer en conflit avec la vision de votre projet.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Je réponds a 80% des cas d'utilisation. Si vous êtes l'une des licornes, s'il vous plaît forkez mon travail. Je ne serai pas offensé ! Mes projets publics sont presque toujours destinés à résoudre les problèmes les plus courants. J'essaie de faire en sorte qu'il soit plus facile d'approfondir mon travail ou de le prolonger.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

La même chose s'applique à un utilisateur qui veut vraiment une solution tandis que vous n'avez tout simplement pas le temps matérielpour la réaliser. L'offre existante d'API et de hooks de personnalisation peut aider les autres à répondre à leurs propres besoins, sans avoir à modifier directement la source. @orta [a trouvé que](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encourager les plugins pour CocoaPods a conduit à "quelques-unes des idées les plus intéressantes":

> Il est presque inévitable qu'une fois qu'un projet prend de l'ampleur, les responsables doivent être beaucoup plus conservateurs quant à la façon dont ils introduisent du nouveau code. Vous devenez bon à dire «non», mais beaucoup de gens ont des besoins légitimes. Ainsi, vous finissez par convertir votre outil en plate-forme.

## Donnez-le aux robots

Tout comme il existe des tâches que d'autres personnes peuvent vous aider à accomplir, il y a aussi des tâches que personne ne devrait jamais avoir à faire. Les robots sont vos amis. Utilisez-les pour rendre votre vie de responsable plus facile.

### Exigez des tests et autres vérifications pour améliorer la qualité de votre code

L'un des moyens les plus importants pour automatiser votre projet consiste à ajouter des tests.

Les tests aident les contributeurs à prenser qu'ils ne casseront rien. Les tests facilitent également la consultation et l'acceptation plus rapide des contributions. Plus vous êtes réactif, plus votre communauté peut être engagée.

Configurez des tests automatiques qui s'exécuteront sur toutes les contributions entrantes, et assurez-vous que vos tests puissent être facilement exécutés localement par les contributeurs. Exigez que toutes les contributions de code passent vos tests avant de pouvoir être soumises. Vous aiderez ainsi à définir une norme de qualité minimale pour toutes les soumissions. La [vérifications du status requis](https://help.github.com/articles/about-required-status-checks/) sur GitHub peut vous aider à vous assurer qu'aucune modification ne sera fusionnée (mergée) avec l'existant sans que vos tests continuent à passer.

Si vous ajoutez des tests, assurez-vous d'expliquer comment ils fonctionnent dans votre fichier CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Je crois que des tests sont nécessaires pour tout le code sur lequel les gens travaillent. Si le code était complet et parfaitement correct, il n'aurait pas besoin de modifications - nous n'écrivons du code que lorsque quelque chose ne va pas, que ce soit "Il plante" ou "Il manque telle ou telle fonctionnalité". Et quels que soient les changements que vous effectuez, les tests sont essentiels pour détecter les régressions que vous pourriez introduire accidentellement.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utilisez des outils pour automatiser les tâches de maintenance de base

La bonne nouvelle à propos du maintien d'un projet populaire est que d'autres responsables ont probablement déjà fait face à des problèmes similaires et ont déjà une solution pour cela.

Il existe une [variété d'outils disponibles](https://github.com/showcases/tools-for-open-source) pour aider à automatiser certains aspects du travail de maintenance. Quelques exemples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatise vos releases
* [mention-bot](https://github.com/facebook/mention-bot) mentionne les reviewers potentiels pour les pull requests
* [Danger](https://github.com/danger/danger) permet d'automatiser les revues de code

Pour les rapports de bogues et autres contributions communes, GitHub a des [Modèles d'issues et modèles de pull requests](https://github.com/blog/2111-issue-and-pull-request-templates), que vous pouvez utiliser pour rationaliser la communication que vous recevez. @TalAter a réalisé un guide [Choisissez Votre Propre Aventure] (https://www.talater.com/open-source-templates/#/) pour vous aider à rédiger vos issues et vos modèles de PR.

Pour gérer vos notifications par e-mail, vous pouvez configurer [des filtres e-mail](https://github.com/blog/2203-email-updates-about-your-own-activity) pour les organiser par priorité.

Si vous souhaitez être un peu plus avancé, les guides de style et les linters peuvent standardiser les contributions de projet et les rendre plus faciles à consulter et à accepter.

Cependant, si vos normes sont trop compliquées, elles peuvent augmenter les obstacles à la contribution. Assurez-vous d'ajouter suffisamment de règles pour faciliter la vie de tous.

Si vous n'êtes pas sûr des outils à utiliser, regardez ce que font les autres projets populaires, en particulier ceux de votre écosystème. Par exemple, à quoi ressemble le processus de contribution pour les autres modules Node? L'utilisation d'outils et d'approches similaires rendra votre processus plus familier à vos contributeurs cibles.

## Il est normal de faire une pause

Le travail open source vous a déjà apporté beaucoup des joies. Cependant il peut arriver que vous commencez à vous sentir fuyant ou coupable.

Peut-être vous sentez-vous débordé ou un sentiment croissant d'effroi quand vous pensez à vos projets. Et pendant ce temps, les issues et les pull requests s'accumulent.

Le burnout est un problème réel et omniprésent dans le travail open source, en particulier chez les responsables. En tant que responsable, votre santé est une exigence non négociable pour la survie de tout projet open source.

Bien que ça devrait aller de soi, dans ces cas, faites une pause ! Vous ne devriez pas avoir à attendre de vous sentir usé pour prendre des vacances. @brettcannon, un développeur de base Python, a décidé de prendre [un mois de vacances](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) après 14 années de bénévolat de travail sur les logiciels open source.

Tout comme n'importe quel autre type de travail, prendre des pauses régulières vous gardera frais, heureux et excité par votre travail.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  En maintenant le WP-CLI, j'ai découvert que je devais d'abord me rendre heureux et fixer des limites claires sur mon implication. Le meilleur équilibre que j'ai trouvé est de 2 à 5 heures par semaine, dans le cadre de mon horaire de travail normal. Cela maintient ma participation en tant que passion, sans le sentir trop comme du travail. Parce que je priorise les problèmes sur lesquels je travaille, je peux faire des progrès réguliers sur ce que je pense être le plus important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Parfois, il peut être difficile de faire une pause dans le travail open source quand on a l'impression que tout le monde a besoin de vous. Les gens peuvent même essayer de vous faire sentir coupable d'avoir abandonné.

Vous vous mettez en pause un moment? Faites alors de votre mieux pour trouver du support pour vos utilisateurs et votre communauté pendant votre absence sur le projet. Si vous ne trouvez pas le soutien dont vous avez besoin, _faites une pause quand même_. Assurez-vous toutefois de communiquer même lorsque vous n'êtes pas disponible, afin que les gens ne soient pas perturbés par votre absence ou votre manque de réactivité.

Prendre des pauses s'applique aussi en dehors des vacances officielles: Si vous ne voulez pas faire du travail open source le week-end, ou pendant les heures de travail, communiquez ces attentes aux autres, afin qu'ils sachent ne pas vous déranger.

## Prennez soin de vous d'abord !

Maintenir un projet populaire nécessite des compétences différentes des étapes précédentes de la croissance, et c'est tout aussi gratifiant: En tant que responsable, vous pratiquerez le leadership et les compétences personnelles à un niveau que peu de gens connaissent. Bien que ce ne soit pas toujours facile à gérer, définir des limites claires et accepter uniquement ce avec quoi vous êtes à l'aise vous aidera à rester heureux, en santé et productif.
