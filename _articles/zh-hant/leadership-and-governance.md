---
lang: zh-hant
title: 領導與治理
description: 有了正式規則的決策，可讓開源專案順利的成長。
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
redirect_from: /zh-tw/leadership-and-governance/
---

## 針對增長的專案來理解治理

當專案開始有條不紊的進行，人員也開始穩定，那麼你就應該開始社群的治理了。對於社群的治理，你或許有一些疑問，諸如如何將常規專案的貢獻者納入你的工作流？如何才能判斷應該賦予誰提交的權限？又或者是如何解決社群的債務？如果你對這些有疑問的話，我們這裏會盡力幫你解決。

## 開源專案中通常都有那些角色

很多專案針對貢獻者角色和身份均遵循相似的結構。

這些角色實際上意味着什麼完全取決於你。我們這裏所列舉的，相信你是非常熟悉的了：

* **維護者**
* **貢獻者**
* **修訂者**

**對於某些專案來說， "維護者"** 就是唯一擁有提交權限的人。然而在其它的一些專案中，維護者會列在README上  

作爲一名維護者，不一定非得一定要爲專案撰寫程式。有可能是專案的佈道師，爲專案的宣傳做了很多的工作，又或者是撰寫文件讓更多的人參與進來。不管他們每天做什麼，維護者就是那些對專案方向負責的人，並致力於專案的改進。

**作爲 "貢獻者" 可以是任何人** ，只要提出issue或PR 就叫做貢獻者，那些爲專案作出有價值的都算（無論是分類問題，編寫程式還是組織會議），又或者是將他們的PR合並進主乾的（或許這個定義是最接近所謂的貢獻者的）。

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/579?v=3&s=460" class="pquote-avatar" alt="avatar">
  \[對於 Node.js 來說\] 無論是在issue中提交評論，還是提交程式碼，任何人都是專案社群的成員。只要能夠看到他們，就意味着他們已經實現了跨越，從路人成爲一個用戶，成爲一個貢獻者。
  <p markdown="1" class="pquote-credit">
— @mikeal, ["開源的健康衡量"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**術語 "修訂者"** 可能用於區分其他形式的貢獻的提交訪問，這是一種特定類型的責任。

其實你可以根據自己喜歡的方式來定義專案的角色，[考慮使用更廣泛的定義](../how-to-contribute/#具體而言什麼是貢獻) 來鼓勵更多的形式的貢獻。無論技術技能如何，您都可以使用領導角色來正式識別爲您的專案做出突出貢獻的人員。

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/21148?v=3&s=460" class="pquote-avatar" alt="avatar">
  你們或許知道我是 Django 的"創始人"...其實真相是在有人僱傭了我之後一年才真正的做出來。(...) 人們猜測我的成功是因爲我的編程技能夠牛...但事實上我的編程水平只是一般般而已。
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (視頻)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## 該如何將這些領導力角色正規化

將領導力角色正規化，可以幫助人們找到歸屬感，且可以讓其它社群成員明白應該找誰能夠獲得幫助。

對於一個較小的專案來講，指定領導者，只需要在 README 或 CONTRIBUTORS 文本文件中寫上他們的名字即可。

對於稍大型點的專案，如果你已經擁有了網頁的話，那麼請創建一個團隊的頁面，或者創建一個團隊領導的頁面。舉例來說， [PostgreSQL](https://github.com/postgres/postgres/) 就擁有一個[很全面地團隊頁面](https://www.postgresql.org/community/contributors/) ，而且每位貢獻者都擁有簡短的介紹。

如果你的專案擁有非常活躍的貢獻者社群，你或許會專門建立一個維護者的"核心團隊"，甚至是根據不同的話題所有者成立子的委員會（例如，安全，問題篩選，或者是社群準則）。讓人們自行組織、且能夠讓志願者自行找到自己喜歡的角色，而不是去分配他們。

<aside markdown="1" class="pquote">
  \[我們\] 爲核心團隊設立多個"子團隊"。每個子團隊都會專門的聚焦於某個特定的領域，舉例來說，語言設計或程序庫(...) 爲了確保全局的協調和健壯，會將整體的專案設置爲同一個願景，每個子團隊是由核心團隊的一員。
  <p markdown="1" class="pquote-credit">
— ["Rust 治理 RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

領導者團隊或許要創建一個指定的頻道（如IRC），又或者是參與專案的日常討論（如Gitter或Google Hangout）。你需要將這些會議可以公開訪問，以便讓人們方便傾聽。舉例來說，
 [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby)就會[每週開一次會議，每次持續幾小時](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

一旦你建立了領導力角色，一定不要忘記撰寫文件，告訴人們如何成爲領導者！要爲如何成爲一名維護者或加入到專案的子委員會創建一個清晰的流程，並將之寫入 GOVERNANCE.md 文件。

諸如[Vossibility](https://github.com/icecrime/vossibility-stack) 這樣的工具，可以幫助你追蹤誰是（或不是）專案的貢獻者。爲這些資訊作說明，以避免社群出現維護者作出私自的決定。

另外，如果你的專案在託管在GitHub上，考慮將你的專案從個人賬戶遷移到某個組織，而且要爲組織增加額外的一個備份的管理員。
[GitHub 上的組織](https://help.github.com/articles/creating-a-new-organization-account/) 能夠讓權限管理和多倉庫管理更加的輕鬆，而且可通過 [共享所有權](../building-community/#分享專案的所有權)來保護你的專案。

## 何時該賦予提交者權限

有的人認爲專案應該對所有人都開放提交訪問，從而讓任何人都可以做出貢獻。理由是這樣做的話，會讓人們感到擁有這個專案，進而達到鼓勵的目的。

換句話說，尤其是針對那些大型的、更加複雜的專案，你或許只是會給那些證明自己有能力提交程式碼的人賦予權限。這個沒有一個確切的衡量標準，做你認爲正確的就好了，或者是最讓專案成員感到舒服的方式。

假如專案是託管在GitHub上，可以使用[受保護的分支](https://help.github.com/articles/about-protected-branches/)來管理那些可以提交特定的分支情況。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/15000?v=3&s=460" class="pquote-avatar" alt="avatar">
  無論什麼時候，都會有人向你發送pull request，所以將你的專案開放提交訪問。這看起來是有些不夠明智，使用此策略能讓你釋放GitHub的真正威力。(...)一旦人們擁有了提交訪問權,他們不再擔心他們的補丁可能不會被合併.....這會讓他們做的更多。
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](http://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## 對於開源專案來說有那些常見的治理結構

關於開源專案有三類通用的相關治理結構。

* **BDFL:** BDFL 是 "仁慈的獨裁者生活" 的縮寫. 在此結構下，有一個人（通常是專案的最初的作者）擁有專案中所有的最後決定權。[Python](https://github.com/python) 就是一個非常經典的例子。較小的專案可能默認就是 BDFL 結構，因爲他一般就是一到兩位維護者。若是公司組織的專案也極有可能會採用BDFL結構。

* **精英制:** **(注: 術語 "精英制" 對於一些社群可能具有消極的含義，其擁有較[複雜的社會和政治的歷史](http://geekfeminism.wikia.com/wiki/Meritocracy).)** 在精英制下，活躍的專案貢獻者（他們用行動證明自己是"精英"）給一個正式的決策作用，決定通常會基於純粹的投票一致性。精英制的概念首次由[Apache Foundation](http://www.apache.org/)提出；[所有的Apache 專案](http://www.apache.org/index.html#projects-list) 都是基於精英制的。貢獻者只能代表自己是獨立的個體，不可以是公司。

* **自由貢獻:** 在自由貢獻的模式下，做最多工作的人通常被認爲是最具影響力的，但是是基於當前的工作，而不是歷史的共享。專案的重大決策是基於尋求共識的過程（對不同的聲音要討論）而不是純粹的投票，儘可能的努力的去囊括多的社群觀點。較流行的使用自由貢獻模式的專案有[Node.js](https://nodejs.org/en/foundation/) 和 [Rust](https://www.rust-lang.org/en-US/)。

應該選擇哪一種模式了呢？由你自己來做決定！每個模式都有優點，也有缺點。雖然上面的描述乍一看，這三種模式有着很大的不同，其實不然，它們還是有着共同點的。如果你對上述三種模式有興趣，可以採用下面的模版：

* [BDFL 模式模版](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [精英模式模版](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js 的自由貢獻規則](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951#.m9ht26e79)

## 當我創建開源專案時，需要專門撰寫一份治理文件嗎

其實沒有什麼合適的時間來撰寫專案的治理，但是可以根據社群的動態來進行恰當的定義。開源治理最好的也是最難的部分是有社群本身來塑造！

在專案的治理中，一些早期的文件將會不可避免的，然而也不必太強求，寫下你所能夠想到的。舉例來說，你可以將某些預期的行爲定義清楚，貢獻的流程是如何的，或者專案是如何啓動的，等等。

如果你自己是公司所啓動開源的一部分，在啓動之前，應該做一些討論，如公司將會如何維護專案，隨着專案的發展，決策該如何定奪。你可以會公開的解釋一下，貴公司將如何參與（或不參與）該專案。

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/691109?v=3&s=460" class="pquote-avatar" alt="avatar">
  我們在GitHub上賦予一些小的團隊來管理專案，實際上這些人都是在Facebook工作的，比如，React就是由React的工程師來掌管運行的。
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Facebook內部員工如何看待開源"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## 公司員工該如何開啓提交貢獻之旅？

成功的開源專案，會有很多的用戶和公司使用，而且有一些公司的主要收入和專案是綁在一起的。舉例來說，某公司在其商業產品或服務中使用了開源專案的程式碼作爲其一個組件。

一個專案越是被廣泛的使用，有相關背景的專業人士的需求就會上升，**你或許就是其中之一**，那麼就順勢成爲繼續爲開源專案做事，還有一定的報酬。

將商業的活動視爲正常不過的事情很重要，它也只是程式碼的開發方法之一。爲開發者付費不應該被特殊的對待，好像程式碼必須是無償開發的才行；每個貢獻都必須有技術的衡量標準來進行評估。人們應該在這些商業的活動中感到非常的自在，而且針對特定的增強或功能項討論時也應是坦蕩的、自然的。

"商業" 是完全和"開源"相容的。"商業"僅僅是意味着某些地方有錢的參與 —— 就是說軟體被用於了商業行爲，也就是說專案被採用獲得了認可。（當開源軟體被用於非開源產品的一個部分時，這個整體的產品仍然是"專有的"軟體，因爲開源，它可以用於商業或非商業的目的。）

和這個世界上很多的其它商業產品一樣，商業能夠激勵開發者去積極的貢獻於專案，通過他們靠譜的提交貢獻。顯而易見的是，一位因花了自己的時間和精力的開發者獲得報酬，理應比沒有獲得報酬的更具持久性，當然，這對於某些聖徒是不成立的，或者這麼說吧，報酬是能體現一個貢獻度的衆多衡量因素的其中之一。所以將你的專案討論聚焦於貢獻上，不要讓人們分散精力去思考或做其它的事情。

## 我是否需要一個法律實體來支持我的專案

除非你特別的有錢，其實你根本沒有必要爲開源專案而專門搞一個法律實體來支持。

舉例來說，假如你打算創辦自己的商業公司，（假如是在美國的話）你需要成立一家集團公司或有限責任公司。如果你只是爲你的開源專案做一些合約的工作，你可以以投資人的身份接受錢財，或者成立一家有限責任公司（如果是在美國的話）。

如果你打算讓自己的開源專案接受捐贈的話，你可以創建一個捐贈按鈕（使用PayPal或Stripe，舉例來說），但是你要知道，這些錢並非是免稅的，除非你是認證過的非盈利性組織（在美國的話，諸如501c3）。

很多專案都不願意成立非盈利組織那麼麻煩，所以他們會以贊助商的身份尋找一個非營利性組織。財政資助代表你接受捐款,通常以換取一定比例的捐贈。針對開源專案接受財政資助的非營利性組織有很多，如[Software Freedom Conservancy](https://sfconservancy.org/), [Apache 基金會](http://www.apache.org/), [Eclipse 基金會](https://eclipse.org/org/foundation/), [Linux 基金會](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) 等等。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3671070?v=3&s=460" class="pquote-avatar" alt="avatar">
  我們的目標是提供基礎設施，讓社群能夠自我持續發展下去，每個人——貢獻者、支持者、贊助商———所共同營造的環境，也讓每個人得到實實在在的利益。
  <p markdown="1" class="pquote-credit">
— @piamancini, ["超越 charity 框架"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

如果你的專案是和某特定的語言或生態系統緊密相連的，那麼你可以直接在相關的軟體基金會下工作。例如，[Python 軟體基金會](https://www.python.org/psf/) 就幫襯著專案 [PyPI](https://pypi.python.org/pypi)，這是一塊優秀的Python包管理器，又比如[Node.js 基金會](https://nodejs.org/en/foundation/) 支撐着 [Express.js](http://expressjs.com/)，一款基於Node的框架。
