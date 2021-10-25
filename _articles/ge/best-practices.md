---
lang: ge
title: საუკეთესო პრაქტიკა შემსრულებლებისთვის
description: გაამარტივეთ თქვენი ცხოვრება, როგორც ღია კოდის შემსრულებელი, პროცესების დოკუმენტირებიდან თქვენი საზოგადოების გამოყენებამდე.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## რას ნიშნავს იყო კოდის შემანარჩუნებელი??

Iთუ თქვენ შეინარჩუნებთ ღია კოდის პროექტს, რომელსაც ბევრი ადამიანი იყენებს, თქვენ შეიძლება შეამჩნიოთ, რომ თქვენ ნაკლებად წერთ კოდს და მეტს პასუხობთ საკითხებზე.

პროექტის ადრეულ ეტაპებზე, თქვენ ატარებთ ექსპერიმენტებს ახალ იდეებზე და იღებთ გადაწყვეტილებებს იმის მიხედვით, რაც გსურთ. რაც უფრო იზრდება თქვენი პროექტი პოპულარობით, თქვენ აღმოჩნდებით, რომ უფრო მეტად მუშაობთ თქვენს მომხმარებლებთან და კონტრიბუტორებთან.

პროექტის შენახვა კოდზე მეტს მოითხოვს. ეს ამოცანები ხშირად მოულოდნელია, მაგრამ ისინი ისეთივე მნიშვნელოვანია მზარდი პროექტისთვის. ჩვენ შევკრიბეთ რამოდენიმე გზა, თქვენი ცხოვრების გასაადვილებლად, დაწყებული პროცესების დოკუმენტირებით დამთავრებული თქვენი საზოგადოებისთვის.

## თქვენი პროცესების დოკუმენტირება

აღწერილობა არის ერთ-ერთი ყველაზე მნიშვნელოვანი რამ, რისი გაკეთებაც შეგიძლიათ, როგორც შემნახველმა.

დოკუმენტაცია არა მხოლოდ განმარტავს თქვენს აზროვნებას, არამედ ის ეხმარება სხვა ადამიანებს გაიგონ რა გჭირდებათ ან რას ელოდებით, სანამ მათ კითხვები გაუჩნდებათ.

ჩამონაწერი აადვილებს უარის თქმას, როდესაც რაღაც არ ჯდება თქვენს ასპექტში. ეს ასევე აადვილებს ადამიანებს მონაწილეობას და დახმარებას. თქვენ არასოდეს იცით ვინ კითხულობს ან იყენებს თქვენს პროექტს.

მაშინაც კი, თუ არ იყენებთ სრულ აბზაცებს, შენიშვნის ჩაწერა უკეთესია, ვიდრე საერთოდ არ დაწეროთ.

გახსოვდეთ, შეინარჩუნოთ დოკუმენტაცია განახლებული. თუ ყოველთვის არ შეგიძლიათ ამის გაკეთება, წაშალეთ თქვენი მოძველებული დოკუმენტაცია ან მიუთითეთ ის მოძველებულია, რათა კონტრიბუტორებმა იცოდნენ, რომ განახლებები მისასალმებელია.

### ჩამოწერეთ თქვენი პროექტის ხედვა

დაიწყე შენი პროექტის მიზნის ჩამოწერა. დაამატეთ ის თქვენს README ფაილში, ან შექმენით ცალკე ფაილი სახელად VISION. ასევე ეს ყველაფერი გახადეთ საჯარო.

მკაფიო, დოკუმენტირებული ხედვის ქონა გინარჩუნებთ კონცენტრირებას.

მაგალითისთვის, @lord აღმოაჩინა რომ პროექტის ხედვა დაეხმარა მას იმის გარკვევაში, თუ რომელ მოთხოვნაზე დაეხარჯა დრო. როგორც ახალმა შემსრულებელი, ის ნანობდა, რომ არ დაემორჩილა თავისი პროექტის ფარგლებს, როდესაც მიიღო მისი პირველი მოთხოვნა ფუნქციის გაუმჯობესების . [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  მე შევცდი. მე არ დამიხარჯია დრო იმაზე რომ მიმეღო საბოლოო გამოსავალი. იმის ნაცვლად რომ არ
  შემიფასებია შესაბამისად, ვისურვებდი მეთქვა "მე არ მქონდა დრო მაგისთვის ამ ეტაპზე, მაგრამ მე მას დავამატებ გრძელვადიან სასიამოვნო პროდუქტთა სიას."
  <p markdown="1" class="pquote-credit">
— @lord, ["რჩევები ღია კოდის დამწყები შემსრულებლებისთვის"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### აცნობეთ თქვენს მოლოდინებს

წესების ჩაწერა შეიძლება ნერვების მომშლელი იყოს. ზოგჯერ შეიძლება გგონიათ, რომ აკონტროლებთ სხვა ადამიანების ქცევას ან კლავთ მთელ გართობას.

თუმცა, სამართლიანად დაწერილი და აღსრულებული, კარგი წესები აძლიერებს შემსრულებლებს. ისინი ხელს გიშლიან იმაში, რომ არ ჩაითრიონ ისეთი რამ, რისი გაკეთებაც არ გინდა.

ადამიანების უმეტესობამ, ვინც ხვდება თქვენს პროექტს, არაფერი იცის თქვენზე ან თქვენს გარემოებებზე. მათ შეიძლება ჩათვალონ, რომ ფულს იღებთ მასზე მუშაობისთვის, განსაკუთრებით თუ ეს არის ის, რასაც ისინი რეგულარულად იყენებენ და დამოკიდებულნი არიან. შესაძლოა ერთ მომენტში დიდი დრო დაუთმოთ თქვენს პროექტს, მაგრამ ახლა დაკავებული ხართ ახალი სამსახურით ან ოჯახის წევრით..

ეს ყველაფერი სავსებით მისაღებია! უბრალოდ დარწმუნდით, რომ სხვა ადამიანებმა იციან ამის შესახებ.

თუ თქვენი პროექტის შენარჩუნება არის ნახევარ განაკვეთზე ან წმინდა ნებაყოფლობით, იყავით გულწრფელი იმის შესახებ, თუ რამდენი დრო გაქვთ. ეს არ არის იგივე თუ რამდენი დრო ჭირდება
პროექტზე მუშაობას.

აქ არის რამდენიმე წესი, რომელთა ჩაწერა ღირს:

* როგორ ხდება შეტანილი წვლილის განხილვა და მიღება (_სჭირდებათ მათ ტესტები? პრობლემის შაბლონი?_)
* კონტრიბუციის ტიპებ რომლებსაც მიიღებთ (_გსურთ დახმარება მხოლოდ თქვენი კოდის გარკვეულ ნაწილთან დაკავშირებით?_)
* როდის არის მიზანშეწონილი დაკვირვება (_მაგალითისთვის, "თქვენ შეიძლება ელოდოთ პასუხს 7 დღის განმავლობაში შემსრულებლისგან. ამ დროის მანძილზე თუ არ შეგეხმიანეს თავისუფლად იგრძენი თავი თემის დასაპინგად."_)
*  რამდენ დროს გამოყოფთ პროექტისთვის (_მაგალითისთვის, "ჩვენ მხოლოდ 5 საათს ვუთმობთ ყოველ კივრა ამ პროექტს"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), და [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) არის პროექტების რამდენიმე მაგალითი, ძირითადი წესებით შემსრულებლებისა და კონტრიბუტორებისთვის.

### მიყევით საჯარო კომუნიკაციას 

არ დაგავიწყდეთ თქვენი ურთიერთქმედების დოკუმენტირებაც. სადაც  შეგიძლიათ, განაგრძოთ კომუნიკაცია თქვენი პროექტის შესახებ საჯაროდ. თუ ვინმე შეეცდება თქვენთან პირადად დაკავშირებას ფუნქციის მოთხოვნის ან მხარდაჭერის საჭიროების განსახილველად, თავაზიანად მიმართეთ მას საჯარო საკომუნიკაციო არხზე, როგორიცაა: საფოსტო სია ან საკითხის ტრეკერი.

თუ თქვენ შეხვდებით სხვა დამხმარეებს, ან მიიღებთ მნიშვნელოვან გადაწყვეტილებას პირადში, დააფიქსირეთ ეს საუბრები საჯაროდ, თუნდაც ეს მხოლოდ თქვენი შენიშვნების გამოქვეყნებაა.

ამგვარად, ნებისმიერს, ვინც თქვენს საზოგადოებას შეუერთდება, ექნება წვდომა იმავე ინფორმაციაზე, როგორც ვინმეს, ვინც იქ წლების განმავლობაში იმყოფება.

## ისწავლე უარის თქმა

შენ დაწერე აღწერილობა. იდეალურ შემთხვევაში, ყველა წაიკითხავს თქვენს დოკუმენტაციას, მაგრამ სინამდვილეში, თქვენ უნდა შეახსენოთ სხვებს, რომ ამის აღწერა არსებობს.

თუმცა, ყველაფრის ჩაწერა დაგეხმარებათ იმ სიტუაციების დეპერსონალიზაციაში, როდესაც თქვენი წესების დაცვა გჭირდებათ.

არას თქმა არ არის სახალისო, მაგრამ  _"თქვენს მიერ შეტანილი წვლილი არ ემთხვევა ამ პროექტის კრიტერიუმებს"_ იგრძნობა ნაკლებად პირადულად ვიდრე _"მე არ მომწონს შენს მიერ შეტანილი წვლილი"_.

უარყოფა შესაძლოა მოგიწიოთ ბევრ სიტუაციაში რომელსაც შეხვდებით. 

### შეინარჩუნეთ საუბარი მეგობრულად

ერთ-ერთი ყველაზე მნიშვნელოვანი ადგილი, სადაც თქვენ ივარჯიშებთ არას თქმაში, არის თქვენი საკითხი და მოთხოვნის რიგის გაყვანა. როგორც პროექტის შემსრულებელი, თქვენ აუცილებლად მიიღებთ წინადადებებს, რომელთა მიღებაც არ გსურთ.

შესაძლოა კონტრიბუცია ცვლის თქვენი პროექტის ფარგლებს ან არ ემთხვევა თქვენს ხედვას. შეიძლება იდეა კარგია, მაგრამ განხორციელება ცუდია.

განურჩევლად მიზეზისა, შესაძლებელია ტაქტიკურად გამოიყენოთ წვლილი, რომელიც არ აკმაყოფილებს თქვენი პროექტის სტანდარტებს.

თუ თქვენ მიიღებთ წვლილს, რომლის მიღებაც არ გსურთ, თქვენი პირველი რეაქცია შეიძლება იყოს მისი უგულებელყოფა ან თითქოს, რომ არ გინახავთ. ამით შეიძლება ზიანი მიაყენოს სხვის გრძნობებს და თქვენი საზოგადოების სხვა პოტენციური კონტრიბუტორების დემოტივაციასაც კი მოახდენს.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  ფართომასშტაბიანი ღია კოდის პროექტების მხარდაჭერის გასაღები არის პრობლემების მოძრაობა. შეეცადეთ თავიდან აიცილოთ პრობლემების შეჩერება. თუ თქვენ iOS-ის დეველოპერი ხართ, იცით, რამდენად სამარცხვინო შეიძლება იყოს რადარების გაგზავნა. შეიძლება გაიგოთ 2 წლის შემდეგ და გითხრეს, რომ ხელახლა სცადოთ iOS-ის უახლესი ვერსიით.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["ღია კოდის თემების მასშტაბირება"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

არ დატოვოთ არასასურველი წვლილი ღია, რადგან თავს დამნაშავედ გრძნობთ ან გსურთ იყოთ კეთილგანწყობილი. დროთა განმავლობაში, თქვენი პასუხგაუცემელი საკითხები და PR-ები გახდის თქვენს პროექტზე მუშაობას უფრო სტრესული და დამაშინებელი.
უმჯობესია დაუყოვნებლივ დახუროთ ის შენატანები, რომელთა მიღებაც იცით, რომ არ გსურთ. თუ თქვენი პროექტი უკვე განიცდის დიდ ჩამორჩენას, @steveklabnik აქვს წინადადებები [როგორ მოვაგვაროთ საკითხები ეფექტურად](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

მეორეც, შენატანების იგნორირება უარყოფით სიგნალს უგზავნის თქვენს საზოგადოებას. პროექტში წვლილის შეტანა შეიძლება დამაშინებელი იყოს, განსაკუთრებით თუ ეს ვინმესთვის პირველად ხდება. მაშინაც კი, თუ თქვენ არ მიიღებთ მათ წვლილს, აღიარეთ ის, ვინც მის უკან დგას და მადლობა გადაუხადეთ ინტერესისათვის. ეს საკმაოდ დიდი კომპლიმენტია!

თუ არ გსურთ წვლილის მიღება:

* **გადაუხადე მადლობა** მათი წვლილისთვის (კონტრიბუციისთვის)
* **აუხსენი რატო არ ჯდებაt** პროექტის ფარგლებში და შესთავაზეთ მკაფიო წინადადებები გაუმჯობესებისთვის, თუ შეგიძლიათ. იყავი კეთილი, მაგრამ მტკიცე.
* **მიაბით ბმული შესაბამისი დოკუმენტაციით**, თუ გაქვთ იგი. თუ შეამჩნევთ განმეორებით მოთხოვნებს იმ საკითხებზე, რისი მიღებაც არ გსურთ, დაამატეთ ისინი თქვენს დოკუმენტაციაში, რათა თავიდან აიცილოთ საკუთარი თავის გამეორება.
* **დახურეთ მოთხოვნა**

პასუხისთვის 1-2 წინადადებაზე მეტი არ უნდა დაგჭირდეთ.მაგალითისთვის, როდესაც მომხმარებელი [celery](https://github.com/celery/celery/) მოახსენა Windows-თან დაკავშირებული ერორი, @berkerpeksag [პასუხი გასცა](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

თუ არას თქმის ფიქრი გაშინებთ, თქვენ მარტო არ ხართ. როგორც @jessfraz [აღწერს](https://blog.jessfraz.com/post/the-art-of-closing/):

> მე ვესაუბრე დამხმარეებს სხვადასხვა ღია კოდის პროექტებიდან, Mesos, Kubernetes, Chromium, და ისინი ყველა თანხმდებიან, რომ ერთ-ერთი უმძიმესი ნაწილია , შემსრულებელზე უარის თქმა.

ნუ იგრძნობთ თავს დამნაშავედ იმის გამო, რომ არ გსურთ ვინმეს კონტრიბუციის მიღება. ღია წყაროს პირველი წესი, [twitter-ზე](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"უარი დროებითია, თანხმობა სამუდამო."_ მიუხედავად იმისა, რომ სხვისი ენთუზიაზმით თანაგრძნობა კარგია, წვლილის უარყოფა არ არის იგივე, რაც მის უკან მყოფი ადამიანის უარყოფა.

საბოლოო ჯამში, თუ კონტრიბუცია საკმარისად კარგი არ არის, თქვენ არ ხართ ვალდებული მიიღოთ იგი. იყავით კეთილი და პასუხისმგებელი, როდესაც ადამიანები წვლილი შეაქვს თქვენს პროექტში, მაგრამ მიიღეთ მხოლოდ ის ცვლილებები, რომლებიც ნამდვილად გჯერათ, რომ თქვენი პროექტს უკეთესს გახდის. რაც უფრო ხშირად ვარჯიშობთ არას თქმაში, მით უფრო ადვილი ხდება კბირდებით.

### იყავი პრო-აქტიური

არასასურველი შენატანების მოცულობის შესამცირებლად, პირველ რიგში, ახსენით თქვენი პროექტის პროცესი წვლილის წარდგენისა და მიღების შესახებ თქვენს დამხმარე სახელმძღვანელოში.

თუ თქვენ იღებთ ძალიან ბევრ უხარისხო შენატანს, მოითხოვეთ, რომ კონტრიბუტორებმა წინასწარ გააკეთონ ცოტა სამუშაო, მაგალითად:

* შეავსეთ საკითხი ან PR შაბლონი/შემოწმების სია
* გახსენით საკითხი PR-ის გაგზავნამდე

თუ ისინი არ იცავენ თქვენს წესებს, დაუყოვნებლივ დახურეთ საკითხი და მიუთითეთ თქვენს დოკუმენტაციაზე.

მიუხედავად იმისა, რომ ეს მიდგომა თავიდან შეიძლება არაკეთილსინდისიერი იყოს, პროაქტიული ყოფნა რეალურად კარგია ორივე მხარისთვის. ეს ამცირებს იმის შანსს, რომ ვინმემ დახარჯოს უამრავ ფუჭად დახარჯულ სამუშაო საათებში მოთხოვნის მოთხოვნა, რომელსაც თქვენ არ ეთანხმებით. და ეს გაადვილებს თქვენი დატვირთვის მართვას.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  იდეალურ შემთხვევაში, აუხსენით მათ  CONTRIBUTING.md ფაილი და აღუწერეთ, თუ როგორ შეუძლიათ მიიღონ უკეთესი მითითება მომავალში იმის შესახებ, თუ რას მიიღებენ ან არ მიიღებენ სამუშაოს დაწყებამდე.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["გთხოვთ დახუროთ მოთხოვნა"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

ხანდახან, როცა უარს ამბობთ, შესაძლოა თქვენი პოტენციური კონტრიბუტორი განაწყენდეს ან გააკრიტიკოს თქვენი გადაწყვეტილება. თუ მათი ქცევა მტრული ხდება, [მიიღეთ ზომები სიტუაციის განმუხტვის მიზნით](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) ან თუნდაც წაშალეთ ისინი თქვენი ქომუნითისგან, თუ მათ არ სურთ კონსტრუქციული თანამშრომლობა.

### მიიღეთ მენტორობა

შესაძლოა, ვინმე თქვენს საზოგადოებაში რეგულარულად წარადგენს შენატანებს, რომლებიც არ შეესაბამება თქვენი პროექტის სტანდარტებს. ორივე მხარისთვის შეიძლება იყოს იმედგაცრუებული, განმეორებით უარის თქმა.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first issue,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

One way to gain new contributors is to explicitly [label issues that are simple enough for beginners to tackle](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub will then surface these issues in various places on the platform, increasing their visibility.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#share-ownership-of-your-project) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for them.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review
* [no-response](https://github.com/probot/no-response) closes issues where the author hasn't responded to a request for more information
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) checks your dependency files every day for outdated requirements and opens individual pull requests for any it finds

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. @TalAter made a [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you can set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize by priority.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
